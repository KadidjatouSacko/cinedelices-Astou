// Import de l'usine à routers
import { Router } from "express";

// Création d'un router
export const router = Router();




// === Paramétrage du router ===


// --- Route / ---
router.get("/", mainController.renderHomePage);


