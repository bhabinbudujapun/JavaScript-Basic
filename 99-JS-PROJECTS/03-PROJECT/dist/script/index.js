// Function to get a random integer between min and max, inclusive
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const inputNumber = document.querySelector("#inputNumber");
const guessNumbers = document.querySelector(".guessNumber");
const guideMessage = document.querySelector(".guideMessage");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let randomNumber = getRndInteger(1, 99);
let remainAttempt = document.querySelector(".remainAttempt");
let submit = document.querySelector("#submitButton");
let prevGuess = [];
let guessAttempt = 1;
let playGame = true;

remainAttempt.innerHTML = "10";

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(inputNumber.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage("Please Enter Valid Input");
  } else if (guess > 99) {
    displayMessage("Please Enter a number less than or equal to 99");
  } else if (guess < 1) {
    displayMessage("Please Enter a number greater than or equal to 1");
  } else {
    prevGuess.push(guess);
    if (guessAttempt > 9) {
      updateValue(guess);
      displayMessage(`Try Again! Your Random Number: ${randomNumber}`);
      endGame();
    } else {
      updateValue(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`Congratulations! You guessed right ${randomNumber}`);
    endGame();
  } else if (guess > randomNumber) {
    displayMessage("Try a lower number");
  } else if (guess < randomNumber) {
    displayMessage("Try a higher number");
  }
}

function updateValue(guess) {
  inputNumber.value = "";
  guessNumbers.innerHTML += `${guess}, `;
  guessAttempt++;
  remainAttempt.innerHTML = `${11 - guessAttempt}`;
}

function displayMessage(message) {
  guideMessage.innerHTML = `${message}`;
}

function endGame() {
  inputNumber.value = "";
  inputNumber.setAttribute("disabled", "");
  submit.innerHTML = "PLAY AGAIN";
  playGame = false;
  newGame();
}

function newGame() {
  submit.addEventListener(
    "click",
    function (e) {
      if (!playGame) {
        e.preventDefault();
        randomNumber = getRndInteger(1, 100);
        prevGuess = [];
        submit.innerHTML = "SUBMIT GUESS";
        guessNumbers.innerHTML = "";
        guessAttempt = 1;
        remainAttempt.innerHTML = 10;
        guideMessage.innerHTML = "";
        inputNumber.removeAttribute("disabled");
        playGame = true;
      }
    },
    { once: true }
  ); // Ensure this listener only runs once
}
