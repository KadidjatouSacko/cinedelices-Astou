import { Router } from "express";
import { recipesController } from "./controllers/recipes-controllers"; 
import { mainController } from "./controllers/main-controller.js";

export const router = Router();

router.get("/recettes", recipesController.GetAllRecipes);



