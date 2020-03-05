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
  // crop constructor
  function Crop(cropname,duration,climateCondition,soiltype){
    this.cropname=cropname;
    this.duration=duration;
    this.climateCondition=climateCondition;
    this.soiltype=soiltype;
  }
  var maize= new Crop("Maize","3-4 Months","cool and wet","sandy-loam soil");
    var rice= new Crop("Rice","4-5 Months","cool and wet","loam soil");
    var sugarcane= new Crop("Sugarcane","9-24 Months","cool and dry","loam soil");
    var barley= new Crop("Barley","2-3 Months","cool and dry","light clay soils");
    var tea= new Crop("Tea","36 Months","cool and wet","Red volcanic soil");
    var mangoes= new Crop("Mangoes","3-5 Months","hot and dry","sandy soil");
    var sweetPotatoes= new Crop("Sweet potatoes","3-5 Months","hot and wet","sandy soil");
    var cropObjects=[maize,rice,sugarcane,barley,tea, mangoes, sweetPotatoes];
  $(document).ready(function(){
    //Nyanza
    $("#kisumu").click(function(){
      $("#show-advise").slideDown(1500);
      $(".cropname").text(cropObjects[0].cropname);
      $(".duration").text(cropObjects[0].duration);
      $(".climateCondition").text(cropObjects[0].climateCondition);
      $(".soiltype").text(cropObjects[0].soiltype);
    });
    $("#migori").click(function(){
      $("#show-advise").slideDown(1500);
      $(".cropname").text(cropObjects[1].cropname);
      $(".duration").text(cropObjects[1].duration);
      $(".climateCondition").text(cropObjects[1].climateCondition);
      $(".soiltype").text(cropObjects[1].soiltype);
    });
    // Western
    $("#busia").click(function(){
      $("#show-advise").slideDown(1500);
      $(".cropname").text(cropObjects[2].cropname);
      $(".duration").text(cropObjects[2].duration);
      $(".climateCondition").text(cropObjects[2].climateCondition);
      $(".soiltype").text(cropObjects[2].soiltype);
    });
    $("#kakamega").click(function(){
      $("#show-advise").slideDown(1500);
      $(".cropname").text(cropObjects[3].cropname);
      $(".duration").text(cropObjects[3].duration);
      $(".climateCondition").text(cropObjects[3].climateCondition);
      $(".soiltype").text(cropObjects[3].soiltype);
    })
    // Rift Valley
    $("#kericho").click(function(){
      $("#show-advise").slideDown(1500);
      $(".cropname").text(cropObjects[4].cropname);
      $(".duration").text(cropObjects[4].duration);
      $(".climateCondition").text(cropObjects[4].climateCondition);
      $(".soiltype").text(cropObjects[4].soiltype);
    });
    $("#kitale").click(function(){
      $("#show-advise").slideDown(1500);
      $(".cropname").text(cropObjects[0].cropname);
      $(".duration").text(cropObjects[0].duration);
      $(".climateCondition").text(cropObjects[0].climateCondition);
      $(".soiltype").text(cropObjects[0].soiltype);
    })
    // Eastern
    $("#machakos").click(function(){
      $("#show-advise").slideDown(1500);
      $(".cropname").text(cropObjects[5].cropname);
      $(".duration").text(cropObjects[5].duration);
      $(".climateCondition").text(cropObjects[5].climateCondition);
      $(".soiltype").text(cropObjects[5].soiltype);
    });
    $("#kitui").click(function(){
      $("#show-advise").slideDown(1500);
      $(".cropname").text(cropObjects[6].cropname);
      $(".duration").text(cropObjects[6].duration);
      $(".climateCondition").text(cropObjects[6].climateCondition);
      $(".soiltype").text(cropObjects[6].soiltype);
    });
  
    $('.dropdown-submenu a.test').on("click", function(e){
      $(this).next('ul').toggle();
      e.stopPropagation();
      e.preventDefault();
    });
    $(".btn-group, .dropdown").hover(
      function () {
          $('>.dropdown-menu', this).stop(true, true).fadeIn("fast");
          $(this).addClass('open');
      },
      function () {
          $('>.dropdown-menu', this).stop(true, true).fadeOut("fast");
          $(this).removeClass('open');
      });
  });
  
  // subscribe button
  function subscribe(){
    var email=document.getElementById("email").value
     if (email==""){
       alert("Enter your email first to subscribe")
     }else{
       alert("You have successful subscribed to Ukulima hub weekly newsletter")
     }
  }