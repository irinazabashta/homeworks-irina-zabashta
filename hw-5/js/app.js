// 1. Создать две функции и дать им осмысленные названия:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) → “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются
// Подсказка: secondFunc должна быть представлена функцией, которая принимает один аргумент (каждый элемент массива) и возвращает результат его обработки

console.log('---------- 1 ----------');

var array1_1 = ['my', 'name', 'is', 'Trinity'];
var array1_2 = [10, 20, 30];
var array1_3 = [{age: 45, name: 'Jhon'}, {age: 20, name: 'Aaron'}];
var array1_4 = ['abc', '123'];

createValue(array1_1, doUppercase);
createValue(array1_2, multiplyByTen);
createValue(array1_3, writeUsersInfo);
createValue(array1_4, invertString);

function createValue(array, callback) {
    let string = '';
    array.forEach(function (currentElement) {
        string += callback(currentElement);
    });
    console.log('New value:', string);
}

function doUppercase(element) {
    return element[0].toUpperCase() + element.slice(1);
}

function multiplyByTen(element) {
    return element * 10 + ', ';
}

function writeUsersInfo(element) {
    return `${element.name} is ${element.age}, `
}

function invertString(element) {
    let string = '';
    for (let i = element.length - 1; i >= 0; i--) {
        string += element[i];
    }
    return string + ', '
}

// 2. Написать аналог метода every.
// Создайте функцию every, она должна принимать первым аргументом массив чисел (обязательно проверьте что передан массив) вторым аргументом callback
// функция должна возвращать true или false в зависимости от результата вызова callback (проверить число больше 5).
// Callback должен принимать один элемент массива, его индекс в массиве и весь массив.

console.log('---------- 2 ----------');

var array2 = [6, 7, 4, 10];

var isEveryMore = funcEvery (array2, checkNumber);

console.log('Are every numbers more than 5?', isEveryMore);

function funcEvery (array, callback) {
    if(Array.isArray(array) && array.length !== 0) {
        for (let i = 0; i < array.length; i++) {
            if (!callback(array[i], i, array)) {
                return false;
                break;
            }
        }
        return true;
    } else {
        return 'This is not array';
    }
}
function checkNumber(element, index, array) {
    return element > 5;
}

// 3. На основе массива [1,2,3,5,8,9,10] сформировать новый массив, каждый элемент которого будет хранить информацию о числе и его четности:
// [{digit: 1, odd: true}, {digit: 2, odd: false}, {digit: 3, odd: true}...]

console.log('---------- 3 ----------');

var array3 = [1, 2, 3, 5, 8, 9, 10];
var parityArray = [];

array3.forEach(function (currentElement) {
    let numberInfo = {digit: currentElement};
    if (currentElement % 2) {
        numberInfo.odd = false;
    } else {
        numberInfo.odd = true;
    }
    parityArray.push(numberInfo);
});

console.log('Information about number', parityArray);

// 4. Проверить, содержит ли массив [12, 4, 50, 1, 0, 18, 40] элементы, равные нулю. Если да - вернуть false.

console.log('---------- 4 ----------');

var array4 = [12, 4, 50, 1, 0, 18, 40];

let hasArrayZero = array4.some(function (currentElement) {
    return currentElement === 0;
});

console.log('Dose this array have zero?', hasArrayZero);

// 5. Проверить, содержит ли массив ['yes', 'hello', 'no', 'easycode', 'what'] хотя бы одно слово длиной больше 3х букв. Если да - вернуть true

console.log('---------- 5 ----------');

var array5 = ['yes', 'hello', 'no', 'easycode', 'what'];

let stringMoreThreeSymbols = array5.some(function (currentElement) {
    return currentElement.length > 3;
})

console.log('Have a word with more than three letters?', stringMoreThreeSymbols);

