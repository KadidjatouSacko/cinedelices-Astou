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
 
    const { pseudo, password } = req.body;
    
    const user = await User.findOne({
      where: { pseudo: pseudo }
    });

    if (!user) {
      return res.render("login", { errorMessage: "Identifiants incorrects" });
    }

    const hashOptions = {
      timeCost: 3,       // Facteur de coût en temps
      memoryCost: 65536, // Utilisation mémoire (64 MB)
      parallelism: 1,    // Parallélisme
      type: argon2.argon2id // Algorithme recommandé
    };
    const isValidPassword = await argon2.verify(user.password, password, hashOptions);
    /*if (!isValidPassword) {
      return res.render("login", { errorMessage: "Identifiants incorrects" });
    }*/

    req.session.userId = user.id;

    res.redirect("/");
  },
 
  logout(req, res) {

    req.session.destroy();
 
    res.redirect("/");
  },
};








