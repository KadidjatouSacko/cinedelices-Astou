export const movieController = {   
    async renderMoviesFromApi(req, res) {        
        try {
            const movies = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}]&include_adult=false&language=fr&page=1`, {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzliYmU1Y2NmZTNkZDkzYTA5NzE3YjYwM2Y0MjUxMSIsIm5iZiI6MTYzNDQwOTM3Ny43NjcsInN1YiI6IjYxNmIxYmExOTcxNWFlMDA0NDdhNzg1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NsQ44WmFHl7YAEPm0QnidrdGrwG-K7x7r_2ZOI25TM'
                }
            })
            .then(res => res.json())
            .then(json => console.log(json))
            console.log(movies);
            const length = movies.length
            const css = 'formMovie'
            const js = "form"
            const title = "Ajouter une recette - choisir un film"
            res.render("form-movie", {css, title, js, length, movies, message})
        } catch (err) {
            console.log(err);
            res.status(500).redirect("/erreur")
        }
 
    }


            
            
};

