
var randomNumber1= Math.floor(Math.random() * 6) + 1 ;
var randomImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomImage1;

var image1 = document.querySelectorAll("img") [0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 ="images/" + randomImage2;
var image2 = document.querySelectorAll("img") [1];
image2.setAttribute("src", randomImageSource2);

if ( randomNumber1 > randomNumber2){
  document.querySelector("h2").innerHTML ="Player 1 Wins 🚩";
} else if (randomImage2 > randomImage1){
  document.querySelector("h2").innerHTML ="Player 2 Wins 🚩";
} else {
  document.querySelector("h2").innerHTML ="It is a Draw!";
};
