import { Router } from "express";
import path from "path";
import multer from "multer";
const storageRecipe = multer.diskStorage({
    destination: './uploads/',
    filename: function(req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  
const uploadImageRecipe = multer({ storage: storageRecipe })

import { mainController } from "./controllers/mainController.js";
import { recipesController } from "./controllers/recipesController.js"; 
//import { moviesController } from "/controllers/moviesController.js";
import { movieController } from "./controllers/movieController.js";
import { legalsNoticesController } from "./controllers/legalsNoticesController.js";
import { contactController } from "./controllers/contactController.js";
import { authController } from "./controllers/authController.js";

export const router = new Router();

router.get("/", mainController.renderHomePage);
router.get("/recettes", recipesController.GetAllRecipes);
router.get("/recettes/:id", recipesController.GetOneRecipe);

// router.get("/films", moviesController.GetAllMovies);
// router.get("/films/:title", moviesController.GetOneMovie);
router.get("/mentions-legales", legalsNoticesController.GetAllLegalsNotices)
router.get("/inscription",authController.GetRegistration)
router.get("/contact", contactController.GetContact)
router.post("/contact",contactController.ContactSumbit)
router.get("/recette/ajouter",recipesController.RenderFilmSelectPage)
router.get("/recette/ajouter/recette",recipesController.RenderAddRecipePage)
router.post("/recette/ajouter", uploadImageRecipe.single('image'), recipesController.AddOneRecipe)
router.post('/recette/ajouter/validation', recipesController.validateInsert)
router.get("/rechercher/titre", movieController.searchMovieByTitle)
router.get("/rechercher/genre", movieController.searchMovieByCategory)
router.get("/films", moviesController.GetAllMovies);
router.get("/films/:title", moviesController.GetOneMovie);
router.post("/inscription", authController.signUp);
router.get("/connexion",authController.LoginPage);
router.post("/connexion",authController.login);

