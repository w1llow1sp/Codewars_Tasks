/**
 * Найдите число с наибольшим количеством цифр.
 *
 * Если два числа в массиве аргументов имеют одинаковое количество цифр, возвращается первое из них.
 */

const findLongest = array => array.reduce((a, b) => String(a).length >= String(b).length ? a : b);

findLongest([1, 10, 100])
findLongest([9000, 8, 800])
findLongest([8, 900, 500])