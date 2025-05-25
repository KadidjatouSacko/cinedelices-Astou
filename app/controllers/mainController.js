import { Recipe } from "../models/index.js";

export const mainController = {

    async renderHomePage(req, res) {
        const css = "home";
        const title = "Accueil";
        const js = "index"
        const recipes = await Recipe.findAll({
            include: [ 'difficulty', 'category', 'movie' ],
            order: [['created_at', 'ASC']],
            limit: 3,
          })
          
        //console.log(recipes);
        
        
        res.render("home", { css, title, js, recipes });
    },
}
