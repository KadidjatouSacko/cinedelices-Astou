// Gestion déploiement menu au click sur le hamburger :
const hamburger = document.querySelector(".body__header--connect-burger");
const nav = document.querySelector(".body__header--ctnTitle-nav");
const closeElt = document.getElementById("close");

document.addEventListener("DOMContentLoaded", () => {
    nav.style.display = "none"; 
});

hamburger.addEventListener('click', () => {
    if(nav.style.display == "inline") {
        hamburger.style.display = "inline";
        nav.style.display = "none";
    } else if(nav.style.display == "none") {
        hamburger.style.display = "none";
        nav.style.display = "inline";
    }
  });

  closeElt.addEventListener("click", () => {
    hamburger.style.display = "inline";
    nav.style.display = "none";
  });

  // Gestion carousel en attendant le déploiement de la bdd (models, data-client)
export const recipes = [
    {
        title : "Vodka Martini",
        img : "martini",
        themes : ["Comédie"],
        category : "Cocktail",
        duration : "5",
        difficulty : "Facile",
        price_level : 1
    },
    {
        title : "Lasagnes Bolognaises",
        img : "garfield",
        theme : ["Animé"],
        category : "Plat",
        duration : "45",
        difficulty : "Moyen",
        price_level : 0
    },
    {
        title : "Donuts",
        img : "simpsons",
        theme : ["Animé"],
        category : "Dessert",
        duration : "75",
        difficulty : "Facile",
        price_level : 0
    }
]



<<<<<<< HEAD
=======
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ebca9cb1b38d3ceff2bcf1a944092f57'
    }
  };
  
fetch('https://api.themoviedb.org/3/authentication', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));
>>>>>>> formulaire
