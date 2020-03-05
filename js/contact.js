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
$(document).ready(function(){
    $("button#btn").click(function(){
        var email = $("input#email").val();
        var name = $("input#first-name").val();
        var message = $("input#comment").val();
        alert("Thank you " + name + " for reaching out to us. We value your feedback. You will receive a message shortly at " + email + ".");
    });
})