import { Movie } from "../models/index.js";

export const moviesController = {
  async GetAllMovies(req, res) {
    const movies = await Movie.findAll();
    
    const css = 'movies';
    const js = "index";
    const title = " Page des films";

    res.render("movies", {movies, title, css, js});
  },

  GetOneMovie(req, res) {
    // const movieTitle = req.params.title;

    // const movie = movies.find(m => m.title.toLowerCase() === movieTitle.toLowerCase());

    // res.render("movie", { movie, movies });
    res.render("movie");
  },
};
