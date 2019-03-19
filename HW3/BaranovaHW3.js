'use strict'

console.log('Задание 4');
let str = '';
let elem = '*'
for (let i = 0; i < 20; i++) {
    str += elem;
    console.log(str);
};

console.log('Задание 3');
for (let i = 0; i < 10; console.log(i++)) {
    //здесь пусто
};

console.log('Задание 2');
let prods = [
    {author: 'Макьюэн Иэн',
     title: 'Искупление',
     release_year: 2018,
     pages: 448,
     price: 318},
    {author: 'Йонг Эд',
     title: 'Как микробы управляют нами',
     release_year: 2018,
     pages: 352,
     price: 597},
    {author: 'Джаред Даймонд',
     title: 'Ружья, микробы и сталь. История человеческих сообществ',
     release_year: 2017,
     pages: 768,
     price: 279},
    {author: 'Яхина Гузель Шамилевна',
     title: 'Зулейха открывает глаза',
     release_year: 2015,
     pages: 512,
     price: 597},
    {author: 'Вайсман Элен Мари',
     title: 'Что осталось после нее',
     release_year: 2018,
     pages: 432,
     price: 560}
];
function countBasketPrice (basketArray) {
    let totalPrice = 0;
    for (let i = 0; i < basketArray.length; i++) {
        totalPrice += basketArray[i].price;
    };
    return totalPrice;
};
console.log('Стоимость Вашей покупки: ' + countBasketPrice(prods) + ' ₽');

console.log('Задание 1');
let a = [
 [{name: 'Mary', age: 23}, {name: 'Mike', age: 45}, {name: 'Nick', age: 11}],
 [{name: 'Adam', age: 56}, {name: 'Sara', age: 21}, {name: 'Don', age: 22}],
 [{name: 'Karl', age: 34}, {name: 'Marta', age: 76}, {name: 'John', age: 19}]
];
let b = [];
for (let i = 0; i < a.length; i++) {
    let subArray = [];
    for (let j = 0; j < a[i].length; j++) {
        let elem = Object.assign({}, a[i][j]);
        subArray.push(elem);
    }
    b.push(subArray);
};
console.log(b);