let display = document.getElementById("display");
let currentInput = "0";
let calculationDone = false;

function updateDisplay() {
  display.textContent = currentInput;
}

function appendToDisplay(value) {
  if (calculationDone && !isNaN(value)) {
    currentInput = value;
    calculationDone = false;
  } else if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = "0";
  calculationDone = false;
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
    calculationDone = true;
    updateDisplay();
  } catch (error) {
    currentInput = "Error";
    updateDisplay();
  }
}

function deleteLastChar() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
}
