let primeiroNumero = '';
let operador = '';
let segundoNumero = '';

function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
    if (b === 0) return 'Erro: Divisão por zero'; 
    return a / b; 
}

function operate(operador, a, b) {
    if (operador === '+') return add(a, b);
    if (operador === '-') return subtract(a, b);
    if (operador === '*') return multiply(a, b);
    if (operador === '/') return divide(a, b);
}

function inputNumber(num){
    if (operador === '') {
        primeiroNumero += num;
        document.getElementById('display').textContent = primeiroNumero;
    } else {
        segundoNumero += num;
        document.getElementById('display').textContent = segundoNumero;
    }
}

function inputPoint(point) {
    if (document.getElementById('display').textContent.includes('.')) {
        return; 
    }
    if (operador === '') {
        if (!primeiroNumero.includes(point)) {
            primeiroNumero += point;
            document.getElementById('display').textContent = primeiroNumero;
        }
    } else {
        if (!segundoNumero.includes(point)) {
            segundoNumero += point;
            document.getElementById('display').textContent = segundoNumero;
        }
    }
}

function inputOperator(op) {
    if (primeiroNumero === '') return;
    if (segundoNumero !== '') {
        document.getElementById('display').textContent = operate(operador, parseFloat(primeiroNumero), parseFloat(segundoNumero));
        primeiroNumero = document.getElementById('display').textContent;
        segundoNumero = '';
        operador = op;
    } else {
        operador = op;
    }
}

function calculateResult() {
    if (primeiroNumero === '' || operador === '' || segundoNumero === '') return;
    const resultado = operate(operador, parseFloat(primeiroNumero), parseFloat(segundoNumero));
    document.getElementById('display').textContent = resultado;
    primeiroNumero = resultado.toString();
    operador = '';
    segundoNumero = '';
}

function clearDisplay() {
    primeiroNumero = '';
    operador = '';
    segundoNumero = '';
    document.getElementById('display').textContent = '';
};

function deleteLast() {
    if (operador === '') {
        primeiroNumero = primeiroNumero.slice(0, -1);
        document.getElementById('display').textContent = primeiroNumero;
    } else {
        segundoNumero = segundoNumero.slice(0, -1);
        document.getElementById('display').textContent = segundoNumero;
    }
}