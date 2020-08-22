// Написать функцию, преобразующую число в объект. Передавая на вход число в диапазоне [0, 999],
// мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
// - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
// units: 5, //это единицы
// tens: 4, //это десятки
// hundreds: 0, //это сотни
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function checkNumber(num) {
    let regexp = /\d{1, 3}/;
    if (regexp.test(num)) {
        console.log(num + ' - не является числом');
        return (null)
    } else if (num > 999) {
        console.log(num + ' - больше 999');
    } else if (num < 0) {
        console.log(num + ' - не является положительным числом');
        return (null)
    } else if ((num - Math.floor(num)) > 0) {
        console.log(num + ' - не является целым числом')
        return (null)
    } else {
        return (String(num))
    }
}

function convertNumberToObject(num) {
    strNum = checkNumber(num).split('')
    const numberDigits = {
        hunderets: 0,
        tens: 0,
        units: 0,
    }
    if (strNum == undefined) {
        return numberDigits;
    } else {
        for (let i = 0; i < strNum.length; i++) {
            if ((strNum.length - i) == 1) { numberDigits.units = parseInt(strNum[i]) };
            if ((strNum.length - i) == 2) { numberDigits.tens = parseInt(strNum[i]) };
            if ((strNum.length - i) == 3) { numberDigits.hunderets = parseInt(strNum[i]) };
        }
        return numberDigits;
    }
}

console.log(convertNumberToObject(126))

// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока), конструктор Product, который
// принимает параметры name и price, сохраните их как свойства объекта. Также объекты типа Product
// должны иметь метод make25PercentDiscount, который будет уменьшать цену в объекте на 25%.

function Product(name, price) {
    this.name = name;
    this.price = price;
    this.make25PercentDiscount = function () {
        this.price = this.price - (this.price / 100 * 25);
    };
}


class Product_new {
    constructor(name, price) {
        this.name = name;
        this.price = price;

        make25PercentDiscount = function () {
            this.price = this.price - (this.price / 100 * 25);
        };
    }
}

// Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства
// объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст и записывать
// его в свойство text объекта.

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
    this.edit = function (text) {
        this.text = text;
    }
}

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    };

    edit = function (text) {
        this.text = text;
    }
}

// б) конструктор AttachedPost, который принимает параметры author, text, date.
// Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. Также
// в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
// Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать
// свойству highlighted значение true.

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
}

