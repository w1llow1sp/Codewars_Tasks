/**
 * Задав строку, выделите буквы, занимающие четные и нечетные индексы,
 * отдельно и верните, как показано ниже.
 *
 * Индекс 0 будет считаться четным.
 *
 * Например, capitalize("abcdef") = ['AbCdEf', 'aBcDeF'].
 *
 * Дополнительные примеры смотрите в тестовых примерах.
 * На вход будет подана строка в нижнем регистре без пробелов.
 * Удачи!
 */

function capitalize(s) {
    let upperCaseInit = [...s.split('')].map((el, index) => index === 0 || index % 2 === 0 ? el.toUpperCase() : el.toLowerCase()).join('')
    let lowerCaseInit = [...s.split('')].map((el, index) => index === 0 || index % 2 === 0 ? el.toLowerCase() : el.toUpperCase()).join('')
    return [upperCaseInit, lowerCaseInit]
};

capitalize("abcdef")
capitalize("codewars")
capitalize("abracadabra")

