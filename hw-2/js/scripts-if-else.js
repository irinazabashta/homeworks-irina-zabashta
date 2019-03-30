// 1. Если переменная равна “hidden”, присвоить ей значение “visible”, иначе - “hidden”.

var visibility = 'hidden';
if(visibility === 'hidden' ) {
    visibility = 'visible';
} else {
    visible = 'hidden';
}
console.log('---------- 1 ----------');
console.log('type is: ' + visibility);

// 2. Используя if, записать условие:
    // a. если переменная равна нулю, присвоить ей 1;
    // b. если меньше нуля - строку “less then zero”;
    // c. если больше нуля - используя оператор “присвоение”, переменную умножить на 10 (использовать краткую запись)

var x;
if (x === 0) {
    x = 1;
} else if (x < 0) {
    x = 'less then zero';
} else if (x > 0) {
    x *= 10;
}
console.log('---------- 2 ----------');
console.log('variable is: ' + x);

// 3. Дан объект let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false }.
// Написать условие если возраст машины больше 5 лет то нужно вывести в консоль сообщение 'Need
// Repair' и свойство needRepair в объекте car изменить на true; иначе изменить на false.

console.log('---------- 3 ----------');
let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
let yearRepair = 5;
if (car.age > yearRepair) {
    console.log('Need Repair');
    car.needRepair = true;
} else {
    car.needRepair = false;
}
console.log(car);

// 4. Дан объект let item = { name: 'Intel core i7', price: '100$', discount: '15%' }.
// Написать условие если у item есть поле discount и там есть значение то в объекте item создать
// поле priceWithDiscount и записать туда цену с учетом скидки и вывести ее в консоль, обратите
// внимание что поля discount и price это строки и вам из них нужно получить числа чтобы выполнить
// расчет. иначе если поля discount нет то вывести просто поле price в консоль.

console.log('---------- 4 ----------');
let item = { name: 'Intel core i7', price: '100$', discount: '15%' };
// (item.discount) - полностью покрывает все проверки Because according to task we should check if property exist and it's not empty(mean not null, undefined, 0, "" Everything that would give false)
if /*('discount' in item && parseFloat(item.discount))*/ (item.discount) {
    let itemPrice = parseFloat(item.price), itemDiscount = parseFloat(item.discount;
    item.priceWithDiscount = itemPrice - itemPrice * itemDiscount / 100 + '$';
    console.log('price with discount -> ' + item.priceWithDiscount);
} else if (!('discount' in item) || !parseFloat(item.discount) || parseFloat(item.discount) === 0) {
    console.log('price without discount -> ' + item.price);
}
console.log(item);

// 5. Дан следующий код:
console.log('---------- 5 ----------');
let product = {
    name: 'Яблоко',
    price: '10$'
};
let min = 10; // минимальная цена
let max = 20; // максимальная цена
let productPrice = parseFloat(product.price);
if (productPrice >= min && productPrice <= max) {
    console.log('product is ' + product.name);
} else {
    console.log('product not found');
}