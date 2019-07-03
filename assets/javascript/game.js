// Array to list out all 26 options
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
var lettersGuessed = [];

// Need to define userGuess?
document.onkeypress = function(event) {
  var userGuess = event.key;
  // Pushing guessed letters to View Guesses
  lettersGuessed.push(userGuess);
  // When the user has guessed:
  {
    if (userGuess === computerGuess) {
      wins++;
    } else {
      guessesLeft--;
    }
    if (guessesLeft === 0) {
      losses++;
    }
  }
};

// Randomising computer guesses
var computerGuess =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];

// Text variables
var winText = document.getElementById("win-text");
var lossesText = document.getElementById("losses-text");
var guessesRem = document.getElementById("guesses-left");
var viewGuesses = document.getElementById("view-guesses");

// Text display
winText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesLeft.textContent = "Guesses Left: " + guessesRem;
viewGuesses.textContent = "Your Guesses so far: " + lettersGuessed;
