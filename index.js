const numberInput = document.querySelector(".number-input");
const btnCheck = document.querySelector(".btn-check");
const btnAgain = document.querySelector(".btn-again");
const hintText = document.querySelector(".hint-text");
const scoreNumber = document.querySelector(".score");
const highScoreNumber = document.querySelector(".highscore");
const secret = document.querySelector(".secret");

let randomNumber = Math.floor(Math.random() * 20 + 1); // 1 - 20
let numberValue;
let score = 20;

const onInput = (ev) => {
  numberValue = ev.target.value;
};

const onCheck = () => {
  if (numberValue == randomNumber) {
    hintText.innerHTML = "Correct";
    hintText.classList.add("text-green");
    secret.innerHTML = randomNumber;
    btnCheck.setAttribute("disabled", true);
    numberInput.setAttribute("disabled", true);

    if (score > +highScoreNumber.innerHTML) {
      highScoreNumber.innerHTML = score;
    }
  } else if (numberValue > randomNumber) {
    hintText.innerHTML = "Too high";
    score--;
    scoreNumber.innerHTML = score;
  } else if (numberValue < randomNumber) {
    hintText.innerHTML = "Too low";
    score--;
    scoreNumber.innerHTML = score;
  }
};

const onAgain = () => {
  score = 20;
  scoreNumber.innerHTML = 20;
  btnCheck.removeAttribute("disabled");
  numberInput.removeAttribute("disabled");
  hintText.classList.remove("text-green");
  numberInput.value = "";
  hintText.innerHTML = "Start Guessing";
  secret.innerHTML = "?";
  randomNumber = Math.floor(Math.random() * 20 + 1);
};

numberInput.addEventListener("input", onInput);
btnCheck.addEventListener("click", onCheck);
btnAgain.addEventListener("click", onAgain);
