import { Tool } from "../models/Tool.js";
import { Ingredient } from "../models/Ingredient.js";

// function addTo(elt, list) {
//     const list = document.
// }

export const recipesController = {
    async renderAddRecipePage(req, res) {
        console.log('youhouuuuu');
        const css = "formRecipe"; 
        const js = "form";
        const title = "Ajouter une recette";
        const tools = await Tool.findAll();
        const ingredients = await Ingredient.findAll()
        //console.log(items);
        res.render("formRecipe", { css, js, title, tools, ingredients })
    },

    addTo(req, res) {

    }
}