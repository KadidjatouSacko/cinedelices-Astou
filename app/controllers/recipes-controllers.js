
  import {recipes} from "../../data/data.js"
    export const recipesController = {

        GetAllRecipes(req,res) {
          const css = 'recipies';
            res.render("recipes", {recipes, css});
    
        },

        GetOneRecipe(req,res) {
          const recipeName = req.params.name.toLowerCase();
          const recipe = recipes.find(r => r.name.toLowerCase() === recipeName);
          res.render("recipe", {recipe})
        }
    }

    