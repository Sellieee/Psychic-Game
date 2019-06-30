// Array to list out all 16 options
var computerChoice = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

// Counting wins/losses/guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;

document.onkeypress = function(event) {
  var userGuess = event.key;
};

var computerGuess =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];

if (userGuess === computerGuess) {
  wins++;
} else {
  losses++;
  guessesLeft--;
}

// Text variables
var winText = document.getElementById("win-text");
var guessesRem = document.getElementById("guesses-left");
var viewGuesses = document.getElementById("view-guesses");

// Text
winText.textContent = "Wins: " + wins;
guessesLeft.textContent = "Guesses Left: " + guessesRem;
viewGuesses.textContent = "Your Guesses so far: " + userGuess;
