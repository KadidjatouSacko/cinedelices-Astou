
// import {recipes} from "../../data/data.js"
import { Genre, Recipe, Movie, Difficulty, Category } from "../models/index.js"; 


export const recipesController = {

    async GetAllRecipes(req,res) {

        try {
            const css = 'recipies';
            const js = "index";
            const title = " Page des recettes";
            const { difficulty, genre, price, search } = req.query;
    
            let recipes = await Recipe.findAll({
                include: [
                    { model: Movie, as: "movie" },
                    { model: Difficulty, as: "difficulty" },
                    { model: Category, as: "category" }
                ]
            });
    
            if (difficulty) {
                recipes = recipes.filter(recipe => recipe.difficulty.label === difficulty);
            }
    
            if (genre) {
                recipes = recipes.filter(recipe => recipe.movie.genre === genre);
            }
    
            if (price) {
                recipes = recipes.filter(recipe => recipe.price === price);
            }
    
            if (search) {
                const searchLower = search.toLowerCase();
                recipes = recipes.filter(recipe =>
                    recipe.name.toLowerCase().includes(searchLower) || 
                    recipe.movie.title.toLowerCase().includes(searchLower)
                );
            }
    
          
            const genres = await Genre.findAll();
              console.log (genres)
            res.render("recipes", { 
                title,
                css,
                js,
                recipes, 
                genres,  
                difficulty: "", 
                selectedGenre: genre,  
                price: price,
                search: search 
            });
    
        } catch (error) {
            console.error("Erreur lors de la récupération des recettes :", error);
            res.status(500).send("Erreur serveur");
        }

      /*const recipes = await Recipe.findAll({
        include: [ 'difficulty', 'category', 'movie' ]
      });

      const css = 'recipies';
      const js = "index";
      const title = " Page des recettes";

      // console.log(recipes)

      res.render("recipes", {recipes, title, css, js, difficulty: "", 
        selectedGenre: "",
        price: "",
        search: ""});*/
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


      async FiltrerRecipies(req, res) {
          
      }
  }
