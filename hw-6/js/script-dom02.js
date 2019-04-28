// 1. Создать функцию, которая принимает два элемента. Функция проверяет, является ли первый элемент родителем для второго:
// isParent(parent, child);

// isParent(document.body.children[0], document.querySelector('mark'));
// true так как первый див является родительским элементом для mark

// isParent(document.querySelector('ul'), document.querySelector('mark'));
// false так ul НЕ является родительским элементом для mark

console.log('---------- 1 ----------');
console.log(isParent(document.body.children[0], document.querySelector('mark')));
console.log(isParent(document.querySelector('ul'), document.querySelector('mark')));

function isParent(parent, child) {
    if(parent.contains(child)) {
        return true;
    } else {
        return false;
    }
}

// 2. Получить список всех ссылок, которые не находятся внутри списка ul
console.log('---------- 2 ----------');
const links = document.links;
for(let link of links) {
    if(!link.closest('ul')) {
        console.log(link);
    }
}

// 3. Найти элемент, который находится перед и после списка ul
console.log('---------- 3 ----------');
const ul = document.querySelector('ul');
const prevElementUl = ul.previousElementSibling;
const nextElementUl = ul.nextElementSibling;
console.log(prevElementUl);
console.log(nextElementUl);

// 4. Посчитать количество элементов li в списке
console.log('---------- 4 ----------');
const countLi = document.querySelectorAll('ul li').length;
console.log(countLi);
