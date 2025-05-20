/**
 * Classy Classes Basic Classes, это ката в основном нацелено на новый JS ES6 Update,
 * представляющий классы
 *
 * Задача Ваша задача - завершить этот класс, класс Person был создан.
 * Вы должны заполнить метод Constructor для приема имени как строки и возраста как числа,
 * заполнить свойство get Info и метод getInfo/Info getter,
 * который должен вернуть возраст Джона 34 Ссылка: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get info () {
        return `${this.name}s age is ${this.age}`
    }
}

let john = new Person('john', 34)
john.info // 'johns age is 34'
