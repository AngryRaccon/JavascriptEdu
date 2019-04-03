let Basket = {
    goodList: []
    , countTotalPrice() {
        let totalPrice = 0;
        for (let i = 0; i < this.goodList.length; i++) {
            totalPrice += this.goodList[i].count * this.goodList[i].price;
        }
        return totalPrice;
    }
    , countTotalNumber() {
        let sumCount = 0;
        for (let i = 0; i < this.goodList.length; i++) {
            sumCount += this.goodList[i].count;
        }
        return sumCount;
    }
    , putProduct(prod, count) {
        let idx = this.goodList.findIndex(function (elem) {
            return elem.name == prod.name;
        });
        if (idx == -1) {
            this.goodList.push(Object.assign({}, prod));
            this.goodList[this.goodList.length - 1].count = count;
        }
        else {
            this.goodList[idx].count += count;
        }
    }
};
let Buttons = document.querySelectorAll('button');
for (let i = 0; i < Buttons.length; i++) {
    let button = Buttons[i]
    button.addEventListener('click', function () {
        Basket.putProduct({
            name: button.parentElement.getElementsByClassName("name")[0].innerHTML,
            price: button.parentElement.getElementsByClassName("price")[0].innerHTML,
        }, 1);
        console.log(Basket.goodList);
        let content = document.getElementById('basket');
        console.log(content);
        if (Basket.countTotalNumber() !== 0) {
            content.innerHTML = 'В корзине: ' + Basket.countTotalNumber() + ' товаров на сумму ' + Basket.countTotalPrice() + '₽';
        }
    })
};
        
document.getElementById('basket').innerHTML = 'Ваша корзина пуста';