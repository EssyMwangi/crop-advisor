const navSlide =() => {
  const burger =document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks =document.querySelectorAll('nav-link li');
  burger.addEventListener('click',()=>{
    nav.classList.toggle('nav-active');
    navLinks.forEach((link,index) => {
      if(link.style.animation){
          link.style.animation=''
        } else{link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
        }
    });
    //Burger animation//
    burger.classList.toggle('toggle');
  });
}

navSlide();


function openModal(){
  document.getElementById('my-modal').style.display ="inline-flex";
}

function closeModal(){
  document.getElementById('my-modal').style.display ="none";

}
var slideIndexJS = 1;

showSlides(slideIndexJS);

function changeSlides(n){
  showSlides(slideIndexJS += n);
  
}

function currentslide(n){
  showSlides(slideIndexJS = n)
}

function showSlides(n){
  var i;
  var slidesJS = document.getElementsByClassName("my-slides");

  if(n > slidesJS.length) {slideIndexJS = 1;}

  if(n < 1) {slideIndexJS = slidesJS.length;}
  for (i=0; i < slidesJS.length; i++){
    slidesJS[i].style.display = "none";
  }
  slidesJS[slideIndexJS-1].style.display = "block";

}

