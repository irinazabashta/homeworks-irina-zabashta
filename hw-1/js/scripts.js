let string = 'some test string';
console.log('test string - ' + string);

// 1. Получить первую и последнюю буквы строки

let stringLenght = string.length;
let firstLetter = string[0];
let lastLetter = string[stringLenght - 1];
console.log('---------- 1 ----------');
console.log('first letter: ' + firstLetter);
console.log('last letter: ' + lastLetter);

// 2. Сделать первую и последнюю буквы в верхнем регистре

let firstLetterUpper = firstLetter.toLocaleUpperCase();
let lastLetterUpper = lastLetter.toLocaleUpperCase();
let stringLetterUpper = firstLetterUpper + string.slice(1, stringLenght) + lastLetterUpper;
console.log('---------- 2 ----------');
console.log('first letter to upper case: ' + firstLetterUpper);
console.log('last letter to upper case: ' + lastLetterUpper);
console.log('string with upper case letters: ' + stringLetterUpper);

// 3. Найти положение слова ‘string’ в строке

let substring1 = 'string';
let indexSubstring = string.indexOf(substring1);
console.log('---------- 3 ----------');
console.log('index of substring \'string\': ' + indexSubstring);

// 4. Найти положение второго пробела (“вручную” ничего не считать)

let indexSecondSpace = string.lastIndexOf(' ');
console.log('---------- 4 ----------');
console.log('index of second space: ' + indexSecondSpace);

// 5. Получить строку с 5-го символа длиной 4 буквы

let substring2 = string.substr(5,4);
console.log('---------- 5 ----------');
console.log('substring from 5 index with 4 letters lenght: ' + substring2);

// 6. Получить строку с 5-го по 9-й символы

let substring3 = string.slice(5, 10);
console.log('---------- 6 ----------');
console.log('substring from 5 index to 9 index: ' + substring3);

// 7. Получить новую строку из исходной путем удаления последних 6-и символов (то есть исходная строка без последних 6и символов)

let substring4 = string.slice(0, -6);
console.log('---------- 7 ----------');
console.log('substring without last 6 letters: ' + substring4);

// 8. Из двух переменных a=20 и b=16 получить переменную string, в которой будет содержаться текст “2016”

let a = 20, b = 16;
let c = `${a}${b}`;
let typeSymbol = typeof(c);
console.log('---------- 8 ----------');
console.log(typeSymbol + ' 2016: ' + c);

// 1. Получить число pi из Math и округлить его до 2-х знаков после точки

const PI = Math.round(Math.PI * 100) / 100;
console.log('---------- 1 ----------');
console.log('PI: ' + PI);

// 2. Используя Math, найти максимальное и минимальное числа из представленного ряда 15, 11, 16, 12, 51, 12, 13, 51

let min = Math.min(15, 11, 16, 12, 51, 12, 13, 51);
let max = Math.max(15, 11, 16, 12, 51, 12, 13, 51);
console.log('---------- 2 ----------');
console.log('Array: 15, 11, 16, 12, 51, 12, 13, 51');
console.log('min: ' + min);
console.log('max: ' + max);

// 3. Работа с Math.random:
    // a. Получить случайное число и округлить его до двух цифр после запятой
    // b. Получить случайное целое число от 0 до X. X - любое произвольное число.

let randomNumber1 =  Math.round(Math.random() *100) / 100;
let x = 10;
let randomNumber2 = Math.round(Math.random() * x) + 0;
console.log('---------- 3 ----------');
console.log('random number A: ' + randomNumber1);
console.log('random number B from 0 to ' + x + ': ' + randomNumber2);

// 4. Проверить результат вычисления 0.6 + 0.7 - как привести к нормальному виду (1.3)?

let d = 0.6, e = 0.7;
console.log('---------- 4 ----------');
console.log('результат вычисления 0.6 + 0.7 = ' + Math.round((d + e) * 100) / 100);

// 5. Получить число из строки ‘100$’

let price = '100$';
let priceNumber = parseInt(price);
let typePrice = typeof(priceNumber);
console.log('---------- 5 ----------');
console.log(typePrice + ' from string 100$ is ' + priceNumber);