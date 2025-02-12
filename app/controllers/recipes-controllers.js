
  import {recettes} from "../../data/data"
    export const recipesController = {

        GetAllRecipes(req,res) {
            res.render("recipes"), {recettes};
    
        },
    }
    
    