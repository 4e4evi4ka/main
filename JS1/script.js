let nameу = prompt('Введіть своє ім`я', '');

while (!nameу || nameу.trim().length === 0) {
    nameу = prompt('Введіть своє ім`я ще раз', '');
}

let age = Number(prompt('Введіть свій вік', ''));

while (!age || isNaN(age)) {
    age = Number(prompt('Введіть свій вік ще раз! Запишіть числове значення', ''));
}

if (age < 18) {
    alert("So little...\nВам заборонено відвідувати цей веб-сайт");
    console.log(`Data: ${nameу} ${age}`);
} else if (age >= 18 && age <= 22) {
    const result = confirm("Ви впевнені, що бажаєте продовжити?");
    if (result) {
        alert(`Ласкаво просимо, ${nameу} ${age}`);
    } else {
        alert("Вам заборонено відвідувати цей веб-сайт");
    }
    console.log(`Result: ${result}`);
} else {
    alert(`Ласкаво просимо, ${nameу}`);
    console.log(`Data: ${nameу} ${age}`);
}
