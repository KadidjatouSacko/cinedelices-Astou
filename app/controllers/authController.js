import { User } from "../models/User.js";
import argon2 from "argon2";

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
    // récuperer les infos du formulaire
    const { pseudo, password } = req.body;
    // vérifier si l'utilisateur existe en bdd
    const user = await User.findOne({
      where: { pseudo: pseudo }
    });
    // si pas de user
    if (!user) {
      // todo : renvoyer vers login avec un message d'erreur approprié
      return res.render("login", { errorMessage: "Identifiants incorrects" }); // !attention aux infos que l'on donne à l'utilisateur
      return;
    }
    // on vérifie la correpondance des mots de passe (argon2)
    const isValidPassword = await argon2.verify(user.password, password);
    if (!isValidPassword) {
      // todo : renvoyer vers login avec un message d'erreur approprié
      return res.render("login", { errorMessage: "Identifiants incorrects" }); // !attention aux infos que l'on donne à l'utilisateur
      return;
    }
    // si tout est ok
    // on va stocker en session l'id de l'utilisateur
    // l'idée c'est de verifier à chaque requete, que l'utilisateur a bien les droits auquel il prétend
    req.session.userId = user.id;
    // puis on redirige vers la home
    res.redirect("/");
  },
  // deconnexion
  logout(req, res) {
    // détruire la session
    req.session.destroy();
    // rediriger vers la home
    res.redirect("/");
  },
};








