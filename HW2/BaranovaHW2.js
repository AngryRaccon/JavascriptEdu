'use strict'

console.log('Задание 1');
//1 пример
let a = 1, b = 1, c, d;
c = ++a;
console.log('c = ++a; Сначала происходит увеличение а на единицу, то есть а становится равным 2, затем с присваивается уже новое, увеличенное значение а. Поэтому с = 2.')
console.log('c = ' + c);

//2 пример
d = b++;
console.log('d = b++; В данном примере сначала работает присвоение переменной d значения переменной b, то есть в итоге d = 1. Затем выполняется операция b++, в результате которой переменная увеличивается на единицу и становится равной 2.')
console.log('d = ' + d);

//3 пример
c = (2+ ++a);
console.log('c = (2+ ++a); Двойка складывается с увеличенной на единицу а, то есть с тройкой. В результате с = 5.')
console.log('c = ' + c);

//4 пример
d = (2+ b++);
console.log('d = (2+ b++); Вначале происходит сложение 2 и b, b = 2. Переменной d присваивается значение 4. После этого происходит увеличение b на единицу, b = 3')
console.log('d = ' + d);

console.log('Из примера 3 а = 3');
console.log('a = ' + a);
console.log('Из примера 4 b = 3');
console.log('b = ' + b);

console.log('Задание 2');
let A = 2;
let X = 1 + (A *= 2);
console.log('x = ' + X);
console.log('Сначала выполняется действие в скобочках, которое эквивалентно следующему действию: a = a * 2, то есть а = 2 * 2 = 4. Затем переменной х присваивается результат сложения 1 и 4.')

console.log('Задание 3');
let firstNumber = Math.floor(Math.random() * 100) - 50;
let secondNumber = Math.floor(Math.random() * 200) - 100;
console.log('Первое число: ' + firstNumber);
console.log('Второе число: ' + secondNumber);
if (firstNumber >= 0 && secondNumber >=0) {
    console.log ('Разность чисел равна ' + (firstNumber - secondNumber));
} else if (firstNumber < 0 && secondNumber < 0) {
    console.log ('Произведение чисел равно ' + firstNumber * secondNumber);
} else {
    console.log ('Сумма чисел равна ' + (firstNumber + secondNumber));
};

//console.log('Задание 4');
function Plus(x, y) {
    return x + y;
};
function Minus(x, y) {
    return x - y;
};
function Multiple(x, y) {
    return x * y;
};
function Division(x, y) {
    return x / y;
};

//console.log('Задание 5');
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case 'сложить':
            return Plus(arg1, arg2);
        case 'вычесть':
            return Minus(arg1, arg2);
        case 'умножить':
            return Multiple(arg1, arg2);
        case 'поделить':
            return Division (arg1, arg2);
        default: 
            return 'error';
    }
} 
let arg1 = Number(prompt('Задание 5 \nВведите первое число:'));
let arg2 = Number(prompt('Введите второе число'));
let operation = prompt('Что сделать с числами: сложить, вычесть, умножить или поделить?');
let calcResult = mathOperation
(arg1, arg2, operation);
if (calcResult === 'error') {
    alert('Неизвестная операция');
} else {
    alert(Math.round(calcResult*1000)/1000);
};

//consile.log('Задание 6');
function Power(val, pow) {
    if (pow == 0) {
        return 1;
    } else {
        if (pow > 0) {
            return Power(val, pow - 1) * val;
        } else {
            return Power(val, pow + 1) / val;
        }
    }
};
let val = Number(prompt('Задание 6 \nВведите основание'));
let pow = Number(prompt('Введите целочисленную степень'));
if (pow % 1 !== 0) {
    alert ('Вы ввели не целочисленную степень! :( ')
} else {
    alert('Результат: ' + Power(val, pow));
}


//console.log('Задание 7');
function Validation(path) {
    if (path === null) {
        return 'Некорректный пароль';
    }
    if (path.length <= 3 || path.length >= 12) {
        return 'Некорректный пароль';
    } else if(path.indexOf('q') != 0 && path.lastIndexOf('z') != path.length - 1) {
        return 'Некорректный пароль';
    } else {
        // Тут используем 1 цикл по строке вместо 4-х indexOf, чтобы проверить
        // наличие требуемых символов за 1 проход строки вместо 4-х (в худшем случае)
        for (i = 0; i < path.length; i++) {
            if (path[i] == '&' || path[i] == '$' || path[i] == '%' || path[i] == '*') {
                return 'Корректный пароль';
            }
        }
        return 'Некорректный пароль';
    }
}
let password = prompt('Задание 7 \nВведите пароль');
alert(Validation(password));