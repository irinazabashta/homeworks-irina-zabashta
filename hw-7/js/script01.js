// 1. Найти параграф и получить его текстовое содержимое (только текст!)
console.log('---------- 1 ----------');

const pElement = document.querySelector('p');
const pElementText = pElement.textContent;

console.log(pElementText);

// 2. Создать функцию, которая принимает в качестве аргумента узел DOM и возвращает информацию
// (в виде объекта) о типе узла, об имени узла и о количестве дочерних узлов (если детей нет - 0).
console.log('---------- 2 ----------');

const domElemnt = document.querySelector('div');

function domElementInformation(element) {
    const elementType = element.nodeType;
    const elementName = element.nodeName;
    let elementChildrenCount = 0;

    if(element.hasChildNodes()) {
        elementChildrenCount = element.children.length;
    }

    return {
        elementType,
        elementName,
        elementChildrenCount
    }
}

console.log(domElementInformation(domElemnt));

// 3. Получить массив, который состоит из текстового содержимого ссылок внутри списка:
//     getTextFromUl(ul) ---> ["Link1", "Link2", "Link3"]
console.log('---------- 3 ----------');

const ulElement = document.querySelector('ul');

function getTextFromUl(element) {
    const countLi = element.children.length;
    const arrayTextFromUl = [];

    for(let i = 0; i < countLi; i++){
        arrayTextFromUl.push(element.children[i].querySelector('a').textContent);
    }

    return arrayTextFromUl;
}

console.log(getTextFromUl(ulElement));

// 4. В параграфе заменить все дочерние текстовые узлы на “-text-” (вложенные теги должны
// остаться). Конечный результат:
//     -text-<a href="#">reprehendunt</a>-text-<mark>nemore</mark>-text-
console.log('---------- 4 ----------');

const paragraph = document.querySelector('div article p');
const paragraphChildren = Array.from(paragraph.childNodes);
const fragment = document.createDocumentFragment();

paragraphChildren.forEach(element => {
   if (element.nodeType === 3) {
       element.data = '-text-';
   }
   return fragment.appendChild(element);
});

paragraph.appendChild(fragment);
