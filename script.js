//This will bring an array of all the elements with this class name - notice it is getElements is plural
//There is only 1 item with this classname but note for the future
const resultText = document.getElementsByClassName("result-text")[0];

//What stores the value of the number and operator
let storedValue = null;
let operator = null;

function onNumberPressed(number) {
  if (number === ".") {
    if (resultText.innerHTML.length === 0 || resultText.innerHTML.includes("."))
      return;
  }
  // toString() is necessary to prevent the numbers accidentally adding together
  resultText.innerHTML += number.toString();
}

function canOperate() {
  //Verify there is at least 1 number present in the calculator
  return resultText.innerHTML.length >= 1;
}

function operate(number) {
  let result;

  //Functions below based on operator
  switch (operator) {
    case "+":
      result = storedValue + number;
      break;
    case "-":
      result = storedValue - number;
      break;
    case "x":
      result = storedValue * number;
      break;
    case "/":
      result = storedValue / number;
      break;
  }

  //Displays result
  resultText.innerHTML = result;

  //Can clear out storedValue since we redefine it again in onOperationPressed()
  storedValue = null;
  operator = null;
}

function onOperationPressed(operation) {
  //Grabbing whatever number and storing it later in the function
  //Converts string to a floating number
  const number = parseFloat(resultText.innerHTML);

  //If no number present, cancel
  if (!canOperate()) return;

  //Verify equal sign has a value ready to do function upon
  if (operation === "=" && storedValue !== null) {
    return operate(number);
  }

  //Clear function
  else if (operation === "c") {
    storedValue = null;
    operator = null;

    //Store values for operate() function
  } else {
    operator = operation;
    storedValue = number;
  }

  //No matter the operator, the number should clear to input the new number
  resultText.innerHTML = "";
}
