'use strict'

// Tf = (9 / 5) * Tc + 32
const t_celsius = 30;
const t_fahrenheit = (9 / 5) * t_celsius + 32;
alert(t_fahrenheit);

const name = 'Василий';
const admin = name;
console.log(admin);

let result = 10 + 10 + "10";
console.log(result);
/*
	1. 10 прибавляем к 10 получаем 20
	2. 20 преобразуется в строку и соединяется с "10" получается "2010"
	3. Значение "2010" присваевается переменной result
	4. С помощью console.log() выводим result в консоль
*/

let result_2 = 10 + "10" + 10;
console.log(result_2);
/*
	1. 10 преобразуется в строку и соединяется с "10" получается "1010"
	2. 10 преобразуется в строку и соединяется с "1010" получается "101010"
	3. Значение "101010" присваевается переменной result_2
	4. С помощью console.log() выводим result_2 в консоль
*/

let result_3 = 10 + 10 + +"10";
console.log(result_3);
/*
	1. "10" преобразуется в число и прибавляется к 10 получается 20
	2. 10 прибавляется к 20 получается 30
	3. Значение 30 присваевается переменной result_3
	4. С помощью console.log() выводим result_3 в консоль
*/

let result_4 = 10 / -"";
console.log(result_4);
/*
	1. -"" преобразуется в -0
	2. 10 делится на -0 получается -Infinity
	3. Значение -Infinity присваевается переменной result_4
	4. С помощью console.log() выводим result_4 в консоль
*/

let result_5 = 10 / +"2,5";
console.log(result_5);
/*
	1. -"2,5" преобразуется в NaN
	2. 10 делится на NaN получается NaN
	3. Значение NaN присваевается переменной result_5
	4. С помощью console.log() выводим result_5 в консоль
*/

// let mode = "normal"; // - Верно
// let my_valu3 = 102; // - Верно
// let 3my_value3 = "102"; // - Не верно
// let __hello__ = "world"; // - Верно
// let $$$ = "money"; // - Верно
// let!0_world = true; // - Не верно
