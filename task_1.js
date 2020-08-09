'use strict'

// 1 Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в
// градусах по Фаренгейту. Подсказка: расчёт идёт по формуле:
// Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию

let celsius = +prompt('Введите температуру в градусах цельсия:');

let farenheit = (9 / 5) * celsius + 32;
alert(celsius + ' градусов по Цельсию = ' + farenheit + ' градусов по Фаренгейту');

// 2. Объявить две переменные: admin и name. Записать в name строку "Василий". Скопировать
// значение из name в admin. Вывести в консоль переменную admin (должно вывести "Василий").

let name = 'Василий';
let admin = name;

console.log(admin);

// 3. Вывести в консоль значения выражений и объяснить почему получились такие значения
// используя комментарии к каждому выражению:

// 10 + 10 + "10"
console.log(10 + 10 + "10"); // 10 + 10 равно 20 конкатенация "10" результат 2010

// 10 + "10" + 10
console.log(10 + "10" + 10); // 10 конкатенация "10" конкатенация 10 результат 101010

// 10 + 10 + +"10"
console.log(10 + 10 + +"10"); // 10 + 10 + унарный оператор переводит "10" в 10 результат 30

// 10 / -""
console.log(10 / -""); // 10 / - унарный оператор переводит "" в -0 результат Infinity

// 10 / +"2,5"
console.log(10 / +"2,5"); // 10 / + унарный оператор переводит "2,5" в NaN из за , результат NaN

// 4. Напишите, являются ли данные имена переменных корректными:
let mode = "normal"; // корректное

let my_valu3 = 102; // корректное

// let 3my_value3 = "102"; // не корректное (начинается с цифры)

let __hello__ = "world"; // корректное

let $$$ = "money"; // корректное

// let!0_world = true; // не корректное (начинается с символа !)

