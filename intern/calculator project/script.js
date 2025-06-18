function add(a, b) {
            return a + b;
        }

        function subtract(a, b) {
            return a - b;
        }

        function multiply(a, b) {
            return a * b;
        }  

        function divide(a, b) {
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;
        }

        function operate(a, b, operation) {
            switch (operation) {
                case '+':
                    return add(a, b);
                    break;
                case '-':
                    return subtract(a, b);
                    break;
                case '*':
                    return multiply(a, b);
                    break;
                case '/':
                    return divide(a, b);
                    break;
                default:
                    throw new Error("Unknown operation: " + operation);
                    break;
            }
        }

        let firstOperand = null;
        let secondOperand = null;
        let operator = null;
        let waitingForOperand = false;

        function appendDigit(digit) {
            const display = document.getElementById('display');
            if (waitingForOperand) {
                display.value = digit;
                waitingForOperand = false;
            } else {
                display.value = display.value === '0' ? digit : display.value + digit;
            }
        }

        function updateDisplay(value) {
            const display = document.getElementById('display');
            display.value = value;
        }

        function clearDisplay() {
            const display = document.getElementById('display');
            display.value = '';
            firstOperand = null;
            secondOperand = null;
            operator = null;
            waitingForOperand = false;
        }

        function setOperator(op) {
            const display = document.getElementById('display');
            const inputValue = parseFloat(display.value);

            if (firstOperand === null) {
                firstOperand = inputValue;
            } else if (operator) {
                const currentValue = firstOperand || 0;
                const newValue = operate(currentValue, inputValue, operator);
                
                updateDisplay(newValue);
                firstOperand = newValue;
            }

            waitingForOperand = true;
            operator = op;
        }

        function calculateResult() {
            const display = document.getElementById('display');
            const inputValue = parseFloat(display.value);

            if (firstOperand !== null && operator && !waitingForOperand) {
                const newValue = operate(firstOperand, inputValue, operator);
                updateDisplay(newValue);
                firstOperand = newValue;
                secondOperand = null;
                operator = null;
                waitingForOperand = true;
            }
        }