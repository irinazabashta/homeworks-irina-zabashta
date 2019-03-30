// 1 Записать в виде switch case следующее условие:
//   if (a === ‘block’) {
//   console.log(‘block’)
//   } else if (a === ‘none’) {
//   console.log(‘none’)
//   } else if (a === ‘inline’) {
//   console.log(‘inline’)
//   } else {
//   console.log(‘other’)
//   }

console.log('---------- 1 ----------');
let blockType = 'inline';
switch (blockType) {
    case 'block':
        console.log('block');
        break;
    case 'none':
        console.log('none');
        break;
    case 'inline':
        console.log('inline');
        break;
    default:
        console.log('other');
}

// 2 Из задач по условному оператору if else выполнить задачи 1, 2 и 3 в виде тернарного оператора.

console.log('---------- 2.1 ----------');
/*if(visibility === 'hidden' ) {
    visibility = 'visible';
} else {
    visible = 'hidden';
}*/

var visibility = 'hidden';
visibility = visibility === 'hidden' ? 'visible' : 'hidden';
console.log('type is: ' + visibility);

console.log('---------- 2.2 ----------');
/*if (x === 0) {
    x = 1;
} else if (x < 0) {
    x = 'less then zero';
} else if (x > 0) {
    x *= 10;
}*/
var x = 0;
x = x === 0
    ? 1
    : x > 0
        ?  x*10
        : 'less then zero';
console.log('variable is: ' + x);

console.log('---------- 2.3 ----------');
/*if (car.age > yearRepair) {
    console.log('Need Repair');
    car.needRepair = true;
} else {
    car.needRepair = false;
}*/
let car = { name: 'Lexus', age: 10, create: 2008, needRepair: false };
let yearRepair = 5;
car.age > yearRepair
    ? (
        console.log('Need Repair'),
        car.needRepair = true
    )
    : car.needRepair = false;
console.log(car);