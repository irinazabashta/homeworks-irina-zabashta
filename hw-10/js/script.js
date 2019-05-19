// 1. Создайте функцию которая бы умела делать:
// minus(10)(6); // 4
// minus(5)(6); // -1
// minus(10)(); // 10
// minus()(6); // -6
// minus()(); // 0
// Подсказка, функция minus должна возвращать другую функцию.

console.log('---------- 1.1 ----------');

function minus(x = 0) {
    return function (y = 0) {
        return x - y;
    }
}

console.log(minus()());

// 2. Реализовать функцию, которая умножает и умеет запоминать возвращаемый результат между вызовами:
// function multiplyMaker ...
// const multiply = multiplyMaker(2);
// multiply(2); // 4 (2 * 2)
// multiply(1); // 4 (4 * 1)
// multiply(3); // 12 (4 * 3)
// multiply(10); // 120 (12 * 10)

console.log('---------- 1.2 ----------');

function multiplyMaker(multiplierFirst = 1) {
    let result = multiplierFirst;
    return function (multiplierSecond = 1) {
        result *= multiplierSecond;
        return result;
    }
}

const multiply = multiplyMaker(2);
console.log(multiply(2));
console.log(multiply(1));
console.log(multiply(3));
console.log(multiply(10));

// 3. Реализовать модуль, который работает со строкой и имеет методы:
// a. установить строку
//  i. если передано пустое значение, то установить пустую строку
//  ii. если передано число, число привести к строке
// b. получить строку
// c. получить длину строки
// d. получить строку-перевертыш
// Пример:
// модуль.установитьСтроку(‘abcde’);
// модуль.получитьСтроку(); // ‘abcde’
// модуль.получитьДлину(); // 5

console.log('---------- 1.3 ----------');

const stringModule = (function () {
    let str;
    function setString(string = '') {
        str = typeof string === 'number' ? String(string) : string;
        return str;
    }
    function getString() {
        return str;
    }
    function getLengthString() {
        return str.length;
    }
    function getFlipString() {
        let flip = '';
        for (let i = str.length - 1; i >= 0; i--) {
            flip += str[i];
        }
        return flip;
    }

    return {
        setString,
        getString,
        getLengthString,
        getFlipString
    }
})();

console.log(stringModule.setString(12345));
console.log(stringModule.getString());
console.log(stringModule.getLengthString());
console.log(stringModule.getFlipString());

// 4. Создайте модуль “калькулятор”, который умеет складывать, умножать, вычитать, делить и возводить в степень.
// Конечное значение округлить до двух знаков после точки (значение должно храниться в обычной переменной, не в this).
// модуль.установитьЗначение(10); // значение = 10
// модуль.прибавить(5); // значение += 5
// модуль.умножить(2); // значение *= 2
// модуль.узнатьЗначение(); // вывести в консоль 30 (здесь надо округлить)
// Также можно вызывать методы цепочкой: модуль.установитьЗначение(10).вСтепень(2).узнатьЗначение(); // 100

console.log('---------- 1.4 ----------');

const calcModule = (function () {
    let x;
    function setValue(val = 0) {
        x = typeof val === 'number' ? val : 'Передайте число';
        return this;
    }
    function addValue(val) {
        x += val;
        return this;
    }
    function multiplyValue(val) {
        x *= val;
        return this;
    }
    function subtractValue(val) {
        x -= val;
        return this;
    }
    function divideValue(val) {
        x /= val;
        return this;
    }
    function involuteValue(val) {
        x = Math.pow(x, val);
        return this;
    }
    function getValue() {
        x = +x.toFixed(2);
        return x;
    }

    return {
        setValue,
        addValue,
        multiplyValue,
        subtractValue,
        divideValue,
        involuteValue,
        getValue
    }
})();

console.log(calcModule.setValue(2).addValue(5).multiplyValue(2).subtractValue(4).divideValue(2).involuteValue(3).getValue());

// Создать конструктор для производства автомобилей. Конструктор должен принимать марку автомобиля и возраст машины.
// Конструктор должен иметь метод, который возвращает марку, и второй метод, который возвращает год производства машины (год текущий минус возраст
// машины, использовать Date для получения текущего года)
// var lexus = new Car(‘lexus’, 2);
// lexus.получитьМарку(); // “Lexus”
// lexus.получитьГодВыпуска(); // 2017 (2019-2);
// Марка машины всегда должна возвращаться с большой буквы!

console.log('---------- 2.1 ----------');

function Car(brand, age) {
    const date = new Date();
    this.getBrand = function () {
        brand = brand[0].toUpperCase() + brand.slice(1, brand.length);
        return brand;
    };
    this.getProductionYear = function () {
        let year = date.getFullYear() - age;
        return year;
    }
}

let lexus = new Car('lexus', 2);
console.log(`${lexus.getBrand()}, ${lexus.getProductionYear()}`);

//     2. Написать конструктор, который умеет элементарно шифровать строки
// (например, сделать из строки строку-перевертыш, или заменить все символы их цифровым представлением, или любой другой метод).
// Конструктор при инициализации получает строку и имеет следующие методы:
// a. показать оригинальную строку
// b. показать зашифрованную строку
// Строки не должны быть доступны через this, только с помощью методов.

console.log('---------- 2.2 ----------');

function Cipher(str) {
    this.getString = function () {
        return str;
    };
    this.cipherString = function () {
        let flip = '';
        for (let i = str.length - 1; i >= 0; i--) {
            flip += str[i];
        }
        return flip;
    }
}

const string = new Cipher('abcdefg');
console.log(string.getString());
console.log(string.cipherString());

