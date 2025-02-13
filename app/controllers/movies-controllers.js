import { movies } from "../../data/movies-data.js";

export const moviesController = {
    GetAllMovies(req, res) {
        res.render("movies", { movies });
    },

    GetOneMovies(req, res) {
        const movieTitle = req.params.title;

        const movie = movies.find(m => m.title.toLowerCase() === movieTitle.toLowerCase());

        res.render("movie", { movie, movies });
    },
};
