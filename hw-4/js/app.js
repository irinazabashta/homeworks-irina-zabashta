// 1. Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)
// Если нет ни одного аргумента, вернуть ноль: multiply() // 0

console.log('---------- 1 ----------');
var numbers = prompt("1. Please enter numbers separated by spaces:", "");
var arrayMultiply = numbers.split(' ');
var lengthArrayMultiply = arrayMultiply.length;

for (let i = 0; i < lengthArrayMultiply; i++){
    if(arrayMultiply[i] === '') {
        arrayMultiply.splice(i, 1);
        lengthArrayMultiply--;
        i--;
    }
}

var resultMultiply = multiply(arrayMultiply);

console.log('Multiplication numbers are ->', arrayMultiply);
console.log('Multiplication result is ->', resultMultiply);

function multiply(array) {
    if (array.length !== 0) {
        let result = 1;
        for(let i = 0; i < array.length; i++) {
            result *= array[i];
        }
        return result;
    } else {
        return 0;
    }
};

// 2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

console.log('---------- 2 ----------');
var string2 = prompt("2. Please enter string:", "");
var stringResult2 = reverseString(string2);

console.log('Old string is ->', string2);
console.log('New string is ->', stringResult2);

function reverseString(string) {
    let stringResult = '';
    for (let i = string.length - 1; i >= 0; i--) {
        stringResult += string[i];
    }
    return stringResult;
}

// 3. Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, где каждый символ разделен пробелом и заменен на юникод-значение символа:
// getCodeStringFromText(‘hello’) // “104 101 108 108 111”

console.log('---------- 3 ----------');
var string3 = prompt("3. Please enter string:", "");
var stringResult3 = getCodeStringFromText(string3);

console.log('Old string is ->', string3);
console.log('New string is ->', stringResult3);

function getCodeStringFromText(string) {
    let stringResult = '';
    for(let i = 0; i < string.length; i++) {
        stringResult += string.charCodeAt(i) + ' ';
    }
    return stringResult;
}

// 4. Создать функцию угадай число. Она принимает число от 1-10 (обязательно проверить что число не больше 10 и не меньше 0).
// Генерирует рандомное число от 1-10 и сравнивает с переданным числом если они совпали то возвращает “Вы выиграли” если нет то “Вы не угадали
// ваше число 8 а выпало число 5”. Числа в строке указаны как пример вы подставляете реальные числа.

console.log('---------- 4 ----------');
var number4 = prompt("4. Please enter number from 1 to 10:", "");
guessNumber(number4);

function guessNumber(number) {
    let min = 1, max = 10;
    let randomNumber = Math.round(Math.random() * (max - min)) + min;
    if(number >= min && number <= max) {
        if(randomNumber === +number) {
            console.log('You win !!!');
            console.log('Your number ->', number, 'Random number ->', randomNumber);
        } else {
            console.log('You lose !!!');
            console.log('Your number ->', number, 'Random number ->', randomNumber);
        }
    } else {
        console.log('You enter wrong number');
    }
}

// 5. Создать функцию, которая принимает число n и возвращает массив, заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

console.log('---------- 5 ----------');
var number5 = prompt("5. Please enter number:", "");
var array5 = getArray(number5);

console.log('Your number ->', number5);
console.log('Array ->', array5);

function getArray(number) {
    let array = [];
    for(let i = 0; i < +number; i++) {
        array[i] = i + 1;
    }
    return array;
}

// 6. Создать функцию, которая принимает массив, а возвращает новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]

console.log('---------- 6 ----------');
var array6 = [1, 2, 3, 4, 5];
var arrayResult6 = doubleArray(array6);

console.log('Your array ->', array6);
console.log('Double array ->', arrayResult6);

function doubleArray(array) {
    let arrayResult = array.concat(array);
    return arrayResult;
}

// 7. Создать функцию, которая принимает произвольное (любое) число массивов и удаляет из каждого массива первый элемент, а возвращает массив из оставшихся значений:
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’]) → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

console.log('---------- 7 ----------');
var array71 = [1, 2, 3, 4, 5], array72 = ['a', 'b', 'c'];
var arrayResult7 = changeCollection(array71, array72);

console.log('Array without first element ->', arrayResult7);

// function changeCollection(...arrayCollection)
function changeCollection() {
    let result = [];
    // for(let i = 0; i < arrayCollection.length; i++)
    for(let i = 0; i < arguments.length; i++){
        arguments[i].splice(0, 1);
        result[i] = arguments[i];

        // result.push(arguments[i].slice(1));
        // or
        // result.push(arrayCollection[i].slice(1));
    }
    return result;
}

let sumArray = [1,2,3,4,5];
function sum() {

}
sum(...sumArray); // sum(1,2,3,4,5)

let user = {
    name: 'name',
    age: 23
};
let additionalInfo = {
    country: 'Ukrain',
    city: 'Kiev'
};
let improvedUser = {
    ...user,
    ...additionalInfo
};

// 8. Создать функцию которая принимает массив пользователей, поле на которое хочу проверить и значение на которое хочу проверять. Проверять что все аргументы переданы. Возвращать новый массив с пользователями соответсвующие указанным параметрам.
// funcGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

console.log('---------- 8 ----------');
var users = [
    {name: 'Denis', age: 29, gender: 'male'},
    {name: 'Ivan', age: 20, gender: 'male'},
    {name: 'Sveta', age: 20, gender: 'female'},
    {name: 'Sasha', age: 20, gender: 'male'},
    {name: 'Katya', age: 20, gender: 'female'},
    {name: 'Ivan', age: 20, gender: 'male1'}
];
var argument = 'gender';
var userGender = 'male';
var usersResult = [];

usersResult = funcGetUsers(users, argument, userGender);
console.log('Users with gender - male', usersResult);

/*function funcGetUsers(users, argument, userGender) {
    let controlLenght = 3;
    let j = 0, arrayUsers = [];
    if(arguments.length === controlLenght) {
        for(let i = 0; i < users.length; i++) {
            for(let key in users[i]) {
                if(key === argument && users[i][argument] === userGender) {
                    arrayUsers[j] = users[i];
                    j++;
                }
            }
        }
        return arrayUsers;
    } else {
        console.log('Something wrong with arguments');
    }
}*/

function funcGetUsers(users, propName, propValue) {
    let filteredUsers = [];

    for (let i = 0; i < users.length; i++) {
        if (users[i][propName] === propValue) {
            filteredUsers.push(users[i]);
        }
    }
    return filteredUsers;
}