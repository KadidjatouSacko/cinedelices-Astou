import dotenv from "dotenv";
dotenv.config();

import { Movie, Recipe, Genre, Difficulty, Category, Price, User } from "../models/index.js";

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

console.log("Clé API chargée :", API_KEY);

function slugify(text) {
  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export const moviesController = {
  async GetAllMovies(req, res) {
    const movies = await Movie.findAll({
      attributes: ['id', 'title', 'slug', 'year', 'director', 'genre'],
      include: {
        model: Recipe,
        attributes: ['id', 'name', 'slug']
      }
    });
  
    const css = 'movies';
    const js = "index";
    const title = "Page des films";
  
    res.render("movies", { movies, title, css, js });
  },  

  async GetOneMovie(req, res) {
    try {
      const slug = req.params.slug;

        if (!slug) {
          return res.status(400).send("Slug manquant dans l'URL");
        }

      console.log("Slug récupéré:", slug);  // Ajoute cette ligne pour le débogage
      const movie = await Movie.findOne({
        where: { slug },
        include: [
          {
            model: Genre,
            as: 'Genres',
            through: { attributes: [] }
          }
        ]
      });
      

      if (!movie) {
        return res.status(404).render('404', { message: 'Film introuvable' });
      }

      const recipes = await Recipe.findAll({
        where: { movie_id: movie.id },
        include: [
          { model: Difficulty, as: 'difficulty' },
          { model: Category, as: 'category' },
          { model: Price, as: 'price' },
          { model: User, as: 'user' }
        ]
      });

      res.render('movie', { movie, recipes });

    } catch (error) {
      console.error('Erreur dans showMovie :', error);
      res.status(500).send("Erreur interne du serveur");
    }
  },
};
