import { User } from "../models/User.js";
import passwordValidator from "password-validator";
import argon2 from "argon2";

export const authController = {
  async GetRegistration(req, res) {
    res.render("registration");
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
  }
};
