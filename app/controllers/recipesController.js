//import upload from "../../index.js";

// import {recipes} from "../../data/data.js"
import { Recipe, Ingredient, Category } from "../models/index.js";
import { MovieCategory } from "../models/MovieCategory.js"

export const recipesController = {

    async GetAllRecipes(req,res) {

      const recipes = await Recipe.findAll({
        include: [ 'difficulty', 'category', 'movie' ]
      });

      const css = 'recipes';
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
      //console.log(movies);
      const moviesTreated = [];     
      movies.results.forEach(movie => {                
        const movieTreated = {id: movie.id, title: movie.title, image: `https://image.tmdb.org/t/p/w300${movie.poster_path}`, year: movie.release_date }
        moviesTreated.push(movieTreated);
      })
            
      // Appel à l'API TMDB avec node-fetch
      const categories = await MovieCategory.findAll()
     // console.log(categories);
            
      const message = "Aucun film trouvé"
      res.render("form-movie", { css, title, js, moviesTreated, categories, message })
  },

  RenderAddRecipePage(req,res) {
    const filmId = req.query.id;
    const css = "formRecipe"
    const title = "Ajouter une recette"
    const js = "form";
    console.log(req.query);
    console.log('film', filmId);
    res.render("form-recipe", {css, title, js, filmId})
  },
  
  async AddOneRecipe(req, res) {      
    const css = "formRecipe"
    const title = "Ciné Délices || Ajouter une recette"
    const js = "form";
   
    console.log(req.body);

    try {
      const {film_id, name, category, duration, description, difficulty} = req.body;

      const image = req.file.filename;
      console.log(req.file); 

      const recipe = new Recipe({name: name, description: description, duration: duration, image: image, difficulty: difficulty, category: category, movie_id: film_id}) 
      await recipe.save();
      console.log("insert réussi");
      res.redirect('/recettes')
    } catch(err) {
      console.log(err);
      
    }
       

  //  await recipe.save();
   

    res.redirect("/recettes")
    },

    async validateInsert(req, res) {


      const recipes = await Recipe.findAll()
      console.log(recipes);
      
      res.redirect("/recettes")
    }

  };

  