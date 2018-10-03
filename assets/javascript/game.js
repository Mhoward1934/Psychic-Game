//var x = Math.floor(Math.random() * 4) + 1;

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var yourGuesses = [];
var usedLetters = [];
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//GENERATE COMPUTER CHOICES
function jsGuess() {
    ranLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(ranLetter);
}
jsGuess();

//.onkeyup captures the players input as playerGuess
document.onkeyup = function (event) {
    var yourGuesses = event.key;
}
if (usedLetters.indexOf(yourGuesses) >= 0) {

} else {
    usedLetters.push(yourGuesses);
    document.getElementById('yourGuesses').innerHTML = usedLetters;
    console.log(usedLetters);    
}
//taking in user guess
//var userGuess = String.fromCharCode(event.data).toLowerCase();
//computer selects random letter
//var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
//yourGuesses.push(userGuess); //pushing user guess to guesses so far
//if (userGuess == computerGuess) {
  //  wins++;
    //alert('Way to go! You Won!');
    //guessesLeft = 10; //reseting the guesses back to 10 so that the user can play again
    //yourGuesses.length = 0; //this removes everything from the guesses so far array, so that the guesses from the previous round don't show
//}
if (guessesLeft == 0) {
    losses++;
    alert('You didn\'t guess the correct letter. You lost. Let\'s try again.');
    guessesLeft = 10;
    yourGuesses.length = 0;
}
else if (userGuess !== computerGuess) {
    guessesLeft--; //decrementing the guesses left
}
//function jsGuess() {
    //ranLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    //console.log(ranLetter);
//}