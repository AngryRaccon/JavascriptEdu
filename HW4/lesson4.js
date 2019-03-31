'use strict'

console.log('Задание 1');
function numToObj (num) {
	if (isNaN(num)) {
		console.log('Вы ввели не число!');
	} else if (num % 1 != 0) {
		console.log('Вы ввели не целое число');
	} else if (num > 999 || num < 0) {
		console.log('Вы вышли за пределы диапазона!');
	} else {
		let a = Math.trunc(num / 100);
		let b = Math.trunc(num / 10) - a * 10;
		let c = num - a * 100 - b * 10;
		let res = {
			'ones': c,
			'tens': b,
			'hundreds': a
		};
		return res;
	}
}
let num = +prompt('Введите целое число от 0 до 999');

console.log(numToObj(num));

console.log('Задание 2');
let products = [
{name: 'ежедневник', price: 350},
{name: 'блокнот на спирали', price: 30},
{name: 'тетрадь 24 листа в клетку', price: 17},
{name: 'линейка 20 см', price: 25},
{name: 'ручка синяя шариковая', price: 15},
{name: 'ручка синяя гелевая', price: 30},
{name: 'набор ручек цветных 12 штук', price: 150}
];
let Basket = {
	goodList: [],
	countTotalPrice() {
		let totalPrice = 0;
		for (let i = 0; i < this.goodList.length; i++) {
			totalPrice += this.goodList[i].count * this.goodList[i].price;
		}
		console.log('Итого: ' + totalPrice + ' ₽')
	},
	countTotalNumber() {
		let sumCount = 0;
		for (let i = 0; i < this.goodList.length; i++) {
			sumCount += this.goodList[i].count; 
		}
		console.log('Товаров в корзине: ' + sumCount);
	},
	putProduct(prod, count) {
		let idx = this.goodList.findIndex(function(elem) {
			return elem.name == prod.name;
		});
		if (idx == -1) {
			this.goodList.push(Object.assign({}, prod));
			this.goodList[this.goodList.length - 1].count = count;
		} else {
			this.goodList[idx].count += count;
		}
			
	}
};
//Basket.putProduct();
	
for (let i = 0; i < products.length; i+=2) {
	Basket.putProduct(products[i], 1);
};
for (let i = 1; i < products.length; i+=2) {
	Basket.putProduct(products[i], 2);
};
//Basket.putProduct(products[2], 5);
Basket.countTotalNumber();
Basket.countTotalPrice();
//console.log(Basket.goodList);