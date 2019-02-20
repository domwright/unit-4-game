// Crystal Game 
$(document).ready(function() {

});
// Pseudo Coding 
// build a game with 4 crystals and Random Result
// Every crystal needs to have a random number between 1 - 12
// When clicking any crystal, it should be adding the values
// until total score is reached 
// If it is NOT equal, we start game over 
// if it IS equal, increment a win counter
// A new random number should generate (to the crystals) 
// after a win or lost 

// Declare variables for game 
var targetNumber = 72;
var losses = 0;
var wins = 0;

$("#mySpan").append(targetNumber);
for(var i = 0; i < 4; i++) {

var random = Math.floor(Math.random() * 12);
console.log(random);

var imageCrystal = $("<img>");
// random number for every crystal
imageCrystal.addClass("imageCrystal");
console.log(imageCrystal);

};