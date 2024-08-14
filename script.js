const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons button');

let currentInput = '';
let operator = '';
let previousInput = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '+' || value === '-' || value === '*' || value === '/') {
      // Handle operator clicks
      if (currentInput !== '' && previousInput !== '') {
        calculate();
      }
      operator = value;
      previousInput = currentInput;
      currentInput = '';
    } else if (value === '.') {
      // Handle decimal point
      if (!currentInput.includes('.')) {
        currentInput += value;
      }
    } else if (value === 'C') {
      // Handle clear button
      currentInput = '';
      operator = '';
      previousInput = '';
      display.value = '';
    } else if (value === '=') {
      // Handle equals button
      calculate();
    } else {
      // Handle number button clicks
      currentInput += value;
    }

    display.value = currentInput;
  });
});

function calculate() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  let result;

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        result = 'Error: Division by zero';
      } else {
        result = num1 / num2;
      }
      break;
  }

  display.value = result;
  currentInput = result.toString();
  operator = '';
  previousInput = '';
}
