// 1. Реализовать конструктор в ES6 синтаксисе (также используйте аргументы по умолчанию):
// function Component(tagName) {
//     this.tagName = tagName || 'div';
//     this.node = document.createElement(tagName);
// }
// Пример вызова:
//     const comp = new Component('span');

console.log('---------- 1.1 ----------');

class Component1 {
    constructor (tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
    }
}
const comp1 = new Component1();

console.log(comp1);

// 2. Реализовать конструктор и методы в ES6 синтаксисе:
//     function Component(tagName) {
//         this.tagName = tagName || 'div';
//         this.node = document.createElement(tagName);
//     }
// Component.prototype.setText = function (text) {
//     this.node.textContent = text;
// };

console.log('---------- 1.2 ----------');

class Component2 {
    constructor (tagName = 'div') {
        this.tagName = tagName;
        this.node = document.createElement(tagName);
        this.text;
    }
    setText(text){
        return this.text = this.node.textContent = text;
    }
}

const comp2 = new Component2('strong');
comp2.setText('some text');

console.log(comp2);


// 3. Создать класс калькулятора который будет принимать стартовое значение и у него будут методы сложить, вычесть, умножить , разделить.
// Также у него должны быть геттер и сеттер для получения и установки текущего числа с которым производятся вычисления.

console.log('---------- 1.3 ----------');

class Calc {
    constructor(initialValue = 0) {
        this.val = initialValue;
    }
    get value() {
        return this.val;
    }
    set value(newValue) {
        if (typeof newValue !== 'number') return console.log('It is not a number');
        this.val = newValue;
    }
    addValue(val) {
        this.val += val;
        return this;
    }
    subtractValue(val) {
        this.val -= val;
        return this;
    }
    multiplyValue(val) {
        this.val *= val;
        return this;
    }
    divideValue(val) {
        this.val /= val;
        return this;
    }
}

const value = new Calc(3).addValue(9).multiplyValue(2).divideValue(3).subtractValue(6);
console.log(value);

// Получить пользователей (users) от сервера https://jsonplaceholder.typicode.com используя класс созданный на занятии.
// Получив ответ от сервера вывести имена пользователей на страницу.
// При клике на имя пользователя в произвольном месте должна появиться подробная информация о нем.
// Для визуальной части можно использовать bootstrap или другие фреймворки.

console.log('---------- 2.1 ----------');

const url = 'https://jsonplaceholder.typicode.com';

//xhr.open('GET', `${url}/users`);

class CustomHttp {
    get(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.addEventListener('load', () => callback(JSON.parse(xhr.responseText)));
    }
}
class Users {
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.http = new CustomHttp();
        this.infoElement = document.createElement('div');
        document.body.append(this.infoElement);
        this.users = [];
    }
    setClassName(className = "selected") {
        this.element.classList.add(className);
        return this;
    }
    getUsersFragment(list) {
        const usersFragment = document.createDocumentFragment();
        list.forEach(user => {
            const pEl = document.createElement("li");
            pEl.classList.add('list-group-item');
            pEl.classList.add('list-group-item-action');
            pEl.innerHTML = `<b>Name:</b> ${user.name}`;
            pEl.addEventListener('click', () => this.handleClick(user.id));
            usersFragment.appendChild(pEl);
        });
        return usersFragment;
    }
    setUsers(list) {
        const fragment = this.getUsersFragment(list);
        this.element.append(fragment);
        return this;
    }
    getInfoTemplate = (user) => `<div class="alert alert-info alert-dismissible"><button type="button" class="close" data-dismiss="alert">&times;</button><p>${JSON.stringify(user)}</p></div>`;
    clearInfoContainer() {
        this.infoElement.removeAttribute('data-id');
    }
    handleClick = (id) => {
        if (this.infoElement.dataset.id === id.toString()) {
            this.clearInfoContainer();
            return;
        }
        const userById = this.users.find(u => u.id === id);
        if (userById) {
            this.infoElement.innerHTML = this.getInfoTemplate(userById);
            this.infoElement.setAttribute('data-id', id);
        }
    }
    handleResponse = (users) => {
        this.element.innerHTML = '';
        this.users = users;
        this.setUsers(users);
        this.element.classList = 'list-group';
    }
    getUsers() {
        this.clearInfoContainer();
        this.http.get('https://jsonplaceholder.typicode.com/users', this.handleResponse);
    }
}
const usersList = new Users("#users-list");

usersList.setClassName('spinner-border').getUsers();
