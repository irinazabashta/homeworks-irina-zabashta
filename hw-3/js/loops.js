// 1. На основе строки “i am in the easycode” сделать новую строку где первые буквы каждого слова будут в верхнем регистре. Использовать for или while.

console.log('---------- 1 ----------');
var string1 = 'i am in the easy code', stringResult1 = '';
string1 = string1.trim();
var stringLength1 = string1.length;

stringResult1 += string1[0].toUpperCase();
for (let i = 1; i < stringLength1; i++) {
    stringResult1 += string1[i];
    if (string1[i] === ' ' && string1[i + 1] !== ' ') {
        stringResult1 += string1[i + 1].toUpperCase();
        i++;
    }
}
console.log('Old string is ->', string1);
console.log('New string is ->', stringResult1);

// var stringArray = string1.split(' '); - разбиваем строку на массив по сепаратору(разделителю) пробел
// for (let i = 0; i < stringArray.length; i++){
//    stringArray[i] = stringArray[i][0].toUpperCase() + stringArray[i].slice(1); - затем увеличиваем в каждом слове первый символ, и дописываем оставшуюся строку
//}
//stringResult1 = stringArray.join(' '); - собираем строку с разделителем пробел

// 2. Дана строка “tseb eht ma i”. Используя циклы, сделать строку-перевертыш (то есть последняя буква становится первой, предпоследняя - второй итд).

console.log('---------- 2 ----------');
let string2 = 'tseb eht ma i', stringResult2 = '', char = '';
let stringLength2 = string2.length;

for (let i = stringLength2 - 1; i >= 0; i--) {
    stringResult2 += string2[i];
}

console.log('Old string is ->', string2);
console.log('New string is ->', stringResult2);

// 3. Факториал числа - произведение всех натуральных чисел от 1 до n
// включительно: 3! = 3*2*1, 5! = 5*4*3*2*1. С помощью циклов вычислить факториал числа 10.
// Использовать for.

console.log('---------- 3 ----------');
let n = 10, factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log('Factorial from 1 to', n, 'is', factorial);

// 4. На основе строки “JavaScript is a pretty good language” сделать новую строку, где каждое слово начинается с большой буквы, а пробелы удалены. Использовать for.

console.log('---------- 4 ----------');
let string4 = 'JavaScript is a pretty good language', stringResult4 ='';
let stringLength4 = string4.length;

stringResult4 = string4[0].toUpperCase();
for (let i = 1; i< stringLength4; i++) {
    if (string4[i] !== ' ') {
        stringResult4 += string4[i];
    }
    if (string4[i] === ' ' && string4[i + 1] !== ' ') {
        stringResult4 += string4[i + 1].toUpperCase();
        i++;
    }
}

console.log('Old string is ->', string4);
console.log('New string is ->', stringResult4);

// 5. Найти все нечетные числа в массиве от 1 до 15 включительно и вывести их в консоль. Массив [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] Использовать for of.

console.log('---------- 5 ----------');
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], oddArray = [], i = 0;

for (let value of array) {
    if (value%2) {
        console.log(value);
        oddArray[i] = value;
        i++;
    }
}

console.log('Array is ----->', array);
console.log('Odd array is ->', oddArray);

// 6. Дан объект:
// let list = {
//  name: ‘denis’,
//  work: ‘easycode’,
//  age: 29
// }
// Перебрать объект и если значение в свойстве это строка то переписать ее всю в верхнем регистре. Использовать for in.

console.log('---------- 6 ----------');
let list = {
    name: 'denis',
    work: 'easycode',
    age: 29
};

for (let key in list) {
    if (typeof list[key] === 'string') {
        list[key] = list[key].toUpperCase();
    }
}

console.log(list);