// 6. Дан массив объектов, где каждый объект содержит информацию о букве и месте её положения в строке {буква: “a”, позиция_в_предложении: 1}:
// [{char:"a",index:12}, {char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2},
// {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0},
// {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}]
// Напишите функцию, которая из элементов массива соберет и вернёт строку, основываясь на index каждой буквы. Например:
// [{char:"H",index:0}, {char:"i",index: 1}, {char:"!",index:2}] → “Hi!”
// Подсказка: вначале отсортируйте массив по index, затем используйте reduce() для построения строки

console.log('---------- 6 ----------');

var array6 = [{char:"a",index:12},{char:"w",index:8}, {char:"Y",index:10}, {char:"p",index:3}, {char:"p",index:2}, {char:"N",index:6}, {char:" ",index:5}, {char:"y",index:4}, {char:"r",index:13}, {char:"H",index:0}, {char:"e",index:11}, {char:"a",index:1}, {char:" ",index:9}, {char:"!",index:14}, {char:"e",index:7}];

var stringFromChar = createString(array6);

function createString(array) {
    let sortArray = array.sort(function (prev, next) {
        return prev['index'] - next['index'];
    });
    let string = sortArray.reduce(function (str, currentElement) {
        return str + currentElement['char'];
    }, '');
    return string;
}

console.log('Creating string from characters ->', stringFromChar);

// 7. Отсортируйте массив массивов так, чтобы вначале располагались наименьшие массивы (размер массива определяется его длиной):
// [ [14, 45], [1], ['a', 'c', 'd'] ] → [ [1], [14, 45], ['a', 'c', 'd'] ]

console.log('---------- 7 ----------');

var array7 = [ [14, 45], [1], ['a', 'c', 'd'] ];

var sortArrayByLenght = array7.sort(function (prev, next) {
    return prev.length - next.length;
});

console.log('Sort array by its length ->', sortArrayByLenght);

// 8. Есть массив объектов: Отсортировать их по возрастающему количеству ядер (cores).
// [
//  {cpu: 'intel', info: {cores:2, сache: 3}},
//  {cpu: 'intel', info: {cores:4, сache: 4}},
//  {cpu: 'amd', info: {cores:1, сache: 1}},
//  {cpu: 'intel', info: {cores:3, сache: 2}},
//  {cpu: 'amd', info: {cores:4, сache: 2}}
// ]

console.log('---------- 8 ----------');

var array8 = [
    {cpu: 'intel', info: {cores: 2, сache: 3}},
    {cpu: 'intel', info: {cores: 4, сache: 4}},
    {cpu: 'amd', info: {cores: 1, сache: 1}},
    {cpu: 'intel', info: {cores: 3, сache: 2}},
    {cpu: 'amd', info: {cores: 4, сache: 2}}
];

var sortArrayByCores = array8.sort(function (prev, next) {
    return prev['info']['cores'] - next['info']['cores'];
});

console.log('Sort array by cores ->', sortArrayByCores);

// 9. Создать функцию, которая будет принимать массив продуктов и две цены.
// Функция должна вернуть все продукты, цена которых находится в указанном диапазоне, и сортировать от дешевых к дорогим:
// let products = [
//  {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
//  {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
//  {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
//  {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
// ];
// filterCollection(products, 15, 30) → [{...price: 15}, {...price: 18.9}, {...price: 19}, {...price: 25}]

console.log('---------- 9 ----------');

let products = [
    {title: 'prod1', price: 5.2}, {title: 'prod2', price: 0.18},
    {title: 'prod3', price: 15}, {title: 'prod4', price: 25},
    {title: 'prod5', price: 18.9}, {title: 'prod6', price: 8},
    {title: 'prod7', price: 19}, {title: 'prod8', price: 63}
];
let minPrice = 15, maxPrice = 30;

var sortingProducts = sortProducts(products, minPrice, maxPrice);

console.log(`Sort products from cheap (${minPrice}) to expensive (${maxPrice}) ->`, sortingProducts);

function sortProducts(products, minPrice, maxPrice) {
    let array = products.filter(function (currentElement) {
        return currentElement.price >= minPrice && currentElement.price <= maxPrice;
    });
    let sortArray = array.sort(function (prev, next) {
        return prev.price - next.price;
    });
    return sortArray;
}