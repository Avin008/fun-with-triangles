const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputDisplay = document.querySelector("#output-box");

// *** start of is a triangle code***
if (isTriangleBtn) {
  isTriangleBtn.addEventListener("click", function () {
    checkInput(angleOne, angleTwo, angleThree);
  });
}

// function checkInput() {
//   if (
//     isNaN(
//       parseInt(angleOne.value) &&
//         parseInt(angleTwo.value) &&
//         parseInt(angleThree.value)
//     )
//   ) {
//     outputDisplay.innerText = "fields cannot be empty";
//   } else {
//     if (
//       (Number(angleOne.value) &&
//         Number(angleTwo.value) &&
//         Number(angleThree.value)) === 0
//     ) {
//       outputDisplay.innerText = "Angles can't be zeroes";
//     } else {
//       calculateSumOfAngles(angleOne, angleTwo, angleThree);
//     }
//   }
// }

function checkInput(inputOne, inputTwo, inputThree) {
  if (inputOne.value && inputTwo.value && inputThree.value) {
    if (
      Number(inputOne.value) > 0 &&
      Number(inputTwo.value) > 0 &&
      Number(inputThree.value) > 0
    ) {
      //calculate
      calculateSumOfAngles(inputOne, inputTwo, inputThree);
    } else {
      outputDisplay.innerText = "Input Value cannot be less than 1";
    }
  } else {
    outputDisplay.innerText = "input fields cannot be empty";
  }
}

function calculateSumOfAngles(valueOne, valueTwo, valueThree) {
  let sumofAngles =
    Number(valueOne.value) + Number(valueTwo.value) + Number(valueThree.value);
  if (sumofAngles === 180) {
    outputDisplay.innerText = "Is a Triangle";
  } else {
    outputDisplay.innerText = "Not a Triangle";
  }
}

// *** end of is a triangle code *** //

// *** start of quiz app code *** //
const form = document.querySelector("#my-form");
const scoreDisplay = document.querySelector("#score-display");
const submitBtn = document.querySelector("#submit-btn");
const correctAnswers = ["90", "right angled"];

if (submitBtn) {
  submitBtn.addEventListener("click", function () {
    const formData = new FormData(form);
    let userAnswers = [];
    for (let value of formData.values()) {
      userAnswers.push(value);
    }
    checkAnswer(correctAnswers, userAnswers);
  });
}

function checkAnswer(correctAnswers, userAnswers) {
  let score = 0;
  for (let x = 0; x < userAnswers.length; x++) {
    if (correctAnswers[x] == userAnswers[x]) {
      score++;
    } else {
      score;
    }
  }
  scoreDisplay.innerText = `Your Score is ${score} / ${correctAnswers.length}`;
}

// *** end of quiz app code ***//

// *** start of Hypotenuse code *** //
const a = document.querySelector("#hypotenuse-angle-one");
const b = document.querySelector("#hypotenuse-angle-two");
const displayHypotenuse = document.querySelector("#display-hypotenuse");
const hypotenuseBtn = document.querySelector("#check-hypotenuse");

// function checkInputHypotenuse() {
//   if (isNaN(parseInt(a.value) && parseInt(b.value))) {
//     displayHypotenuse.innerText = "fields cannot be empty";
//   } else {
//     if ((Number(a.value) && Number(b.value)) === 0) {
//       displayHypotenuse.innerText = "values cannot be zero";
//     } else {
//       checkHypotenuse(a, b);
//     }
//   }
// }

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
  hypotenuseBtn.addEventListener("click", function () {
    checkInputHypotenuse(a, b, displayHypotenuse);
  });
}

function checkHypotenuse(a, b) {
  let sumOf = Number(a.value) ** 2 + Number(b.value) ** 2;
  let square = Math.sqrt(sumOf);
  displayHypotenuse.innerText = `The length of the hypotenuse is ${square} cm`;
}
// *** end of hypotenuse code *** //

// *** start of area code *** //
const base = document.querySelector("#base");
const height = document.querySelector("#height");
const displayArea = document.querySelector("#display-area");
const checkAreaBtn = document.querySelector("#check-area-btn");

if (checkAreaBtn) {
  checkAreaBtn.addEventListener("click", function () {
    checkInputArea(base, height, displayArea);
  });
}

// function checkInputArea() {
//   if (isNaN(parseInt(base.value) && parseInt(height.value))) {
//     displayArea.innerText = "fields cannot be empty";
//   } else {
//     if ((Number(base.value) && Number(height.value)) === 0) {
//       displayArea.innerText = "values cannot be zero";
//     } else {
//       displayArea.innerText = `The area of the triangle is ${checkArea(
//         base,
//         height
//       )} cm²`;
//     }
//   }
// }

function checkInputArea(inputOne, inputTwo, outputDisplay) {
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
}

function checkArea(base, height) {
  let area = (1 / 2) * (base.value * height.value);
  return area;
}

// *** end of area code ***//
