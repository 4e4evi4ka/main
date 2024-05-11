// let number1 = +prompt('Введіть перше число', '0');
// while (number1 == null || isNaN(number1)) {
//     number1 = +prompt('Введіть перше число ще раз!', '0');
// }

// let number2 = +prompt('Введіть друге число', '0');
// while (number2 == null || isNaN(number2) || number1 >= number2) {
//     number2 = +prompt('Введіть друге число ще раз! Воно повинно бути більше першого', '0');
// }
// for (let i = number1; i <= number2; i++) {
//     if (i % 5 === 0) {
//         console.log("Числа кратні 5: " + i);
//     }
// }
// if (number1 === number2 || !Number.isInteger((number2 - number1) / 5)) {
//     console.log("Вибачте, чисел кратних 5 немає");
// }
// 
// const isPrime = num => {
//     if (num <= 1) return false;
//     if (num <= 3) return true;
//     if (num % 2 === 0 || num % 3 === 0) return false;
//     let i = 5;
//     while (i * i <= num) {
//         if (num % i === 0 || num % (i + 2) === 0) return false;
//         i += 6;
//     }
//     return true;
// }




do{
    const isPrime = num => {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    let m, n;

    do {
        m = +prompt('Введіть перше ціле число', '0');
        n = +prompt('Введіть друге ціле число', '0');

        if (!Number.isInteger(m) || !Number.isInteger(n)) {
            alert('Будь ласка, введіть ціле число.');
        } else if (m >= n) {
            alert('Будь ласка, введіть числа в правильному порядку.');
        }
    } while (!Number.isInteger(m) || !Number.isInteger(n) || m >= n);

    
    const min = Math.min(m, n);
    const max = Math.max(m, n);

    
    console.log(`Прості числа від ${min} до ${max}:`);
    let primesFound = false;
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            console.log(i);
            primesFound = true;
        }
    }
    
    if (!primesFound) {
        console.log('Простих чисел у заданому діапазоні немає.');
    }

}
while(confirm('Йдемо далі?'));
