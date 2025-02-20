// Gestion déploiement menu au click sur le hamburger :
const hamburger = document.querySelector(".body__header--connect-burger");
const nav = document.querySelector(".body__header--ctnTitle-nav");
const closeElt = document.getElementById("close");
const cards = document.querySelectorAll('.body__main--ctn-article-wrapper-card');
const posterElt = document.querySelector(".tags__ctn--img");


document.addEventListener("DOMContentLoaded", () => {
    nav.style.display = "none";
    if(innerWidth > 319) {
        cards[0].style.display = "inline";
        posterElt.setAttribute("src", `./assets/img/movies/${movies[0].movieImg}`);
        posterElt.setAttribute("alt", `Affiche du film de ${movies[0].name}`)
        nav.style.display = "none";
    }
    //  else if(innerWidth > 767) {
    //     cards[0].style.display = "inline";
    //     cards[1].style.display = "inline";
    //     posterElt.setAttribute("src", `./assets/img/movies/${movies[0].movieImg}`);
    //     posterElt.setAttribute("alt", `Affiche du film de ${movies[0].name}`)
    //     posterElt.setAttribute("src", `./assets/img/movies/${movies[1].movieImg}`);
    //     posterElt.setAttribute("alt", `Affiche du film de ${movies[1].name}`)
    //     nav.style.display = "inli*ne";
    // } else if(innerWidth > 1439) {
    //     cards[0].style.display = "inline";
    //     cards[1].style.display = "inline";
    //     cards[2].style.display = "inline";
    //     posterElt.setAttribute("src", `./assets/img/movies/${movies[0].movieImg}`);
    //     posterElt.setAttribute("alt", `Affiche du film de ${movies[0].name}`)
    //     posterElt.setAttribute("src", `./assets/img/movies/${movies[1].movieImg}`);
    //     posterElt.setAttribute("alt", `Affiche du film de ${movies[1].name}`)
    //     posterElt.setAttribute("src", `./assets/img/movies/${movies[2].movieImg}`);
    //     posterElt.setAttribute("alt", `Affiche du film de ${movies[2].name}`)
    // }
});

hamburger.addEventListener('click', () => {
    hamburger.style.display = "none";
    nav.style.display = "inline";
    splitToLeft()
});

function splitToLeft() {
    const bodyElt = document.querySelector(".body__main--ctn")
    bodyElt.style.width = "70vw";
}

function splitToRight() {
    const bodyElt = document.querySelector(".body__main--ctn")
    bodyElt.style.width = "100vw";
}


closeElt.addEventListener("click", () => {
    hamburger.style.display = "inline";
    nav.style.display = "none";
    splitToRight()
  });

const movies = [
    {name: "Garfield", movieImg: "garfieldx45.png"},
    {name: "Charlie et la chocolaterie", movieImg: "charlieEtLaChocolaterie.png"},
    {name: "Le petit chaperon rouge", movieImg: "lepetitChaperonRouge.jpg"},
    {name: "Naruto", movieImg: "naruto.jpg"},
    {name: "La belle et le clochard", movieImg: "laBelleEtLeClochard.jpg"},
    {name: "Ratatouille", movieImg: "ratatouille.png"},
    {name: "Les Simpson", movieImg: "simpsonsx50.png"},
]



function displayPoster(i) {
    const posterElts = document.querySelectorAll('.tags__ctn--img')
    posterElts.forEach((posterElt) => {
        if(innerWidth < 768) {
            posterElt.setAttribute("src", `assets/img/movies/${movies[i].movieImg}`);
            posterElt.setAttribute("alt", `Affiche du film ${movies[i].name}`)
        } 
        // else if(innerWidth < 1440) {
        //     posterElt.setAttribute("src", `assets/img/movies/${movies[i].movieImg}`);
        //     posterElt.setAttribute("alt", `Affiche du film ${movies[i].name}`)
        //     posterElt.setAttribute("src", `assets/img/movies/${movies[i+1].movieImg}`);
        //     posterElt.setAttribute("alt", `Affiche du film ${movies[i+1].name}`)
        // } else if(innerWidth > 1440) {
        //     posterElt.setAttribute("src", `assets/img/movies/${movies[i].movieImg}`);
        //     posterElt.setAttribute("alt", `Affiche du film ${movies[i].name}`)
        //     posterElt.setAttribute("src", `assets/img/movies/${movies[i+1].movieImg}`);
        //     posterElt.setAttribute("alt", `Affiche du film ${movies[i+1].name}`)
        //     posterElt.setAttribute("src", `assets/img/movies/${movies[i+2].movieImg}`);
        //     posterElt.setAttribute("alt", `Affiche du film ${movies[i+2].name}`)
        // }
        
    })
    
}   
  
//settings carousel
const arrowLeft = document.querySelector(".body__main--ctn-article-carousel-arrowLeft");
const arrowRight = document.querySelector(".body__main--ctn-article-carousel-arrowRight")
cards.forEach(card => card.style.display = "none")

console.log(arrowLeft);

let currentIndex = 0;
let cardsLength = cards.length;
console.log(cardsLength);

function getPrevCard(i) {
    cards.forEach(card => card.style.display = "none")
    i = currentIndex;
    if(innerWidth < 768) {
        if(currentIndex === 0) {
            i = cardsLength-1;
            cards[i].style.display = "inline";
            displayPoster(i)
            //return i
        } else {
            i-= 1
            cards[i].style.display = "inline";
            displayPoster(i)
            //return i
        }
    } else if(innerWidth < 1440) {
        if(currentIndex === 0) {
            i = cardsLength-1;
            cards[i].style.display = "inline";
            cards[i-1].style.display = "inline";
            displayPoster(i)
            //return i
        } else {
            i-= 1
            cards[i].style.display = "inline";
            cards[i-1].style.display = "inline";
            cards[i-2].style.display = "inline";
            displayPoster(i)
            //return i
        }
    }
    
    currentIndex = i
    console.log(currentIndex);
    return currentIndex  
}



function getNextCard(i) {
    cards.forEach(card => card.style.display = "none")
    i = currentIndex;
    if(i === cardsLength-1) {
        i = 0;
        cards[i].style.display = "inline";
        displayPoster(i)
    } else {
        i+= 1
        cards[i].style.display = "inline";
        displayPoster(i)
    }
    currentIndex = i
    console.log(currentIndex);
    return currentIndex    
}


arrowRight.addEventListener("click", () => getNextCard(currentIndex))

arrowLeft.addEventListener("click", () => getPrevCard(currentIndex))