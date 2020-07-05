url = "https://rickandmortyapi.com/api/character/";

popUp = document.querySelector(".pop-up")

allcharacters = document.querySelectorAll(".characters");

img = document.querySelectorAll("img");

closeButton = document.querySelector(".close") 

fetch(url)
  .then((res) => res.json())
  .then((res) => {
    for (i = 0; i < img.length; i++) {
      img[i].src = res.results[i].image;
      
      let name = res.results[i].name
      
      let status = res.results[i].status
      
      let species = res.results[i].species
      
      let type = res.results[i].type
      
      let gender = res.results[i].gender
      
      let location = res.results[i].location.name

     // popUp.innerText = JSON.stringify(res.results[i])
      //console.log(res.results[i].location.name)
      //console.log(res.results[i])
      
       img[i].addEventListener("click", openPopUp)
      
       closeButton.addEventListener("click", closePopUp)
      
      function openPopUp(e){
        e.preventDefault()
        popUp.innerText = `Name : ${name} | Status : ${status} | Species : ${species} | Type : ${type} | Gender : ${gender} | Location : ${location} | Image :
        ${img[i]}`
        
        popUp.style.opacity = .75
        closeButton.style.opacity = 1
    }

    function closePopUp(){
      popUp.style.opacity = 0
      closeButton.style.opacity = 0
    }
}

  

    
  });
