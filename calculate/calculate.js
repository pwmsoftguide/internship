// Get our elements from the HTML
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operatorInput = document.getElementById("operator");
const calcButton = document.getElementById("calcButton");
const finalResult = document.getElementById("finalResult");

// The main function that calculates the amount
function calculateAmount() {
  // Convert the input values from text to actual decimal numbers
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operator = operatorInput.value;

  // Safety check: Make sure the user actually typed numbers
  if (isNaN(num1) || isNaN(num2)) {
    finalResult.innerText = "Error: Missing numbers";
    return; // Stop the function here
  }

  let result = 0;

  // Do the math based on the selected operator
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    // Safety check: You can't divide by zero!
    if (num2 === 0) {
      finalResult.innerText = "Error: Can't divide by 0";
      return;
    }
    result = num1 / num2;
  }

  // Display the final result
  finalResult.innerText = result;
}

// Tell the button to run our function when clicked
calcButton.addEventListener("click", calculateAmount);
