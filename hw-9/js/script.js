// 1. Используя rest оператор и деструктуризацию, создать функцию, которая принимает любое количество аргументов и возвращает объект,
//     содержащий первый аргумент и массив из остатка:
//     func(‘a’, ‘b’, ‘c’, ‘d’) →
// {
//     first: ‘a’,
//     other: [‘b’, ‘c’, ‘d’]
// }

console.log('---------- 1.1 ----------');
const someObject = getObject('a', 'b', 'c', 'd', 1, 2, 3);

function getObject(first, ...rest) {
    return {
        first,
        rest
    };
}

console.log(someObject);

// 2. Организовать функцию getInfo, которая принимает объект вида { name: ..., info: { employees: [...], partners: [ … ] } }
// и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:
// const organisation = {
//         name: 'Google',
//         info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }
// };
// getInfo(organisation); → Name: Google
// Partners: Microsoft Facebook

console.log('---------- 1.2 ----------');
const organisation = {
    name: 'Google',
    info: {
        employees: ['Vlad', 'Olga'],
        partners: ['Microsoft', 'Facebook', 'Xing']
    }
};

getInfo(organisation);

function getInfo(organisation) {
    const {
        name = 'Unknown',
        info: {
            partners: [company1, company2]
        }
    } = organisation;
    console.log(`Name: ${name}`);
    console.log(`Partners: ${company1}, ${company2}`);
}

// 1. Переделать функцию с использованием функции-стрелки (в методе reduce тоже использовать arrow function):
// function sum() {
//     const params = Array.prototype.slice.call(arguments);
//     if (!params.length) return 0;
//     return params.reduce(function (prev, next) { return prev + next; });
// }
// sum(1, 2, 3, 4); // 10
// sum(); // 0

console.log('---------- 2.1 ----------');

/*const getSum = (...props) => {
    if (!props.length) return 0;
    return props.reduce((prev, next) => prev + next);
};*/

const getSum = (...props) => props.length ? props.reduce((prev, next) => prev + next) : 0;

const sum = getSum(1, 2, 3, 4);
console.log(`Sum is ${sum}`);

// 1. Создать объект, который описывает ширину и высоту прямоугольника, а также может посчитать площадь фигуры:
//     const rectangle = {width:..., height:..., getSquare:...};

console.log('---------- 3.1 ----------');

const rectangle = {
    width: 10,
    height: 20,
    getSquare: function () {
        return this.width * this.height;
    }
};
console.log(`Rectangle -> width: ${rectangle.width}, height: ${rectangle.height}, square: ${rectangle.getSquare()}`);

// 2. Создать объект, у которого будет цена товара и его скидка, а также два метода: для получения цены и для расчета цены с учетом скидки:
//     const price = {
//         price: 10,
//         discount: '15%',
//         ... };
// price.getPrice(); // 10
// price.getPriceWithDiscount(); // 8.5

console.log('---------- 3.2 ----------');

const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {
        return this.price;
    },
    getPriceWithDiscount: function () {
        return this.price - this.price * parseInt(this.discount) / 100;
    }
};
console.log(`Price is ${price.getPrice()}, price with discount is ${price.getPriceWithDiscount()}`);

// 3. Создать объект, у которого будет поле высота и метод “увеличить высоту на один”. Метод должен возвращать новую высоту:
// object.height = 10;
// object.inc(); // придумать свое название для метода
// object.height; // 11;

console.log('---------- 3.3 ----------');

const elementHeight = {
    height: 21,
    increaseByOne: function () {
        this.height++;
    }
};
console.log(`Old height is ${elementHeight.height}`);
elementHeight.increaseByOne();
console.log(`New height is ${elementHeight.height}`);

// 4. Создать объект “вычислитель”, у которого есть числовое свойство “значение” и методы “удвоить”, “прибавить один”, “отнять один”.
// Методы можно вызывать через точку, образуя цепочку методов:
// const numerator = {
//     value: 1,
//     double: function () {...},
//     plusOne: function () {...},
//     minusOne: function () {...},
// }
// numerator.double().plusOne().plusOne().minusOne();
// numerator.value // 3

console.log('---------- 3.4 ----------');

const numerator = {
    value: 1,
    double: function () {
        this.value *= 2;
        return this;
    },
    plusOne: function () {
        this.value++;
        return this;
    },
    minusOne: function () {
        this.value--;
        return this;
    },
};
numerator.double().plusOne().plusOne().minusOne();
console.log(`Value after calculation is ${numerator.value}`);

// 1. Создать объект с розничной ценой и количеством продуктов. Этот объект должен содержать метод для получения общей стоимости всех товаров (цена * количество продуктов)
// 2. Создать объект из предыдущей задачи. Создать второй объект, который описывает количество деталей и цену за одну деталь.
// Для второго объекта нужно узнать общую стоимость всех деталей, но нельзя создавать новые функции и методы. Для этого “позаимствуйте” метод из предыдущего объекта.

console.log('---------- 4.2 ----------');

const product = {
    price: 10,
    quantity: 5,
    getTotalPrice: function () {
        return this.price * this.quantity;
    }
};
const detail = {
    price: 2,
    quantity: 10
};

const detailTotalPrice = product.getTotalPrice.apply(detail);
console.log(`Total detail price is ${detailTotalPrice}`);

// 3. Даны объект и функция:
//     let sizes = {width: 5, height: 10},
//         getSquare = function () {return this.width * this.height};
// Не изменяя функцию или объект, получить результат функции getSquare для объекта sizes

console.log('---------- 4.3 ----------');

let sizes = {width: 5, height: 10},
    getSquare = function () {return this.width * this.height};

const square = getSquare.apply(sizes);
console.log(`Square is ${square}`);

// 4.
// let element = {
//     height: 25,
//     getHeight: function () {return this.height;}
// };
// let getElementHeight = element.getHeight;
// getElementHeight(); // undefined
// Измените функцию getElementHeight таким образом, чтобы можно было вызвать getElementHeight() и получить 25.

console.log('---------- 4.4 ----------');

let element = {
    height: 25,
    getHeight: function () {return this.height;}
};

let getElementHeight =  obj => element.getHeight.call(obj);
const elHeight = getElementHeight(element);

console.log(`Element height is ${elHeight}`);