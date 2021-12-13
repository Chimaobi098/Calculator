function add(num1, num2) {
  let result = 0;
  result = num1 + num2;
  return Math.round((result + Number.EPSILON) * 100) / 100;
}

function subtract(num1, num2) {
  let result = 0;
  result = num1 - num2;
  return Math.round((result + Number.EPSILON) * 100) / 100;
}

function multiply(num1, num2) {
  let result = 1;
  result = num1 * num2;
  return Math.round((result + Number.EPSILON) * 100) / 100;
}

function divide(num1, num2) {
  let result = 1;
  result = num1 / num2;
  return Math.round((result + Number.EPSILON) * 100) / 100;
}

function operate(num1, op, num2) {
  if (op == "+") {
    return add(num1, num2);
  } else if (op == "-") {
    return subtract(num1, num2);
  } else if (op == "*") {
    return multiply(num1, num2);
  } else if (op == "/") {
    return divide(num1, num2);
  } else {
    return "invalid operator";
  }
}

// Button variables
const display = document.querySelector(".display");
const zeroBtn = document.querySelector(".zero");
const oneBtn = document.querySelector(".one");
const twoBtn = document.querySelector(".two");
const threeBtn = document.querySelector(".three");
const fourBtn = document.querySelector(".four");
const fiveBtn = document.querySelector(".five");
const sixBtn = document.querySelector(".six");
const sevenBtn = document.querySelector(".seven");
const eightBtn = document.querySelector(".eight");
const nineBtn = document.querySelector(".nine");
const clearAllBtn = document.querySelector(".clear-all");
const deleteBtn = document.querySelector(".delete");
const multiplyBtn = document.querySelector(".multiply");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const divideBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".equal");
const decimalBtn = document.querySelector(".decimal");

// Event listeners
zeroBtn.addEventListener("click", displayZero);
window.addEventListener("keydown", zeroKey);

oneBtn.addEventListener("click", displayOne);
window.addEventListener("keydown", oneKey);

twoBtn.addEventListener("click", displayTwo);
window.addEventListener("keydown", twoKey);

threeBtn.addEventListener("click", displayThree);
window.addEventListener("keydown", threeKey);

fourBtn.addEventListener("click", displayFour);
window.addEventListener("keydown", fourKey);

fiveBtn.addEventListener("click", displayFive);
window.addEventListener("keydown", fiveKey);

sixBtn.addEventListener("click", displaySix);
window.addEventListener("keydown", sixKey);

sevenBtn.addEventListener("click", displaySeven);
window.addEventListener("keydown", sevenKey);

eightBtn.addEventListener("click", displayEight);
window.addEventListener("keydown", eightKey);

nineBtn.addEventListener("click", displayNine);
window.addEventListener("keydown", nineKey);

clearAllBtn.addEventListener("click", clearAll);

deleteBtn.addEventListener("click", remove);
window.addEventListener("keydown", deleteKey);

multiplyBtn.addEventListener("click", multiplication);
window.addEventListener("keydown", multiplyKey);

addBtn.addEventListener("click", addition);
window.addEventListener("keydown", addKey);

subtractBtn.addEventListener("click", subtraction);
window.addEventListener("keydown", subtractKey);

divideBtn.addEventListener("click", division);
window.addEventListener("keydown", divideKey);

decimalBtn.addEventListener("click", addDecimal);
window.addEventListener("keydown", decimalKey);
// {once: true}

equalBtn.addEventListener("click", equal);
window.addEventListener("keydown", equalKey);

num1 = 0;
op = "+";
num2 = 0;
function zeroKey(e) {
  if (e.keyCode == 48) {
    displayZero();
  }
}
function oneKey(e) {
  if (e.keyCode == 49) {
    displayOne();
  }
}
function twoKey(e) {
  if (e.keyCode == 50) {
    displayTwo();
  }
}
function threeKey(e) {
  if (e.keyCode == 51) {
    displayThree();
  }
}
function fourKey(e) {
  if (e.keyCode == 52) {
    displayFour();
  }
}
function fiveKey(e) {
  if (e.keyCode == 53) {
    displayFive();
  }
}
function sixKey(e) {
  //   e.preventDefault();
  if (e.keyCode == 54) {
    displaySix();
  }
}
function sevenKey(e) {
  //   e.preventDefault();
  if (e.keyCode == 55) {
    displaySeven();
  }
}
function eightKey(e) {
  //   e.preventDefault();
  if (e.keyCode == 56) {
    displayEight();
  }
}
function nineKey(e) {
  //   e.preventDefault();
  if (e.keyCode == 57) {
    displayNine();
  }
}

function deleteKey(e) {
  //   e.preventDefault();
  if (e.keyCode == 8) {
    remove();
  }
}

