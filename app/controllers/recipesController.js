//import upload from "../../index.js";

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
      const recipeName = req.params.label;
      // const recipe = recipes.find(r => r.name === recipeName);
      res.render("recipe", {})
    },
    
    async RenderFilmSelectPage(req, res) {
      // console.log('youhouuuuu');
      const css = "formMovie"; 
      const js = "form";
      const title = "Ajouter une recette - relier un film à votre recette ";
      const movies = await fetch('https://api.themoviedb.org/3/discover/movie?append_to_response=images&include_adult=false&include_video=false&language=fr&page=1&sort_by=popularity.desc', {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzliYmU1Y2NmZTNkZDkzYTA5NzE3YjYwM2Y0MjUxMSIsIm5iZiI6MTYzNDQwOTM3Ny43NjcsInN1YiI6IjYxNmIxYmExOTcxNWFlMDA0NDdhNzg1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NsQ44WmFHl7YAEPm0QnidrdGrwG-K7x7r_2ZOI25TM'
        }
      })
      .then(res => res.json())
      console.log(movies);
     // const poster = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/images`)
      
      const message = "Aucun film trouvé"
      res.render("form-movie", { css, title, js, movies, message })
  },

  RenderAddRecipePage(req,res) {
    const filmId = req.params.filmId;
    const css = "formRecipe"
    const title = "Ajouter une recette"
    const js = "form";
    console.log('film', filmId);
    res.render("form-recipe", {css, title, js})
  },
  
  async AddOneRecipe(req, res) {      
    const css = "formRecipe"
    const title = "Ajouter une recette"
    const js = "form";

    console.log(req.body);
    console.log(req.file);

    //console.log(name)  
    res.render("form-recipe", { css, js, title }) 
    },
       
  };

  