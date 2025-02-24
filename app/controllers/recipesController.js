//import upload from "../../index.js";

// import {recipes} from "../../data/data.js"

import { Genre, Recipe, Ingredient, Movie, Difficulty, Category, Tool, Step, User, Price  } from "../models/index.js";

export const recipesController = {


  GetOneRecipe(req, res) {
    const recipeName = req.params.name.toLowerCase();
    const recipe = recipes.find(r => r.name.toLowerCase() === recipeName);
    res.render("recipe", { recipe })
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


  async GetAllRecipes(req, res) {

    try {
      const css = 'recipes';
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
      console.log(genres)
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

    const recipes = await Recipe.findAll({
      include: ['difficulty', 'category', 'movie']
    });

    const css = 'recipes';
    const js = "index";
    const title = " Page des recettes";

    // console.log(recipes)


    res.render("recipes", { recipes, title, css, js });
  },

  GetOneRecipe(req, res) {
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
    const moviesTreated = [];
    movies.results.forEach(movie => {
      const movieTreated = { id: movie.id, title: movie.title, image: `https://image.tmdb.org/t/p/w300${movie.poster_path}`, year: movie.release_date }
      moviesTreated.push(movieTreated);
    });
    // const poster = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/images`)

    const message = "Aucun film trouvé"
    res.render("form-movie", { css, title, js, moviesTreated, message })
  },

  async RenderAddRecipePage(req, res) {
    const filmId = req.query.movie_id;
    const css = "formRecipe"
    const title = "Ajouter une recette"
    const js = "form";

    let movie = await Movie.findOne({ where: { tmdb_id: filmId } });
    if (!movie)
    {
      const movieData = await fetch(`https://api.themoviedb.org/3/movie/${filmId}?language=fr-FR`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzliYmU1Y2NmZTNkZDkzYTA5NzE3YjYwM2Y0MjUxMSIsIm5iZiI6MTYzNDQwOTM3Ny43NjcsInN1YiI6IjYxNmIxYmExOTcxNWFlMDA0NDdhNzg1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NsQ44WmFHl7YAEPm0QnidrdGrwG-K7x7r_2ZOI25TM'
        }
      })
      .then(res => res.json())
  
      const newMovieData = {
        title: movieData.title,
        year: movieData.release_date,
        tmdb_id: filmId
      }
      
      movie = await Movie.create(newMovieData);
      movieData.genres.forEach(genre => {
        movie.addGenre(genre.id);
      });
    }
    res.render("form-recipe", { css, title, js, filmId: movie.id })
  },


  async AddOneRecipe(req, res) {
    const css = "formRecipe"
    const title = "Ciné Délices || Ajouter une recette"
    const js = "form";

    console.log(req.body);

    try {
      const { film_id, name, category, duration, description, difficulty } = req.body;
      let newRecipe = { name: name, description: description, duration: duration, difficulty_id: difficulty, category_id: category, movie_id: film_id }
      if (req.file) {
        newRecipe.image = req.file.filename;
      }

      const recipe = await Recipe.create(newRecipe);
      res.redirect('/recettes')
    } catch (err) {
      console.log(err);

    }

    //  await recipe.save();
    //res.redirect("/recettes")
  },

  async validateInsert(req, res) {


    const recipes = await Recipe.findAll()
    console.log(recipes);

    res.redirect("/recettes")
  }, 

  async RenderUpdateRecipePage(req, res) {

    try {
      const css = 'update-recipe'
      const js = 'update-recipe'
      const title = 'Modifier la recette <%= recipe.name %>'
      const recipe_id = req.params.id
      
      const recipe = await Recipe.findByPk(recipe_id, {
        include: [
          { model: Category, as: "category" },
          { model: Price, as: "price"},
          { model: Difficulty, as: "difficulty"},
          { model: User, as: "user"},
          { model: Tool, as: "tools"},
          { model: Ingredient, as: "ingredients"},
          { model: Step, as: "steps"}
        ]
      })

      res.render("update-recipe", { css, js, title, recipe} )
    } catch { (err) => {
        console.log(err);
      }
    }
  }
};