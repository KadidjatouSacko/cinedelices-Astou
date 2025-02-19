//https://developer.themoviedb.org/reference/genre-movie-list => pour importer les genres des films dans la table category de films

export const movieController = {   
    async renderMoviesFromApi(req, res) { 
        const css = 'formMovie'
        const js = "form"
        const title = "Ajouter une recette - choisir un film"
        const message = "Aucun film trouvé"      
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
            console.log(movies);
            if(!movies) {
               
                res.redirect("/rechercher/erreur")
            }
                   
            
            res.render("form-movie", {css, title, js, movies, message})
        } catch (err) {
            console.log(err);
            res.status(500).redirect("/erreur")
        }

    },

    async searchMovie(req, res) {
        try {
            const title = req.query.title; // Récupère le titre depuis la requête GET
            console.log(title);
            
            // Configuration de l'API TMDB
            const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzliYmU1Y2NmZTNkZDkzYTA5NzE3YjYwM2Y0MjUxMSIsIm5iZiI6MTYzNDQwOTM3Ny43NjcsInN1YiI6IjYxNmIxYmExOTcxNWFlMDA0NDdhNzg1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NsQ44WmFHl7YAEPm0QnidrdGrwG-K7x7r_2ZOI25TM';
            const TMDB_API_URL = `https://api.themoviedb.org/3/search/movie?query=${movie.name}?append_to_response='images?${poster_path}&language=fr`;
            
            // Appel à l'API TMDB avec node-fetch
            const response = await fetch(`${TMDB_API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(title)}`, {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzliYmU1Y2NmZTNkZDkzYTA5NzE3YjYwM2Y0MjUxMSIsIm5iZiI6MTYzNDQwOTM3Ny43NjcsInN1YiI6IjYxNmIxYmExOTcxNWFlMDA0NDdhNzg1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NsQ44WmFHl7YAEPm0QnidrdGrwG-K7x7r_2ZOI25TM'
                }
            });

            const data = await response.json();

            // Formatage des résultats
            const movies = data.results.map(movie => ({
                id: movie.id,
                title: movie.title,
                release_date: movie.release_date,
                posterUrl: movie.poster_path 
                    ? `https://image.tmdb.org/t/p/w200${posterUrl}`
                    : 'https://via.placeholder.com/200x300?text=Image+Non+Dispo'
            }));

            // Rendu de la vue avec les résultats
            res.render('form-movie', {
                css: 'votre_css',
                js: 'votre_js',
                title: 'Recherche de films',
                movies: { results: movies },
                length: movies.length,
                message: movies.length === 0 ? 'Aucun film trouvé' : ''
            });

        } catch (error) {
            console.error('Erreur lors de la recherche de films:', error);
            res.render('form-movie', {
                css: 'votre_css',
                js: 'votre_js',
                title: 'Recherche de films',
                movies: { results: [] },
                length: 0,
                message: 'Une erreur est survenue lors de la recherche'
            });
        }
    }
};

export default movieController;
