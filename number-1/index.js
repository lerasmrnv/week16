"use strict";

function sumInput() {
// Создание массива и добавление в него чисел
let arr = [];
while (true) {
    const number = prompt ('Введите значение');
    if (number == "") break;
    arr.push (+number);
}
console.log (arr);

// Сортировка массива
arr.sort();
console.log(arr);


// Подсчет суммы
    let sum = 0;

    for(let number of arr) {
        sum = sum + number;
    }
    console.log (sum);
}


sumInput();