// 1. Найти в коде список ul и добавить класс “list”

const elementUl = document.querySelector('ul');
elementUl.setAttribute('class', 'list');

// 2. Найти в коде ссылку, находящуюся после списка ul, и добавить id=link

const linkAfterUl = document.querySelectorAll('ul ~ a');
linkAfterUl.id = 'link';

// 3. На li через один (начиная с самого первого) установить класс “item”

const listUl = elementUl.children;
Array.prototype.forEach.call(listUl, (element, index) => {
    if(index%2 === 0) element.setAttribute('class', 'item');
});

// 4. На все ссылки в примере установить класс “custom-link”

const links = document.links;
Array.prototype.forEach.call(links, element => element.setAttribute('class', 'custom-link'));