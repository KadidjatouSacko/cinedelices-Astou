import { User } from "../models/User.js";
import rateLimit from 'express-rate-limit';
import cookieParser from "cookie-parser";
import { Recipe, Ingredient, Step } from "../models/index.js";

import argon2 from "argon2";
import passwordValidator from "password-validator";

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5,
  message: "Trop de tentatives de connexion, veuillez réessayer plus tard"
});



export const authController = {


  GetRegistration(req, res) {
    res.render("registration", {
      css: 'registration',
      js: 'registration'
    });
  },

  LoginPage(req, res) {
    res.render("login", {
      css: 'login',
      js: 'login',
      error: req.query.error
    });
  },
  

  async login(req, res) {
    const { pseudo, password } = req.body;
  
    const loginLimiter = rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 5, // Limiter à 5 tentatives
      message: "Trop de tentatives de connexion, veuillez réessayer plus tard"
    });
  
    try {
    
      const user = await User.findOne({
        where: { pseudo: pseudo }
      });
  
      if (!user) {
        return res.render("login", { errorMessage: "Identifiants incorrects" });
      }
  
      const isValidPassword = await argon2.verify(user.password, password);
  
     
      if (!isValidPassword) {
        return res.render("login", { errorMessage: "Identifiants incorrects" });
      }
  
      req.session.userId = user.id;

      res.cookie("username", user.pseudo, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24, // 1 jour
        sameSite: "strict"
        
    }),
    
      res.redirect("/");
    } catch (error) {
      if (error.message === "Trop de tentatives de connexion, veuillez réessayer plus tard") {
        return res.render("login", { errorMessage: error.message });
      }
      // Autres erreurs
      return res.status(500).send("Erreur serveur");
    }
  },
  
 
  logout(req, res) {

    req.session.destroy();
 
    res.redirect("/");
  },
  
   async signUp(req, res) {
    try {
      console.log("Données reçues:", req.body);

      const { firstname, lastname, email, password, confirm_password, pseudo } = req.body;

     
      if (!firstname || !lastname || !email || !password || !confirm_password || !pseudo) {
        return res.render("registration", {
          error: "Tous les champs sont obligatoires",
          formData: req.body
        });
      }

      const schema = new passwordValidator();
      schema
        .is().min(8)         // Minimum 8 caractères
        .is().max(100)       // Maximum 100 caractères
        .has().uppercase()   // Doit contenir une majuscule
        .has().lowercase()   // Doit contenir une minuscule
        .has().digits(2)     // Doit contenir au moins 2 chiffres
        .has().symbols(1);   // Doit contenir au moins 1 caractère spécial

      if (!schema.validate(password)) {
        return res.render("registration", {
          error: "Mot de passe trop faible (8 caractères minimum, 1 majuscule, 1 minuscule, 2 chiffres, 1 symbole).",
          formData: req.body
        });
      }

     
      if (password !== confirm_password) {
        return res.render("registration", {
          error: "Les mots de passe ne correspondent pas",
          formData: req.body
        });
      }

   
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.render("registration", {
          error: "Cet email est déjà utilisé",
          formData: req.body
        });
      }

 
      const existingPseudo = await User.findOne({ where: { pseudo } });
      if (existingPseudo) {
        return res.render("registration", {
          error: "Ce pseudo est déjà utilisé",
          formData: req.body
        });
      }

      // Hashage du mot de passe avec Argon2
      const hashOptions = {
        timeCost: 3,       // Facteur de coût en temps
        memoryCost: 65536, // Utilisation mémoire (64 MB)
        parallelism: 1,    // Parallélisme
        type: argon2.argon2id // Algorithme recommandé
      };

      const hashedPassword = await argon2.hash(password, hashOptions);

    
      const newUser = await User.create({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        pseudo,
        role: "member"
      });

      console.log("Utilisateur créé avec succès:", newUser.id); // Sécurité : afficher uniquement l'ID

   
      res.redirect("/connexion");

    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      res.render("registration", {
        error: "Une erreur est survenue lors de l'inscription",
        formData: req.body
      });
    }
  },

  async  renderUserProfile(req, res) {
    try {
        const userId = req.session.userId;  // Assure-toi que l'ID de l'utilisateur est bien dans la session
        const user = await User.findOne({
          where: { id: userId }
      });

        if (!user) {
            return res.status(404).send("Utilisateur non trouvé");
        }

        res.render('user-profile', { user });
    } catch (err) {
        console.log(err);
        res.status(500).send("Erreur serveur");
    }
},


  async renderEditProfilePage(req, res) {
    try {
        const userId = req.user.id;
        const user = await User.findOne({ where: { id: userId } });

        if (!user) {
            return res.status(404).send("Utilisateur non trouvé");
        }

        res.render("edit-profile", {
            title: "Modifier mon profil",
            user: user
        });
    } catch (err) {
        console.log(err);
        res.status(500).send("Erreur serveur");
    }
},

    async  updateUserProfile(req, res) {
      try {
          const userId = req.session.userId; // Vérifie que l'utilisateur est bien connecté
          if (!userId) {
              return res.status(401).send("Utilisateur non connecté");
          }

          // Récupérer les nouvelles données du formulaire
          const { pseudo, firstname, lastname, email, password, confirmPassword } = req.body;

          // Vérifier que l'utilisateur existe
          const user = await User.findByPk(userId);
          if (!user) {
              return res.status(404).send("Utilisateur non trouvé");
          }

          // Mise à jour des champs (uniquement si remplis)
          if (pseudo) user.pseudo = pseudo;
          if (firstname) user.firstname = firstname;
          if (lastname) user.lastname = lastname;
          if (email) user.email = email;

          // Validation du mot de passe
          if (password) {
              if (password !== confirmPassword) {
                  return res.status(400).send("Les mots de passe ne correspondent pas.");
              }

              // Vérifier la validité du mot de passe avec le schéma
              if (!passwordSchema.validate(password)) {
                  return res.status(400).send("Le mot de passe ne respecte pas les critères de sécurité.");
              }

              // Hashage du mot de passe avec argon2
              const hashedPassword = await argon2.hash(password);
              user.password = hashedPassword;
          }

          // Enregistrer les modifications
          await user.save();

          res.redirect("/profil"); // Redirection après la mise à jour
      } catch (error) {
          console.error(error);
          res.status(500).send("Erreur serveur");
      }
    }, 

    showDeleteConfirmation (req, res) {
      // Vérifiez si l'utilisateur est connecté
      if (!req.session.userId) {
          return res.redirect('/connexion'); // Si l'utilisateur n'est pas connecté, redirigez-le vers la page de connexion
      }
  
      // Afficher la vue de confirmation de suppression
      res.render('delete-account');
  },
  
  // Supprimer le compte de l'utilisateur
      async deleteAccount (req, res)  {
      try {
          const userId = req.session.userId;
  
          // Vérifiez si l'utilisateur est connecté
          if (!userId) {
              return res.redirect('/connexion'); // Rediriger vers la connexion si l'utilisateur n'est pas connecté
          }
  
          // Supprimer l'utilisateur de la base de données
          const user = await User.findOne({ where: { id: userId } });
  
          if (!user) {
              return res.status(404).send("Utilisateur non trouvé");
          }
  
          // Supprimer l'utilisateur
          await User.destroy({ where: { id: userId } });
  
          // Détruire la session de l'utilisateur après la suppression du compte
          req.session.destroy((err) => {
              if (err) {
                  return res.status(500).send("Erreur lors de la déconnexion");
              }
  
              // Rediriger l'utilisateur vers la page d'accueil après suppression
              res.redirect('/');
          });
      } catch (err) {
          console.log(err);
          res.status(500).send("Erreur serveur");
      }
},
};