console.log('---------- Object ----------');

// 1. Создать объект с полем product, равным ‘iphone’

let productsList = {product: 'iphone'};
console.log(productsList);

// 2. Добавить в объект поле price, равное 1000 и поле currency, равное ‘dollar’
productsList.price = 1000;
productsList.currency = 'dollar';
console.log(productsList);

// 3. Добавить поле details, которое будет содержать объект с полями model и color
productsList.details = {model: '', color: ''}
console.log(productsList);