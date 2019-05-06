// 1. Не используя innerHTML, добавить в список несколько li с классом ‘new-item’ и текстом ‘item’ + номер li:

let elementUl = document.querySelector('ul');
let elementUlLength = elementUl.children.length;
const elementLiNewCount = 4;
const fragmentForUl = document.createDocumentFragment();

for (let i = 0; i < elementLiNewCount; i++) {
    const elementNewLi = document.createElement('li');
    elementNewLi.classList.add('new-item');
    elementNewLi.innerText = `Item ${elementUlLength + i + 1}`;

    fragmentForUl.appendChild(elementNewLi);
}

elementUl.appendChild(fragmentForUl);

// 2. В каждую ссылку, которая находятся внутри списка ul добавить по тегу strong (в каждую ссылку один - strong).

let elementUlLinks = document.querySelectorAll('ul a');

Array.prototype.forEach.call(elementUlLinks, element => {
    element.innerHTML = `<strong>${element.innerText}</strong>`;
});

// 3. В начало документа (в начало body) добавить картинку img с атрибутами src и alt (текст придумайте сами).
// В src добавьте реальный url к картинке. Для создания элемента используйте метод createElement.

const elementBody = document.body;
const elementImage = document.createElement('img');
elementImage.src = 'https://www.lifewithcats.tv/wp-content/uploads/2017/03/cat-and-coffee.jpg';
elementImage.alt = 'Cat and Coffee';
elementBody.insertBefore(elementImage, elementBody.firstChild);

// 4. Найти на странице элемент mark, добавить в конец содержимого текст “green” и на элемент установить класс green

let elementMark = document.querySelector('mark');

elementMark.innerText += ' green';
elementMark.classList.add('green');

// 5. Отсортировать li внутри списка в обратном порядке (по тексту внутри)
