document.addEventListener('DOMContentLoaded', function () {
    const result = document.getElementById('result');
    const clearButton = document.getElementById('clear');
    const deleteButton = document.getElementById('delete');
    const dotButton = document.getElementById('dot');
    const divideButton = document.getElementById('divide');
    const multiplyButton = document.getElementById('multiply');
    const subtractButton = document.getElementById('subtract');
    const addButton = document.getElementById('add');
    const equalButton = document.getElementById('equal');

    const numberButtons = document.querySelectorAll('.button');

    let currentNumber = '';
    let previousNumber = '';
    let operation = null;

    // Event listeners for number buttons
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentNumber += button.textContent;
            updateDisplay();
        });
    });

    // Event listener for dot button
    dotButton.addEventListener('click', () => {
        if (!currentNumber.includes('.')) {
            currentNumber += '.';
            updateDisplay();
        }
    });

    // Event listener for clear button
    clearButton.addEventListener('click', () => {
        clear();
        updateDisplay();
    });

    // Event listener for delete button
    deleteButton.addEventListener('click', () => {
        currentNumber = currentNumber.slice(0, -1);
        updateDisplay();
    });

    // Event listeners for arithmetic operations
    divideButton.addEventListener('click', () => {
        handleOperation('/');
    });

    multiplyButton.addEventListener('click', () => {
        handleOperation('*');
    });

    subtractButton.addEventListener('click', () => {
        handleOperation('-');
    });

    addButton.addEventListener('click', () => {
        handleOperation('+');
    });

    // Event listener for equal button
    equalButton.addEventListener('click', () => {
        calculate();
        updateDisplay();
    });

    // Function to update the display
    function updateDisplay() {
        result.value = currentNumber;
    }

    // Function to handle arithmetic operations
    function handleOperation(op) {
        if (currentNumber === '') return;
        if (previousNumber !== '') {
            calculate();
        }
        operation = op;
        previousNumber = currentNumber;
        currentNumber = '';
    }

    // Function to perform the calculation
    function calculate() {
        let computation;
        const prev = parseFloat(previousNumber);
        const curr = parseFloat(currentNumber);
        if (isNaN(prev) || isNaN(curr)) return;
        switch (operation) {
            case '+':
                computation = prev + curr;
                break;
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '/':
                computation = prev / curr;
                break;
            default:
                return;
        }
        currentNumber = computation.toString();
        operation = null;
        previousNumber = '';
    }

    // Function to clear the calculator
    function clear() {
        currentNumber = '';
        previousNumber = '';
        operation = null;
    }
});

