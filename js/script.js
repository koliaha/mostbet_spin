var resultWrapper = document.querySelector(".spin-result-wrapper");
var inputform = document.querySelector(".input-form");
var wheel = document.querySelector(".wheel-img");
var remaintext = document.querySelector(".remain-text");

let i_try = 2;
let random = Math.floor(Math.random() * 2);

let count = document.querySelector(".remain");
count.innerHTML = i_try;

function spin() {
  remaintext.innerHTML = "Количество <br>попыток";
  document.querySelector("#btn").disabled = true;
  if (i_try == 2) {
    if(random == 0){
      wheel.classList.add("super-rotation");
      console.log('eshe raz')
      setTimeout(function() {
        document.querySelector(".alert-form").style.display = "block";
        remaintext.innerHTML = "Попробуйте <br> ещё раз";
        document.querySelector("#btn").disabled = false;
      }, 8500);
    }
    else{
      wheel.classList.add("super-rotation11");
      console.log('bez vuigrasha')
      setTimeout(function() {
        resultWrapper.style.display = "block";
        $(".sec1").fadeOut();
        $(".bottom").fadeOut();
      }, 8500);
    }
    i_try--;
    count.innerHTML = i_try;
  
  } else {
    wheel.classList.add("super-rotation1");
    i_try--;
    count.innerHTML = i_try;
    setTimeout(function() {
      inputform.style.display = "block";
      $(".sec1").slideUp();
      $(".bottom").slideUp();
    }, 8500);
  }
}

$(".gratz-btn").click(function(e) {
  e.preventDefault();
  document.querySelector("#btn").disabled = false;
  $(".spin-result-wrapper").fadeOut();
  $(".sec1").fadeIn();
  $(".bottom").fadeIn();
  wheel.classList.remove("super-rotation1");
  wheel.classList.remove("super-rotation11");
  wheel.classList.remove("super-rotation");
});
/* $(".input-form").fadeIn(); */
$(".form-btn").click(function(e) {
  e.preventDefault();
  if (i_try == 0) {
    document.querySelector("#btn").disabled = true;
    count.classList.add("red");
  } else {
    document.querySelector("#btn").disabled = false;
  }
  $(".input-form").fadeOut();
  $(".sec1").fadeIn();
  $(".bottom").fadeIn();
  wheel.classList.remove("super-rotation1");
  wheel.classList.remove("super-rotation11");
  wheel.classList.remove("super-rotation");
});


$(".alert-form").click(function(e) {
  document.querySelector(".alert-form").style.display = "none";
});