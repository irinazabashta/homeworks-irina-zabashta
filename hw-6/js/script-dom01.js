//Зная структуру html, с помощью изученных методов получить (в консоль):
// 1. head
// 2. body
// 3. все дочерние элементы body и вывести их в консоль.
// 4. первый div и все его дочерние узлы
// а) вывести все дочерние узлы в консоль
// б) вывести в консоль все дочерние узлы, кроме первого и последнего
// Для навигации по DOM использовать методы, которые возвращают только элементы

console.log('---------- 1 ----------');
const docHead = document.head;
console.log(docHead);

console.log('---------- 2 ----------');
const docBody = document.body;
console.log(docBody);

console.log('---------- 3 ----------');
const childrenDocBody = docBody.children;
console.log(childrenDocBody);

console.log('---------- 4 ----------');
const firstDivDocBody = docBody.firstElementChild;
const elementsFirstDivDocBody = firstDivDocBody.children;

console.log(firstDivDocBody);
console.log(elementsFirstDivDocBody);

for (let i = 1; i < elementsFirstDivDocBody.length - 1; i++) {
    console.log(elementsFirstDivDocBody[i]);
}
