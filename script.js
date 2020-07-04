url = "https://rickandmortyapi.com/api/character/";

rickIMG = document.querySelector(".rick");
mortyIMG = document.querySelector(".morty");

allcharacters = document.querySelectorAll(".characters");
let ul = document.querySelector("ul");
let li = document.querySelectorAll("li");
let img = document.querySelectorAll("img");

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    for (i = 0; i < res.results.length; i++) {
      img[i].src = res.results[i].image;
      img[i].addEventListener("click", gotClicked)
      function gotClicked(){
          levelWinner.style.opacity = 1
      }
    }
    
  });
