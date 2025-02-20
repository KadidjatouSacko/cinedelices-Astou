//https://developer.themoviedb.org/reference/genre-movie-list => pour importer les genres des films dans la table category de films


import MovieCategory from "../models/MovieCategory.js";

export const movieController = {  

    async renderMoviesFromApi(req, res) { 
        const css = 'formMovie'
        const js = "form"
        const title = "Ajouter une recette - choisir un film"
        const message = "Aucun film trouvé"
        const moviesTreated = [];      
        try {
            const titleFilm = req.params.title 
            const movies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${titleFilm}&include_adult=false&language=fr&page=1`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzliYmU1Y2NmZTNkZDkzYTA5NzE3YjYwM2Y0MjUxMSIsIm5iZiI6MTYzNDQwOTM3Ny43NjcsInN1YiI6IjYxNmIxYmExOTcxNWFlMDA0NDdhNzg1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NsQ44WmFHl7YAEPm0QnidrdGrwG-K7x7r_2ZOI25TM'
                }
            })
            .then(res => res.json())
            .then(json => console.log(json))
            //console.log(movies);
            if(!movies) {
               
                res.redirect("/rechercher/erreur")
            }
            movies.results.forEach(movie => {                
                const movieTreated = {id: movie.id, title: movie.title, image: `https://image.tmdb.org/t/p/${movie.poster_path}`, year: movie.release_date }
                moviesTreated.push(movieTreated);
            });
            //console.log(moviesTreated);
            
            
            res.render("form-movie", {css, title, js, moviesTreated, message})
        } catch (err) {
            console.log(err);
            res.status(500).redirect("/erreur")
        }

    },

    async searchMovieByTitle(req, res) {
        try {
            const titleFilm = req.query.title; // Récupère le titre depuis la requête GET
            console.log(titleFilm);
            
            // Configuration de l'API TMDB
            const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzliYmU1Y2NmZTNkZDkzYTA5NzE3YjYwM2Y0MjUxMSIsIm5iZiI6MTYzNDQwOTM3Ny43NjcsInN1YiI6IjYxNmIxYmExOTcxNWFlMDA0NDdhNzg1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NsQ44WmFHl7YAEPm0QnidrdGrwG-K7x7r_2ZOI25TM';
            const TMDB_API_URL = `https://api.themoviedb.org/3/search/movie?query=${titleFilm}?&language=fr`;
            
            // Appel à l'API TMDB avec node-fetch
            const movies = await fetch(`${TMDB_API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(titleFilm)}`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzliYmU1Y2NmZTNkZDkzYTA5NzE3YjYwM2Y0MjUxMSIsIm5iZiI6MTYzNDQwOTM3Ny43NjcsInN1YiI6IjYxNmIxYmExOTcxNWFlMDA0NDdhNzg1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NsQ44WmFHl7YAEPm0QnidrdGrwG-K7x7r_2ZOI25TM'
                }
            })            
            .then(res => res.json())
           //console.log(movies);
            
            const moviesTreated = []; 
            // Formatage des résultats
            movies.results.forEach(movie => {                           
                  const movieTreated = {id: movie.id, title: movie.title, image: `https://image.tmdb.org/t/p/w300${movie.poster_path}`, year: movie.release_date }
                  moviesTreated.push(movieTreated);
            });
            //console.log(moviesTreated);
            const css = "formMovie"
            const js = "form"
            const message = "Pas de film trouvé"
            const title = "Recherche par titre de film"
            res.render('form-movie', { css, js, title, moviesTreated, message});
        } catch (error) {
            console.error('Erreur lors de la recherche de films:', error);
            res.render('form-movie', {
                css: "formRecipe",
                js: "form",
                title: 'Recherche par titre de films',
                movies: { results: [] },
                message: 'Une erreur est survenue lors de la recherche'
            });
        }
    },

    async searchMovieByCategory(req, res) {
        try {
            const categorySearched = req.query.name; // Récupère le titre depuis la requête GET
            console.log(req.query);
            
            // Configuration de l'API TMDB
            const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzliYmU1Y2NmZTNkZDkzYTA5NzE3YjYwM2Y0MjUxMSIsIm5iZiI6MTYzNDQwOTM3Ny43NjcsInN1YiI6IjYxNmIxYmExOTcxNWFlMDA0NDdhNzg1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NsQ44WmFHl7YAEPm0QnidrdGrwG-K7x7r_2ZOI25TM';
            const TMDB_API_URL = `https://api.themoviedb.org/3/search/movie?query=${categorySearched}&include_adult=false&language=fr&page=1`;
            
            // Appel à l'API TMDB avec node-fetch
            const movies = await fetch(`${TMDB_API_URL}/search/category?api_key=${API_KEY}&query=${encodeURIComponent(categorySearched)}`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzliYmU1Y2NmZTNkZDkzYTA5NzE3YjYwM2Y0MjUxMSIsIm5iZiI6MTYzNDQwOTM3Ny43NjcsInN1YiI6IjYxNmIxYmExOTcxNWFlMDA0NDdhNzg1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NsQ44WmFHl7YAEPm0QnidrdGrwG-K7x7r_2ZOI25TM'
                }
            })            
            .then(res => res.json())
            //console.log(movies);
            
            const moviesTreated = []; 
            // Formatage des résultats
            movies.results.forEach(movie => {                           
                  const movieTreated = {id: movie.id, title: movie.title, image: `https://image.tmdb.org/t/p/w300${movie.poster_path}`, year: movie.release_date }
                  moviesTreated.push(movieTreated);
            });
            console.log(moviesTreated);
            const categories = await MovieCategory.findAll()
            console.log("categories", categories);
            
            const css = "formMovie"
            const js = "form"
            const message = "Pas de film trouvé"
            const title = "Recherche par titre de film"
            res.render('form-movie', { css, js, title, categories, moviesTreated, message});
        } catch (error) {
            const css = "formMovie"
            const js = "form"
            const message = "Pas de film trouvé"
            const title = "Recherche par titre de film"
            console.error('Erreur lors de la recherche de films:', error);
            res.render('form-movie', { css, js, title,
                
                message: 'Une erreur est survenue lors de la recherche'
            });
        }
    }

};

export default movieController;

