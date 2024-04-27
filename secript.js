function addToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let display = document.getElementById('display');
    let equation = display.value;
    let result = eval(equation);
    display.value = result;
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}