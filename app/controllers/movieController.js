import dotenv from "dotenv";
dotenv.config();

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

// Fonction pour vérifier la clé API
function validateApiKey() {
    if (!API_KEY) {
        console.error('❌ TMDB_API_KEY manquante dans le fichier .env');
        return false;
    }
    if (API_KEY.length < 20) {
        console.error('❌ TMDB_API_KEY semble invalide (trop courte)');
        return false;
    }
    console.log('✓ TMDB_API_KEY trouvée:', API_KEY.substring(0, 8) + '...');
    return true;
}

export const movieController = {  

    async renderMoviesFromApi(req, res) { 
        try {
            const titleFilm = req.params.title;
            const css = 'formMovie';
            const js = "form";
            const title = "Ajouter une recette - choisir un film";
            const message = "Aucun film trouvé";
            
            const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(titleFilm)}&include_adult=false&language=fr&page=1`, {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            });

            const movies = await response.json();

            if (!movies.results || movies.results.length === 0) {
                return res.redirect("/rechercher/erreur");
            }

            const moviesTreated = movies.results.map(movie => ({
                id: movie.id,
                title: movie.title,
                image: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : null,
                year: movie.release_date ? movie.release_date.split("-")[0] : "N/A",
                overview: movie.overview || 'Description non disponible'
            }));

            res.render("form-movie", { css, title, js, moviesTreated, message });
        } catch (err) {
            console.error(err);
            res.status(500).redirect("/erreur");
        }
    },

    // Nouvelle méthode unifiée pour la recherche
    async searchMoviesUnified(req, res) {
        try {
            // Vérifier la clé API dès le début
            if (!validateApiKey()) {
                return res.render("form-movie", { 
                    css: "formMovie", 
                    js: "form", 
                    title: "Recherche de films", 
                    moviesTreated: [], 
                    message: "Erreur de configuration : clé API manquante ou invalide",
                    title: '',
                    selectedCategory: ''
                });
            }

            const { title: titleSearch, category: categoryId } = req.query;
            const css = "formMovie";
            const js = "form";
            const title = "Recherche de films";
            let message = "Aucun film trouvé";
            let moviesTreated = [];

            // Si aucun critère de recherche n'est fourni, afficher le formulaire vide
            if (!titleSearch && !categoryId) {
                return res.render("form-movie", { 
                    css, 
                    js, 
                    title, 
                    moviesTreated: [], 
                    message: "Veuillez saisir un titre ou sélectionner un genre",
                    title: '',
                    selectedCategory: ''
                });
            }

            // Récupérer les genres disponibles pour le mapping
            let genresMap = {};
            try {
                const genreResponse = await fetch(`${BASE_URL}/genre/movie/list?language=fr`, {
                    headers: {
                        accept: 'application/json',
                        Authorization: `Bearer ${API_KEY}`
                    }
                });
                
                console.log('Genre Response Status:', genreResponse.status);
                console.log('Genre Response Headers:', Object.fromEntries(genreResponse.headers.entries()));
                
                if (!genreResponse.ok) {
                    console.error('Erreur API genres:', genreResponse.status, genreResponse.statusText);
                    if (genreResponse.status === 401) {
                        console.error('🔑 Clé API invalide ou expirée. Vérifiez votre TMDB_API_KEY dans le .env');
                        console.error('Format attendu: Bearer token (commençant par eyJ...)');
                    }
                } else {
                    const genresData = await genreResponse.json();
                    console.log('Genres data:', genresData);
                    
                    if (genresData && genresData.genres && Array.isArray(genresData.genres)) {
                        genresMap = genresData.genres.reduce((acc, genre) => {
                            acc[genre.id] = genre.name;
                            return acc;
                        }, {});
                    }
                }
            } catch (genreError) {
                console.error('Erreur lors de la récupération des genres:', genreError);
            }
            
            // Fallback avec genres prédéfinis si l'API échoue
            if (Object.keys(genresMap).length === 0) {
                genresMap = {
                    28: "Action", 12: "Aventure", 16: "Animation", 35: "Comédie",
                    80: "Crime", 99: "Documentaire", 18: "Drame", 10751: "Familial",
                    14: "Fantaisie", 36: "Histoire", 27: "Horreur", 10402: "Musique",
                    9648: "Mystère", 10749: "Romance", 878: "Science-Fiction",
                    10770: "Téléfilm", 53: "Thriller", 10752: "Guerre", 37: "Western"
                };
            }

            let movies = { results: [] };

            // Cas 1: Recherche par titre uniquement
            if (titleSearch && !categoryId) {
                try {
                    const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(titleSearch)}&language=fr&page=1`, {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${API_KEY}`
                        }
                    });
                    
                    if (response.ok) {
                        movies = await response.json();
                        message = `Résultats pour le titre "${titleSearch}"`;
                    } else {
                        console.error('Erreur API search:', response.statusText);
                        message = "Erreur lors de la recherche par titre";
                    }
                } catch (searchError) {
                    console.error('Erreur recherche par titre:', searchError);
                    message = "Erreur lors de la recherche par titre";
                }
            }
            
            // Cas 2: Recherche par catégorie uniquement
            else if (!titleSearch && categoryId) {
                try {
                    const response = await fetch(`${BASE_URL}/discover/movie?with_genres=${categoryId}&language=fr&page=1`, {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${API_KEY}`
                        }
                    });
                    
                    if (response.ok) {
                        movies = await response.json();
                        message = `Films de la catégorie "${genresMap[categoryId] || 'Genre sélectionné'}"`;
                    } else {
                        console.error('Erreur API discover:', response.statusText);
                        message = "Erreur lors de la recherche par genre";
                    }
                } catch (discoverError) {
                    console.error('Erreur recherche par genre:', discoverError);
                    message = "Erreur lors de la recherche par genre";
                }
            }
            
            // Cas 3: Recherche combinée (titre ET catégorie)
            else if (titleSearch && categoryId) {
                try {
                    const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(titleSearch)}&with_genres=${categoryId}&language=fr&page=1`, {
                        headers: {
                            accept: 'application/json',
                            Authorization: `Bearer ${API_KEY}`
                        }
                    });
                    
                    if (response.ok) {
                        movies = await response.json();
                        
                        // Filtrer les résultats pour ne garder que ceux qui correspondent au genre
                        if (movies.results && Array.isArray(movies.results)) {
                            movies.results = movies.results.filter(movie => 
                                movie.genre_ids && Array.isArray(movie.genre_ids) && 
                                movie.genre_ids.includes(parseInt(categoryId))
                            );
                        }
                        message = `Résultats pour "${titleSearch}" dans la catégorie "${genresMap[categoryId] || 'Genre sélectionné'}"`;
                    } else {
                        console.error('Erreur API search combiné:', response.statusText);
                        message = "Erreur lors de la recherche combinée";
                    }
                } catch (combinedError) {
                    console.error('Erreur recherche combinée:', combinedError);
                    message = "Erreur lors de la recherche combinée";
                }
            }

            // Traitement des résultats
            if (movies && movies.results && Array.isArray(movies.results) && movies.results.length > 0) {
                moviesTreated = movies.results.map(movie => ({
                    id: movie.id,
                    title: movie.title || 'Titre non disponible',
                    image: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : null,
                    year: movie.release_date ? movie.release_date.split("-")[0] : "N/A",
                    overview: movie.overview || 'Description non disponible',
                    genres: movie.genre_ids && Array.isArray(movie.genre_ids) 
                        ? movie.genre_ids.map(id => genresMap[id]).filter(Boolean) 
                        : []
                }));
            }

            res.render("form-movie", { 
                css, 
                js, 
                title, 
                moviesTreated, 
                message,
                title: titleSearch || '',
                selectedCategory: categoryId || ''
            });

        } catch (error) {
            console.error("Erreur lors de la recherche de films:", error);
            res.render("form-movie", { 
                css: "formMovie", 
                js: "form", 
                title: "Recherche de films", 
                moviesTreated: [], 
                message: "Une erreur est survenue lors de la recherche" 
            });
        }
    },

    // Méthodes existantes maintenues pour la compatibilité
    async searchMovieByTitle(req, res) {
        try {
            const titleFilm = req.query.title;
            const css = "formMovie";
            const js = "form";
            const title = "Recherche par titre de film";
            const message = "Pas de film trouvé";

            const response = await fetch(`${BASE_URL}/search/movie?query=${encodeURIComponent(titleFilm)}&language=fr`, {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            });

            const movies = await response.json();

            const moviesTreated = movies.results?.map(movie => ({
                id: movie.id,
                title: movie.title,
                image: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : null,
                year: movie.release_date ? movie.release_date.split("-")[0] : "N/A",
                overview: movie.overview || 'Description non disponible'
            })) || [];

            res.render("form-movie", { css, js, title, moviesTreated, message });
        } catch (error) {
            console.error("Erreur lors de la recherche de films:", error);
            res.render("form-movie", { css: "formRecipe", js: "form", title, moviesTreated: [], message: "Une erreur est survenue lors de la recherche" });
        }
    },

    async searchMovieByCategory(req, res) {
        try {
            const categorySearched = req.query.name;
            const css = "formMovie";
            const js = "form";
            const title = "Recherche par catégorie de film";
            const message = "Pas de film trouvé";

            // Récupérer la liste des genres depuis TMDB
            const genreResponse = await fetch(`${BASE_URL}/genre/movie/list?language=fr`, {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            });
            
            if (!genreResponse.ok) {
                throw new Error(`API Error: ${genreResponse.statusText}`);
            }
            const genresData = await genreResponse.json();
            const genre = genresData.genres.find(g => g.name.toLowerCase() === categorySearched.toLowerCase());

            if (!genre) {
                return res.render("form-movie", { css, js, title, moviesTreated: [], message: "Catégorie introuvable" });
            }

            // Récupérer les films de la catégorie
            const movieResponse = await fetch(`${BASE_URL}/discover/movie?with_genres=${genre.id}&language=fr`, {
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            });

            if (!movieResponse.ok) {
                throw new Error(`API Error: ${movieResponse.statusText}`);
            }
            const movies = await movieResponse.json();

            const moviesTreated = movies.results?.map(movie => ({
                id: movie.id,
                title: movie.title,
                image: movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : null,
                year: movie.release_date ? movie.release_date.split("-")[0] : "N/A",
                overview: movie.overview || 'Description non disponible'
            })) || [];

            res.render("form-movie", { css, js, title, moviesTreated, message });
        } catch (error) {
            console.error("Erreur lors de la recherche de films:", error);
            res.render("form-movie", { css, js, title, moviesTreated: [], message: "Une erreur est survenue lors de la recherche" });
        }
    },

    // Méthode pour afficher le formulaire vide
    async showSearchForm(req, res) {
        const css = "formMovie";
        const js = "form";
        const title = "Recherche de films";
        const moviesTreated = [];
        const message = "Utilisez les filtres ci-dessus pour rechercher des films";

        res.render("form-movie", { css, js, title, moviesTreated, message });
    }
};

export default movieController;