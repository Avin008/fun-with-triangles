const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputBox = document.querySelector("#output-box");

// *** is a triangle ***

isTriangleBtn.addEventListener("click", isTriangle);

function calculateSumOfAngles() {
  let sum = 0;
  if (angleOne.value && angleTwo.value && angleThree.value) {
    sum =
      Number(angleOne.value) +
      Number(angleTwo.value) +
      Number(angleThree.value);
    return sum;
  } else {
    return 0;
  }
}

function isTriangle() {
  let totalSum = calculateSumOfAngles();

  if (totalSum) {
    if (totalSum === 180) {
      outputBox.innerText = "is a triangle";
    } else {
      outputBox.innerText = "not a triangle";
    }
  } else {
    outputBox.innerText = "input fields cannot be empty";
  }
}

// ***
