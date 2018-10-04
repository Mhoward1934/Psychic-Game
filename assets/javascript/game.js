//Setting variables and zeroing counters

var won = 0;
var lost = 0;
var guessesLeft = 9;
var soFar = [];
var usedLetters = [];
var ranLetter = ranLetter;
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//GENERATE COMPUTER RANDOM CHOICES
function jsGuess() {
    ranLetter = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(ranLetter);
}
jsGuess();

//Capturing player input
//.onkeyup captures the players input as playerGuess
document.onkeyup = function (event) {
    var soFar = event.key;
    console.log(soFar);
    //stats();
}
//Handeling guesses - output
//This "if" prevents a letter selected a 2nd time from being written over
if (usedLetters.indexOf(soFar) >= 0) {

} else {
    //this pushes the players incorrect guess to the usedLetters array
    usedLetters.push(soFar);
    document.getElementById("soFar").innerHTML = usedLetters;
    //console.log(usedLetters);
}
//Handeling guesses
//Test if players guess does not equal ranLetter and decriments guessLeft
if (soFar !== ranLetter) {
    guessesLeft--;
} else {
    won++;
    guessesLeft = 9;
    usedLetters = [];
    jsGuess();
    alert("You did it!");
}
//When guessLeft equals zero, lost is incrimented by 1; guessLeft is reset to 9
if (guessesLeft === 0) {
    lost++;
    usedLetters = [];
    guessesLeft = 9;
    jsGuess();
    alert("Try again!");
}

//OUTPUT TO HTML
//these statements write the value/scores generated to the HTML
document.getElementById("wins").innerHTML = won;
document.getElementById("losses").innerHTML = lost;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("soFar").innerHTML = soFar;



/*function stats()
{
    console.log("Wins: " + wins);
    console.log("Loses: " + losses);
    console.log("Num Guesses Left: " + guessesLeft);
    console.log("Prev Guses: " + sofar);
}*/