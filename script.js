const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputDisplay = document.querySelector("#output-box");

// *** start of is a triangle code***
if (isTriangleBtn) {
  isTriangleBtn.addEventListener("click", () =>
    checkInput(angleOne, angleTwo, angleThree)
  );
}

const checkInput = (inputOne, inputTwo, inputThree) => {
  //checking input

  !(inputOne.value && inputTwo.value && inputThree.value)
    ? (outputDisplay.innerText = "input fields cannot be empty")
    : Number(inputOne.value) > 0 &&
      Number(inputTwo.value) > 0 &&
      Number(inputThree.value) > 0
    ? calculateSumOfAngles(inputOne, inputTwo, inputThree)
    : (outputDisplay.innerText = "Input Value cannot be less than 1");
};

const calculateSumOfAngles = (valueOne, valueTwo, valueThree) => {
  let sumofAngles =
    Number(valueOne.value) + Number(valueTwo.value) + Number(valueThree.value);

  sumofAngles === 180
    ? (outputDisplay.innerText = "Is a Triangle")
    : (outputDisplay.innerText = "Not a Triangle");
};

// *** end of is a triangle code *** //

// *** start of quiz app code *** //
const form = document.querySelector("#my-form");
const scoreDisplay = document.querySelector("#score-display");
const submitBtn = document.querySelector("#submit-btn");
const correctAnswers = [
  "90",
  "right angled",
  "Isosceles triangle",
  "One obtuse angles",
  "687.5",
];

if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    const formData = new FormData(form);
    let userAnswers = [];
    for (let value of formData.values()) {
      userAnswers.push(value);
    }

    userAnswers.length < 5
      ? (scoreDisplay.innerText = "Please attend all questions")
      : checkAnswer(correctAnswers, userAnswers);
  });
}

const checkAnswer = (correctAnswers, userAnswers) => {
  let score = 0;
  for (let x = 0; x < userAnswers.length; x++) {
    if (correctAnswers[x] == userAnswers[x]) {
      score++;
    } else {
      score;
    }
  }
  scoreDisplay.innerText = `Your Score is ${score} / ${correctAnswers.length}`;
};

// *** end of quiz app code ***//

// *** start of Hypotenuse code *** //
const a = document.querySelector("#hypotenuse-angle-one");
const b = document.querySelector("#hypotenuse-angle-two");
const displayHypotenuse = document.querySelector("#display-hypotenuse");
const hypotenuseBtn = document.querySelector("#check-hypotenuse");

function checkInputHypotenuse(inputOne, inputTwo, outputDisplay) {
  if (inputOne.value && inputTwo.value) {
    if (Number(inputOne.value) > 0 && Number(inputTwo.value) > 0) {
      //calculate
      checkHypotenuse(inputOne, inputTwo);
    } else {
      outputDisplay.innerText = "Input Value cannot be less than 1";
    }
  } else {
    outputDisplay.innerText = "input fields cannot be empty";
  }
}

if (hypotenuseBtn) {
  hypotenuseBtn.addEventListener("click", () => {
    checkInputHypotenuse(a, b, displayHypotenuse);
  });
}

const checkHypotenuse = (a, b) => {
  let sumOf = Number(a.value) ** 2 + Number(b.value) ** 2;
  let square = Math.sqrt(sumOf);
  displayHypotenuse.innerText = `The length of the hypotenuse is ${square.toFixed(
    2
  )} cm`;
};
// *** end of hypotenuse code *** //

// *** start of area code *** //
const base = document.querySelector("#base");
const height = document.querySelector("#height");
const displayArea = document.querySelector("#display-area");
const checkAreaBtn = document.querySelector("#check-area-btn");

if (checkAreaBtn) {
  checkAreaBtn.addEventListener("click", () => {
    checkInputArea(base, height, displayArea);
  });
}

const checkInputArea = (inputOne, inputTwo, outputDisplay) => {
  if (inputOne.value && inputTwo.value) {
    if (Number(inputOne.value) > 0 && Number(inputTwo.value) > 0) {
      //calculate
      displayArea.innerText = `The area of the triangle is ${checkArea(
        base,
        height
      )} cm²`;
    } else {
      outputDisplay.innerText = "Input Value cannot be less than 1";
    }
  } else {
    outputDisplay.innerText = "input fields cannot be empty";
  }
};

const checkArea = (base, height) => {
  let area = (1 / 2) * (base.value * height.value);
  return area;
};

// *** end of area code ***//
