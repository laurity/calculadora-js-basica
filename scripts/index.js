const calculate = () => {

    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;

    // Uso del Switch en este caso

    switch (operator) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                result = 'No se puede dividir por cero';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = 'Operación no válida';
    }

    document.getElementById('result').textContent = 'Resultado: ' + result;
}

// Función para reiniciar el formulario
const resetForm = () => {
    document.getElementById('calculator-form').reset();
    document.getElementById('result').textContent = '';
}

// Manejar el envío del formulario
document.getElementById('calculator-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Evitar el envío del formulario
    calculate();
});

// Manejar el botón de reinicio
document.getElementById('reset').addEventListener('click', () => {
    resetForm();
});