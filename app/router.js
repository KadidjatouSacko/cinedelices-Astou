
import { mainController } from "./controllers/mainController.js";
import { recipesController } from "./controllers/recipes-controllers.js"; 
import { moviesController } from "./controllers/movies-controllers.js";

export const router = Router();

router.get("/", mainController.renderHomePage);
router.get("/recettes", recipesController.GetAllRecipes);
router.get("/recette/:name", recipesController.GetOneRecipe);
router.get("/movies", moviesController.GetAllMovies);
router.get("/movies/:title", moviesController.GetOneMovies);
