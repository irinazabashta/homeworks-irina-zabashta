// 1.По нажатию на кнопку "btn-msg" должен появиться алерт с тем текстом который находится в атрибуте data-text у кнопки.

const btnMessage = document.getElementById('btn-msg');

btnMessage.addEventListener( 'click', function(e) {
    alert(this.dataset.text);
    e.preventDefault();
});

// 2. При наведении указателя мыши на "btn-msg", кнопка становится красной; когда указатель мыши покидает кнопку, она становится прежнего цвета.
//    Цвет менять можно через добавление класса.

btnMessage.addEventListener('mouseover', function (e) {
    this.classList.add('btn-red');
});
btnMessage.addEventListener('mouseout', function (e) {
    this.classList.remove('btn-red');
});

// 3. При нажатии на любой узел документа показать в элементе с id=tag имя тега нажатого элемента.

const elementTagName = document.getElementById('tag');
const defaultText = elementTagName.innerText;

document.body.addEventListener('click', function (e) {
    let tag = e.target.tagName;
    elementTagName.innerText = `${defaultText} ${tag}`
});

// 4. При нажатии на кнопку btn-generate добавлять в список ul элемент списка Li с текстом Item + порядковый номер Li по списку, т.е Item 3, Item 4 и т.д

const btnGenerate = document.getElementById('btn-generate');
let elementUl = document.querySelector('ul');

btnGenerate.addEventListener('click', function(e) {
   let elementUlCount = elementUl.children.length;
   elementUl.insertAdjacentHTML('beforeend', `<li>Item ${elementUlCount+1}</li>`);
});

// 6. Реализовать примитивный дропдаун. Изначально все dropdown-menu скрыты через класс .d-none.
// При клике на dropdown-item должен отображаться блок dropdown-menu который вложен именно в
// тот dropdown-item на котором произошел клик. При повторном клике на этот же dropdown-item блок
// dropdown-menu должен закрыться. При клике на любой другой dropdown-item уже открытый
// dropdown-menu должен закрываться а на тот который кликнули открываться.

const mainMenu = document.querySelector('.menu');

mainMenu.addEventListener('click', ({target}) => {
    const liDropdownItemOpen = mainMenu.querySelector('.open')
    if (liDropdownItemOpen) {
        liDropdownItemOpen.classList.remove('open');
    }

    const liDropdownItem = target.closest('li');
    if (!liDropdownItem.classList.contains('open')) {
        liDropdownItem.classList.add('open');

    } else {
        liDropdownItem.classList.remove('open');
    }
});
