
function calcResult(N1, N2, operator) {
    switch (operator) {
        case '+':
            return N1 + N2;
        case '-':
            return N1 - N2;
        case '*':
            return N1 * N2;
        case '/':
            return N1 / N2;
        default:
            return 'Невідома операція';
    }
}

let N1, N2, operator;
do {
    N1 = +prompt('Введіть перше число', N1 !== undefined ? String(N1) : '');
    N2 = +prompt('Введіть друге число', N2 !== undefined ? String(N2) : '');

    if (isNaN(N1) || isNaN(N2)) {
        alert('Будь ласка, введіть коректні числа.');
    }
} while (isNaN(N1) || isNaN(N2));

do {
    operator = prompt('Введіть математичний знак операції', operator);
} while (!['+', '-', '*', '/'].includes(operator));

alert(calcResult(N1, N2, operator)); 
console.log(`Результат розрахунків: ${N1} ${operator} ${N2} = ${calcResult(N1, N2, operator)}`);

