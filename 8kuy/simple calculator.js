/**
 *
 * Вы должны создать простой калькулятор, возвращающий результат сложения,
 * вычитания, умножения или деления двух чисел.
 *
 * Ваша функция будет принимать три аргумента:
 *  первый и второй аргументы должны быть числами. Т
 *  третий аргумент должен представлять собой знак, указывающий на операцию, которую нужно выполнить над этими двумя числами.
 *
 *  если переменные не являются числами или знак не принадлежит к списку выше,
 *  должно быть возвращено сообщение "неизвестное значение".
 */

function calculator(a, b, sign) {
    const approvedSigns = ["+", "-", "/", "*"]
    if (typeof b !== 'number' || typeof a !== 'number' || approvedSigns.includes(sign) === false) {
        return 'unknown value'
    }
    switch (sign) {
        case '-':
            return a - b;
        case '*':
            return a * b;
        case "+":
            return a * b;
        case "/":
            return a / b;
        default:
            return "unknown value"
    }
}

/**
 * function calculator(a,b,sign){
 *    var oper = {
 *        "+": a + b,
 *        "-": a - b,
 *        "*": a * b,
 *        "/": a / b
 *    }
 *    return oper[sign] ? oper[sign] : "unknown value"
 * }
 */