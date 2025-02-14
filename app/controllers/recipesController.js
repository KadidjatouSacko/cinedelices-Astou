
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
      const recipeName = req.params.name.toLowerCase();
      const recipe = recipes.find(r => r.name.toLowerCase() === recipeName);
      res.render("recipe", {recipe})
    },

    async RenderAddRecipePage(req, res) {
      console.log('youhouuuuu');
      const css = "formRecipe"; 
      const js = "form";
      const title = "Ajouter une recette";
      // const tools = await Tool.findAll();
      const ingredients = await Ingredient.findAll()
      //console.log(items);
      res.render("formRecipe", { css, js, title, tools, ingredients })
  },
}

    