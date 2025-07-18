
console.log("JS chargé !");

document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.getElementById("carousel-track");
    const arrowLeft = document.querySelector(".body__main--ctn-article-carousel-arrowLeft");
    const arrowRight = document.querySelector(".body__main--ctn-article-carousel-arrowRight");
  
    const scrollAmount = 300; // pixels à scroller par clic
  
    arrowLeft.addEventListener("click", () => {
      carouselTrack.scrollBy({
        left: -scrollAmount,
        behavior: "smooth"
      });
    });
  
    arrowRight.addEventListener("click", () => {
      carouselTrack.scrollBy({
        left: scrollAmount,
        behavior: "smooth"
      });
    });
  });


  