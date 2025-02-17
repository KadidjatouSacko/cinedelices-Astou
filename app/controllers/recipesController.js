import upload from "../../index.js";

// import {recipes} from "../../data/data.js"
import { Recipe, Ingredient } from "../models/index.js";

export const recipesController = {

    async GetAllRecipes(req,res) {

      const recipes = await Recipe.findAll({
        include: [ 'difficulty', 'category', 'movie' ]
      });

      const css = 'recipies';
      const js = "index";
      const title = " Page des recettes";

      console.log(recipes);

      res.render("recipes", {recipes, title, css, js});
    },

    GetOneRecipe(req,res) {
      const recipeName = req.params.label.toLowerCase();
      const recipe = recipes.find(r => r.name.toLowerCase() === recipeName);
      res.render("recipe", {recipe})
    },

    async RenderAddRecipePage(req, res) {
      // console.log('youhouuuuu');
      const css = "formRecipe"; 
      const js = "form";
      const title = "Ajouter une recette : Relier un film à votre recette ... ";
      // const tools = await Tool.findAll();
      const ingredients = await Ingredient.findAll()
      //console.log(items);
      res.render("form-movie", { css, js, title, ingredients })
  },

  async AddOneRecipe(req, res) {
const  upload  =  multer ( {  dest : './public/assets/img/'  } ) 
app . post ( '/stats' ,  upload . single ( 'uploaded_file' ) ,  function  ( req ,  res )  { 
   // req.file est le nom de votre fichier dans le formulaire ci-dessus, ici 'uploaded_file' 
   // req.body contiendra les champs de texte, s'il y en avait 
   console . log ( req . file ,  req . body ) 
} ) ;
      try {
        // Le fichier est disponible dans req.file
        const imageUrl = `/assets/img/recipes/${req.file.filename}`;
        
        // Les autres données du formulaire sont dans req.body
        const { name, category, movie_id, description, image, ingredient, instructions, } = req.body;
        
        // Ici, ajoutez votre logique pour sauvegarder la recette dans la base de données
        
        res.status(200).json({
          message: 'Recette ajoutée avec succès',
          imageUrl: imageUrl
        });
      } catch (error) {
        res.status(400).json({
          error: error.message
        });
      }
      console.log(req.body.name)
    // const  {name,
    // // //   category,
    // // //   movie_id,
    // // //   description,
    // // //   image,
    // // //   ingredient,
    // // //   instructions,
    // } = req.body
      
    const css = "formRecipe"
    const title = "Ajouter une recette"
    const js = "form";

    //console.log(name)    
      res.render("form-recipe", { css, js, title }) 
    },
       
    }

    // ValidateRecipe(req, res) {
    //   const name = req.query.name
    //   console.log(name);
      
    //   const css = "recipes"
    //   const js = "index"
    //   const title = "Catalogue de recettes"
    //   res.render('recipes', { css, js, title })
    // }

  //}