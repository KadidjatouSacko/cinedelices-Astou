import { Router } from "express";
import { recipesController } from "./controllers/recipes-controllers.js"; 
import { mainController } from "./controllers/main-controller.js";
import { moviesController } from "./controllers/movies-controllers.js";
import { legalsnoticesController } from "./controllers/legalNotice-controllers.js";
import { contactController } from "./controllers/contact-controllers.js";
import { registrationController } from "./controllers/registration-controllers.js";

export const router = Router();

router.get("/recettes", recipesController.GetAllRecipes);
router.get("/recette/:name", recipesController.GetOneRecipe);
router.get("/movies", moviesController.GetAllMovies);
router.get("/movies/:title", moviesController.GetOneMovies);
router.get("/legal-notices", legalsnoticesController.GetAllMentions)
router.get("/contact", contactController.Getcontact)
router.get("/inscription",registrationController.Getresgistration)
router.post("/contact/submit",contactController.contactSumbit)


