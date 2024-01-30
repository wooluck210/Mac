const display = document.querySelector('.calculator-input');

function inputChar(character) {
    display.value += character;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function toggleSign() {
    if (display.value) {
        display.value = eval(display.value) * -1;
    }
}

display.addEventListener('keydown', (event) => {
    if ((event.key >= 0 && event.key <= 9) || ['+', '-', '*', '/', '(', ')', '.'].includes(event.key)) {
        inputChar(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        deleteLast();
    }
});