function addKey(e) {
  //   e.preventDefault();
  if (e.key == "+") {
    addition();
  }
}
function subtractKey(e) {
  //   e.preventDefault();
  if (e.keyCode == 189) {
    subtraction();
  }
}
function divideKey(e) {
  //   e.preventDefault();
  if (e.keyCode == 191) {
    division();
  }
}

function multiplyKey(e) {
  //   e.preventDefault();
  if (e.key == "*") {
    multiplication();
  }
}

function decimalKey(e) {
  //   e.preventDefault();
  if (e.keyCode == 190) {
    addDecimal();
  }
}

function equalKey(e) {
  //   e.preventDefault();
  if (e.keyCode == 13) {
    equal();
  }
}

function displayZero() {
  if (display.textContent.includes(".") && display.textContent.length < 8) {
    display.textContent += 0;
  } else if (display.textContent == 0) {
    display.textContent = 0;
  } else if (
    display.textContent.includes("x") ||
    display.textContent.includes("+") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("-")
  ) {
    display.textContent = 0;
  } else if (display.textContent.length < 8) {
    display.textContent += 0;
  }
}

function displayOne() {
  if (
    display.textContent.includes("x") ||
    display.textContent.includes("+") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("-")
  ) {
    display.textContent = 1;
  } else if (
    display.textContent.includes(".") &&
    display.textContent == 0 &&
    display.textContent.length < 8
  ) {
    display.textContent += 1;
  } else if (
    display.textContent.includes(".") &&
    display.textContent.length < 8
  ) {
    display.textContent += 1;
  } else if (display.textContent == 0) {
    display.textContent = 1;
  } else if (display.textContent.length < 8) {
    display.textContent += 1;
  }
}

function displayTwo() {
  if (
    display.textContent.includes("x") ||
    display.textContent.includes("+") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("-")
  ) {
    display.textContent = 2;
  } else if (
    display.textContent.includes(".") &&
    display.textContent == 0 &&
    display.textContent.length < 8
  ) {
    display.textContent += 2;
  } else if (
    display.textContent.includes(".") &&
    display.textContent.length < 8
  ) {
    display.textContent += 2;
  } else if (display.textContent == 0) {
    display.textContent = 2;
  } else if (display.textContent.length < 8) {
    display.textContent += 2;
  }
}

function displayThree() {
  if (
    display.textContent.includes("x") ||
    display.textContent.includes("+") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("-")
  ) {
    display.textContent = 3;
  } else if (
    display.textContent.includes(".") &&
    display.textContent == 0 &&
    display.textContent.length < 8
  ) {
    display.textContent += 3;
  } else if (
    display.textContent.includes(".") &&
    display.textContent.length < 8
  ) {
    display.textContent += 3;
  } else if (display.textContent == 0) {
    display.textContent = 3;
  } else if (display.textContent.length < 8) {
    display.textContent += 3;
  }
}

function displayFour() {
  if (
    display.textContent.includes("x") ||
    display.textContent.includes("+") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("-")
  ) {
    display.textContent = 4;
  } else if (
    display.textContent.includes(".") &&
    display.textContent == 0 &&
    display.textContent.length < 8
  ) {
    display.textContent += 4;
  } else if (
    display.textContent.includes(".") &&
    display.textContent.length < 8
  ) {
    display.textContent += 4;
  } else if (display.textContent == 0) {
    display.textContent = 4;
  } else if (display.textContent.length < 8) {
    display.textContent += 4;
  }
}

function displayFive() {
  if (
    display.textContent.includes("x") ||
    display.textContent.includes("+") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("-")
  ) {
    display.textContent = 5;
  } else if (
    display.textContent.includes(".") &&
    display.textContent == 0 &&
    display.textContent.length < 8
  ) {
    display.textContent += 5;
  } else if (
    display.textContent.includes(".") &&
    display.textContent.length < 8
  ) {
    display.textContent += 5;
  } else if (display.textContent == 0) {
    display.textContent = 5;
  } else if (display.textContent.length < 8) {
    display.textContent += 5;
  }
}

function displaySix() {
  if (
    display.textContent.includes("x") ||
    display.textContent.includes("+") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("-")
  ) {
    display.textContent = 6;
  } else if (
    display.textContent.includes(".") &&
    display.textContent == 0 &&
    display.textContent.length < 8
  ) {
    display.textContent += 6;
  } else if (
    display.textContent.includes(".") &&
    display.textContent.length < 8
  ) {
    display.textContent += 6;
  } else if (display.textContent == 0) {
    display.textContent = 6;
  } else if (display.textContent.length < 8) {
    display.textContent += 6;
  }
}

function displaySeven() {
  if (
    display.textContent.includes("x") ||
    display.textContent.includes("+") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("-")
  ) {
    display.textContent = 7;
  } else if (
    display.textContent.includes(".") &&
    display.textContent == 0 &&
    display.textContent.length < 8
  ) {
    display.textContent += 7;
  } else if (
    display.textContent.includes(".") &&
    display.textContent.length < 8
  ) {
    display.textContent += 7;
  } else if (display.textContent == 0) {
    display.textContent = 7;
  } else if (display.textContent.length < 8) {
    display.textContent += 7;
  }
}

