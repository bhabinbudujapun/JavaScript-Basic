function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const submit = document.querySelector("#submitButton");
const inputNumber = document.querySelector("#inputNumber");
const guessNumbers = document.querySelector(".guessNumber");
const guideMessage = document.querySelector(".guideMessage");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let randomNumber = getRndInteger(1, 100); // returns a number between 0 and 99
let remainAttempt = document.querySelector(".remainAttempt");
let prevGuess = [];
let guessAttempt = 1;
let playGame = true;

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
    displayMessage("Please Enter less then 100 Number");
  } else if (guess < 1) {
    displayMessage("Please Enter more then 0 Number");
  } else {
    prevGuess.push(guess);
    if (guessAttempt > 9) {
      updateValue(guess);
      displayMessage(`Try Again !!, Your Random Number: ${randomNumber}`);
      endGame();
    } else {
      updateValue(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("Congratulation !!, You Guessed Right");
    endGame();
  } else if (guess > randomNumber) {
    displayMessage("Try, Lower Numbers !!");
  } else if (guess < randomNumber) {
    displayMessage("Try, Higher Numbers !!");
  }
}

function updateValue(guess) {
  inputNumber.value = "";
  guessNumbers.innerHTML += `${guess}  `;
  guessAttempt++;
  remainAttempt.innerHTML = `${11 - guessAttempt}`;
}

function displayMessage(message) {
  guideMessage.innerHTML = `${message}`;
}

function endGame() {
  inputNumber.value = "";
  inputNumber.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = "<h2 id='newGame'>Play Again</h2>";
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = getRndInteger(1, 100);
    prevGuess = [];
    guessNumbers.innerHTML = "";
    guessAttempt = 1;
    remainAttempt.innerHTML = " ";
    guideMessage.innerHTML = "";
    inputNumber.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
