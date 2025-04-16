/**
 * Создайте функцию, которая возвращает CSV-представление двумерного числового массива.
 *
 * Примечание: не нужно экранировать \n, он должен работать как новая строка.
 */
function arrayToCSV(twoDArray) {
    return twoDArray.map(row => row.join(',')).join('\n');
}
