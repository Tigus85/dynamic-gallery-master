let mainImg = document.querySelector(".main > img");
let secondaryImg = document.querySelectorAll(".annex > div >img");


mainImg.addEventListener("click", function(){
  alert("Ceci est la photo"+ mainImg.src);
});

for (let i = 0 ; i< secondaryImg.length ; i++){
  secondaryImg[i].addEventListener("click", function(){
    mainImg.src = secondaryImg[i].src;
  });

}