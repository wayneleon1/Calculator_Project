
    let currentInput = '';
    let currentOperator = '';
    let firstNumber = '';
    let secondNumber = '';

    function appendToDisplay(value) {
      currentInput += value;
      updateDisplay();
    }

    function appendOperator(operator) {
      if (currentInput !== '') {
        if (firstNumber === '') {
          firstNumber = currentInput;
          currentInput = '';
        }
        currentOperator = operator;
        updateDisplay();
      }
    }

    function appendDecimal() {
      if (currentInput !== '' && !currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
      }
    }

    function clearDisplay() {
      currentInput = '';
      firstNumber = '';
      secondNumber = '';
      currentOperator = '';
      updateDisplay();
    }

    function updateDisplay() {
      const display = document.getElementById('display');
      display.textContent = currentInput || '0';
    }

    function operate(operator, num1, num2) {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      switch (operator) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          if (num2 !== 0) {
            return num1 / num2;
          } else {
            displayError('Cannot divide by zero');
            clearDisplay();
            return null;
          }
      }
    }

    function calculate() {
      if (currentInput !== '' && firstNumber !== '' && currentOperator !== '') {
        secondNumber = currentInput;
        const result = operate(currentOperator, firstNumber, secondNumber);
        if (result !== null) {
          currentInput = result.toString();
          firstNumber = '';
          secondNumber = '';
          currentOperator = '';
          updateDisplay();
        }
      }
    }

    function displayError(message) {
      const display = document.getElementById('display');
      display.textContent = message;
    }
  