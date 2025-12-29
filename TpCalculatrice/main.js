 // --- Calculator Logic Class ---
    class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.screenElement = document.getElementById('displayScreen');
    this.clear();
}

    clear() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
    this.updateDisplay();
}

    delete() {
    if (this.currentOperand === '0') return;
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
    if (this.currentOperand === '' || this.currentOperand === '-') {
    this.currentOperand = '0';
}
    this.updateDisplay();
}

    appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return;
    if (this.currentOperand === '0' && number !== '.') {
    this.currentOperand = number.toString();
} else {
    this.currentOperand = this.currentOperand.toString() + number.toString();
}
    this.updateDisplay();
}

    chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
    this.compute();
}
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
    this.updateDisplay();
}

    compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
    case '+':
    computation = prev + current;
    break;
    case '-':
    computation = prev - current;
    break;
    case '*':
    computation = prev * current;
    break;
    case '÷':
    if (current === 0) {
    computation = "ERR: DIV/0";
    break;
}
    computation = prev / current;
    break;
    default:
    return;
}

    // Handle floating point weirdness (e.g., 0.1 + 0.2)
    if (typeof computation === 'number') {
    // Limit decimals to prevent overflow
    computation = parseFloat(computation.toFixed(10));
}

    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
    this.updateDisplay();
    this.triggerFlash();
}

    // Adds commas to long numbers for readability
    getDisplayNumber(number) {
    if (typeof number === 'string' && number.startsWith("ERR")) return number;

    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
    integerDisplay = '';
} else {
    integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 });
}
    if (decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`;
} else {
    return integerDisplay;
}
}

    updateDisplay() {
    this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
    this.previousOperandTextElement.innerText =
    `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
} else {
    this.previousOperandTextElement.innerText = '';
}
}

    // A visual kick when pressing equals
    triggerFlash() {
    this.screenElement.classList.remove('screen-flash');
    // Trigger reflow to restart animation
    void this.screenElement.offsetWidth;
    this.screenElement.classList.add('screen-flash');
}
}

    // --- Initialization ---
    const previousOperandTextElement = document.getElementById('previousOperand');
    const currentOperandTextElement = document.getElementById('currentOperand');

    // Instantiate the calculator object
    const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
