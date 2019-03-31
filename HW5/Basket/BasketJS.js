'use strict'
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
		return totalPrice;
	},
	countTotalNumber() {
		let sumCount = 0;
		for (let i = 0; i < this.goodList.length; i++) {
			sumCount += this.goodList[i].count; 
		}
        return sumCount;
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
let getCountOfProducts = Math.round(Math.random() * products.length);
let cashReceipt = '';
for (let i = 0; i < getCountOfProducts; i++) {
    let amountOfGood = Math.round(Math.random() * 5);
	if(amountOfGood != 0) {
        Basket.putProduct(products[i], amountOfGood);
        cashReceipt += products[i].name + ', ' + products[i].price + '₽,' + ' количество: ' + amountOfGood + '<br>';
    }
};

//console.log(Basket.goodList);
let cash = document.getElementById('check');
cash.innerHTML = cashReceipt;
let content = document.getElementById('basket');
if(Basket.countTotalNumber() !== 0) {
    content.innerHTML = 'В корзине: ' + Basket.countTotalNumber() + ' товаров на сумму ' + Basket.countTotalPrice() + '₽';
} else {
    content.innerHTML = 'Ваша корзина пуста';
}
