const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputBox = document.querySelector("#output-box");

// *** start of is a triangle code***
if (isTriangleBtn) {
  isTriangleBtn.addEventListener("click", checkInput);
}

function checkInput() {
  if (
    isNaN(
      parseInt(angleOne.value) &&
        parseInt(angleTwo.value) &&
        parseInt(angleThree.value)
    )
  ) {
    outputBox.innerText = "fields cannot be empty";
  } else {
    if (
      (Number(angleOne.value) &&
        Number(angleTwo.value) &&
        Number(angleThree.value)) === 0
    ) {
      outputBox.innerText = "value cannot be Zero";
    } else {
      calculateSumOfAngles(angleOne, angleTwo, angleThree);
    }
  }
}

function calculateSumOfAngles(valueOne, valueTwo, valueThree) {
  let sumofAngles =
    Number(valueOne.value) + Number(valueTwo.value) + Number(valueThree.value);
  if (sumofAngles === 180) {
    outputBox.innerText = "Is a Triangle";
  } else {
    outputBox.innerText = "Not a Triangle";
  }
}

// *** end of is a triangle code *** //

// *** start of quiz app code *** //
const form = document.querySelector("#my-form");
const scoreDisplay = document.querySelector("#score-display");
const submitBtn = document.querySelector("#submit-btn");
const correctAnswers = ["90", "right angled"];

submitBtn.addEventListener("click", function () {
  const formData = new FormData(form);
  let userAnswers = [];
  for (let value of formData.values()) {
    userAnswers.push(value);
  }
  checkAnswer(correctAnswers, userAnswers);
});

function checkAnswer(correctAnswers, userAnswers) {
  let score = 0;
  for (let x = 0; x < userAnswers.length; x++) {
    if (correctAnswers[x] == userAnswers[x]) {
      score++;
    } else {
      score;
    }
  }
  scoreDisplay.innerText = `Your Score is ${score}`;
}
