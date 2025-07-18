import { Router } from "express";
import path from "path";
import fs from "fs";
import multer from "multer";

// Configuration de multer pour l'upload des images
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    const uploadDir = path.join(process.cwd(), 'public/img/recipes');
    
    // Créer le répertoire s'il n'existe pas
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    
    cb(null, uploadDir);
  },
  filename: function(req, file, cb) {
    // Générer un nom de fichier unique avec timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const ext = path.extname(file.originalname);
    cb(null, 'recipe-' + uniqueSuffix + ext);
  }
});

const fileFilter = (req, file, cb) => {
  const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
  
  if (allowedTypes.includes(file.mimetype.toLowerCase())) {
    cb(null, true);
  } else {
    cb(new Error('Type de fichier non supporté. Utilisez JPG, PNG, GIF ou WebP.'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5 MB max
  },
  fileFilter: fileFilter
});

// Middleware pour gérer les erreurs Multer
const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({
        error: 'Le fichier est trop volumineux. Taille maximum: 5MB'
      });
    }
  } else if (err) {
    return res.status(400).json({
      error: err.message
    });
  }
  next();
};



import { mainController } from "./controllers/mainController.js";
import { recipesController } from "./controllers/recipesController.js"; 
// import { moviesController } from "/controllers/moviesController.js";
import { moviesController } from "./controllers/moviesController.js";

import { movieController } from "./controllers/movieController.js";
import { legalsNoticesController } from "./controllers/legalsNoticesController.js";
import { contactController } from "./controllers/contactController.js";
import { authController } from "./controllers/authController.js";
import { loginLimiter } from "./controllers/authController.js";
import { isLoggedMiddleware

 } from "./middlewares/isLoggedMiddleware.js";
export const router = new Router();

router.post('/recette/ajouter', 
  upload.single('image'), 
  handleMulterError,
  recipesController.AddOneRecipe
);

router.get("/", mainController.renderHomePage); //OK
router.get("/recettes", recipesController.GetAllRecipes);   //OK
router.get("/recettes/:slug", recipesController.GetOneRecipe); //OK

router.get("/films", moviesController.GetAllMovies);
router.get("/films/:title", moviesController.GetOneMovie);
router.get("/mentions-legales", legalsNoticesController.GetAllLegalsNotices)  
router.get("/inscription",authController.GetRegistration) //OK
router.get("/contact", contactController.GetContact)    //OK
router.post("/contact",contactController.ContactSumbit)   //OK


//UNIQUEMENT POUR UNE PERSONNE CONNECTEE :
    //PROFIL
router.get("/profil", isLoggedMiddleware,authController.renderUserProfile);
router.get("/profil/modifier",isLoggedMiddleware, authController.renderEditProfilePage);
router.post("/profil/modifier",isLoggedMiddleware, authController.updateUserProfile);
router.get('/profil/supprimer',isLoggedMiddleware, authController.showDeleteConfirmation);
router.post('/profil/supprimer',isLoggedMiddleware, authController.deleteAccount);

   //RECETTE
router.get("/recette/select-film",isLoggedMiddleware, recipesController.RenderFilmSelectPage) 
router.get("/recette/ajouter",isLoggedMiddleware,recipesController.RenderAddRecipePage)
router.post('/recette/ajouter',isLoggedMiddleware, upload.single('image'), recipesController.AddOneRecipe);
// Route pour afficher le formulaire de modification
router.get('/recette/:slug/modifier', isLoggedMiddleware, recipesController.renderUpdateRecipePage);
// router.post("/recette/:slug/modifier", uploadImageRecipe.single('image'), recipesController.UpdateRecipe);
// Route pour traiter la mise à jour de la recette
router.post('/recette/:slug/modifier',isLoggedMiddleware, upload.single('image'), recipesController.updateRecipe);
router.get("/recette/:slug/supprimer",isLoggedMiddleware, recipesController.deleteRecipe),
// router.post("/recette/:id/modifier", recipesController.UpdateRecipeById)


// Route pour afficher le formulaire de recherche vide
router.get('/rechercher', movieController.showSearchForm);
// Route unifiée pour la recherche (nouvelle route principale)
router.get('/rechercher/films', movieController.searchMoviesUnified);
// Routes existantes maintenues pour la compatibilité
router.get('/rechercher/titre', movieController.searchMovieByTitle);
router.get('/rechercher/genre', movieController.searchMovieByCategory);
router.get('/films/:title', movieController.renderMoviesFromApi);

router.get("/films", moviesController.GetAllMovies);   //OK
router.get('/films/:slug', moviesController.GetOneMovie);
router.post("/inscription", authController.signUp);//OK
router.get("/connexion",authController.LoginPage); //OK
router.post("/connexion", loginLimiter, authController.login);

router.get("/deconnexion", authController.logout)  //OK


export default upload;
