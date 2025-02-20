import { Router } from "express";

import { mainController } from "./controllers/mainController.js";
import { recipesController } from "./controllers/recipesController.js"; 
import { moviesController } from "./controllers/moviesController.js";
import { legalsNoticesController } from "./controllers/legalsNoticesController.js";
import { contactController } from "./controllers/contactController.js";
import { authController } from "./controllers/authController.js";

export const router = new Router();

router.get("/", mainController.renderHomePage);
router.get("/recettes", recipesController.GetAllRecipes);
// router.get("/recette/:name", recipesController.GetOneRecipe);
router.get("/recettes/:id", recipesController.GetOneRecipe);
router.get("/films", moviesController.GetAllMovies);
router.get("/films/:title", moviesController.GetOneMovie);

router.get("/mentions-legales", legalsNoticesController.GetAllLegalsNotices);
router.get("/inscription",authController.GetRegistration);
router.get("/contact", contactController.GetContact);
router.post("/contact",contactController.ContactSumbit);
router.get("/connexion",authController.LoginPage);
router.post("/connexion",authController.login);