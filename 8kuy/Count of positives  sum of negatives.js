/**
 * Дается массив целых чисел.
 * Возвращается массив, в котором первый элемент - счетчик положительных чисел,
 * а второй элемент - сумма отрицательных чисел.
 *
 * 0 не является ни положительным, ни отрицательным числом.
 * Если входной массив пуст или равен null, верните пустой массив.
 *
 * Пример
 *
 * Для входных данных [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15],
 * вы должны вернуть [10, -65].
 */

function countPositivesSumNegatives(input) {
    if (!input || input.length === 0) return [];

    let positiveCount = 0;
    let negativeSum = 0;

    for (let num of input) {
        if (num > 0) positiveCount++;
        else if (num < 0) negativeSum += num;
    }

    return [positiveCount, negativeSum];
}

let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
countPositivesSumNegatives(testData); // [10, -65];