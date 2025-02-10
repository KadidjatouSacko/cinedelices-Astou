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