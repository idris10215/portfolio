var randomnumber1 = Math.floor((Math.random() * 6 )) + 1; 
 
var randomimage = "dice"+randomnumber1+".png";
var randomimagesource = "../images/"+randomimage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagesource);


var randomnumber2 = Math.floor((Math.random() * 6 )) + 1;
var randomimagesource2 = "../images/dice"+randomnumber2+".png";

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomimagesource2);


if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML ="Player1 wins";
}

else if ( randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "Player2 wins";
}

else {
    document.querySelector("h1").innerHTML = "Draw";
}

