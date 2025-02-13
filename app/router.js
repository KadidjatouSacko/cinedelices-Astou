import { Router } from "express";
import { recipesController } from "./controllers/recipes-controllers.js"; 
import { mainController } from "./controllers/main-controller.js";
import { moviesController } from "./controllers/movies-controllers.js";

export const router = Router();

router.get("/recettes", recipesController.GetAllRecipes);
router.get("/recette/:name", recipesController.GetOneRecipe);
router.get("/movies", moviesController.GetAllMovies);
router.get("/movies/:title", moviesController.GetOneMovies);



