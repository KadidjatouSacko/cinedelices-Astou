// Import de l'usine à routers
import { Router } from "express";
import { mainController } from "./controllers/main-controller.js";
import { recipesController } from "./controllers/recipeController.js";


// Création d'un router
export const router = Router();




// === Paramétrage du router ===


// --- Route / ---
router.get("/", mainController.renderHomePage);
router.get("/recettes", recipesController.renderRecipePage);

