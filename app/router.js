// Import de l'usine à routers
import { Router } from "express";
import { mainController } from "./controllers/MainController";



// Création d'un router
export const router = Router();




// === Paramétrage du router ===


// --- Route / ---
router.get("/", mainController.renderHomePage);


