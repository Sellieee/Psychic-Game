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

// Randomising computer guesses
var computerGuess =
  computerChoice[Math.floor(Math.random() * computerChoice.length)];

// Text variables
var winText = document.getElementById("win-text");
var lossesText = document.getElementById("losses-text");
var guessesRem = document.getElementById("guesses-left");
var viewGuesses = document.getElementById("view-guesses");

// Text display
viewGuesses.textContent = "Your Guesses so far: " + lettersGuessed;
winText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
guessesRem.textContent = "Guesses Left: " + guessesLeft;

// Logging user input
document.onkeypress = function(event) {
  var userGuess = event.key.toLowerCase();
  // Pushing guessed letters to View Guesses
  lettersGuessed.push(userGuess);
  viewGuesses.textContent = "Your Guesses so far: " + lettersGuessed;
  winText.textContent = "Wins: " + wins;
  lossesText.textContent = "Losses: " + losses;
  guessesRem.textContent = "Guesses Left: " + guessesLeft;

  console.log(lettersGuessed, userGuess);
  // When the user has guessed:
  {
    if (userGuess === computerGuess) {
      wins++;
      alert("Congratulations! You are a true psychic!");
    } else {
      guessesLeft--;
      alert("Hmm... Not quite what I had in mind...");
    }
    if (guessesLeft === 0) {
      losses++;
      guessesLeft = 9;
      alert("Better luck next time!");
    }
  }
};

// Creating reset button in case user wants to restart the game
var button = document.createElement("button");
// Button's Text
button.innerHTML = "Reset";
var body = document.getElementById("button")[0];
document.body.appendChild(button);
button.addEventListener("click", function() {
  alert("Memory wiped, start again!");
  wins = 0;
  losses = 0;
});