function displayEight() {
  if (
    display.textContent.includes("x") ||
    display.textContent.includes("+") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("-")
  ) {
    display.textContent = 8;
  } else if (
    display.textContent.includes(".") &&
    display.textContent == 0 &&
    display.textContent.length < 8
  ) {
    display.textContent += 8;
  } else if (
    display.textContent.includes(".") &&
    display.textContent.length < 8
  ) {
    display.textContent += 8;
  } else if (display.textContent == 0) {
    display.textContent = 8;
  } else if (display.textContent.length < 8) {
    display.textContent += 8;
  }
}

function displayNine() {
  if (
    display.textContent.includes("x") ||
    display.textContent.includes("+") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("-")
  ) {
    display.textContent = 9;
  } else if (
    display.textContent.includes(".") &&
    display.textContent == 0 &&
    display.textContent.length < 8
  ) {
    display.textContent += 9;
  } else if (
    display.textContent.includes(".") &&
    display.textContent.length < 8
  ) {
    display.textContent += 9;
  } else if (display.textContent == 0) {
    display.textContent = 9;
  } else if (display.textContent.length < 8) {
    display.textContent += 9;
  }
}

function clearAll() {
  display.textContent = 0;
  console.log(display.textContent);
  num1 = 0;
  num2 = 0;
  op = "+";
}

function remove() {
  display.textContent = display.textContent.slice(0, -1);
  console.log(display.textContent);
}

// OPERATION FUNCTIONS
function addition() {
  equal();
  if (
    !display.textContent.includes("+") &&
    !display.textContent.includes("x") &&
    !display.textContent.includes("÷") &&
    !display.textContent.includes("-")
  ) {
    displayValue = display.textContent;
    num1 = parseFloat(displayValue);
    display.textContent = num1 + " + ";
  } else if (
    display.textContent.includes("x") ||
    display.textContent.includes("-") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("+")
  ) {
    displayValue = display.textContent;
    num1 = parseFloat(displayValue);
    display.textContent = num1 + " + ";
  }

  return (op = "+");
}

function multiplication() {
  equal();
  if (
    !display.textContent.includes("+") &&
    !display.textContent.includes("x") &&
    !display.textContent.includes("÷") &&
    !display.textContent.includes("-")
  ) {
    displayValue = display.textContent;
    num1 = parseFloat(displayValue);
    display.textContent = num1 + " x ";
  } else if (
    display.textContent.includes("x") ||
    display.textContent.includes("-") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("+")
  ) {
    displayValue = display.textContent;
    num1 = parseFloat(displayValue);
    display.textContent = num1 + " x ";
  }

  return (op = "*");
}

function subtraction() {
  equal();
  if (
    !display.textContent.includes("+") &&
    !display.textContent.includes("x") &&
    !display.textContent.includes("÷") &&
    !display.textContent.includes("-")
  ) {
    displayValue = display.textContent;
    num1 = parseFloat(displayValue);
    display.textContent = num1 + " - ";
  } else if (
    display.textContent.includes("x") ||
    display.textContent.includes("-") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("+")
  ) {
    displayValue = display.textContent;
    num1 = parseFloat(displayValue);
    display.textContent = num1 + " - ";
  }
  return (op = "-");
}

function division() {
  equal();
  if (
    !display.textContent.includes("+") &&
    !display.textContent.includes("x") &&
    !display.textContent.includes("÷") &&
    !display.textContent.includes("-")
  ) {
    displayValue = display.textContent;
    num1 = parseFloat(displayValue);
    display.textContent = num1 + " ÷ ";
  } else if (
    display.textContent.includes("x") ||
    display.textContent.includes("-") ||
    display.textContent.includes("÷") ||
    display.textContent.includes("+")
  ) {
    displayValue = display.textContent;
    num1 = parseFloat(displayValue);
    display.textContent = num1 + " ÷ ";
  }
  return (op = "/");
}

function equal() {
  if (num1 !== "" && op !== "") {
    if (
      !display.textContent.includes("+") &&
      !display.textContent.includes("x") &&
      !display.textContent.includes("÷") &&
      !display.textContent.includes("-")
    ) {
      displayValue = display.textContent;
      const num2 = parseFloat(displayValue);
      console.log(num1);

      console.log(num2);

      if (num2 == 0 && op == "/") {
        alert("You can't divide by zero:");
      } else {
        if (display.textContent.length > 5) {
          display.textContent = operate(num1, op, num2).toPrecision(8);
        } else {
          display.textContent = operate(num1, op, num2).toPrecision();
        }
      }
    }

    num1 = 0;

    op = "+";
  }
}

function addDecimal() {
  if (display.textContent.length < 8) {
    if (!display.textContent.includes(".")) {
      display.textContent = display.textContent + ".";
    }
  }
}
