/**
 * Завершите метод, который принимает массив целых чисел и возвращает одно из следующих значений:
 *
 * "да, по возрастанию" - если числа в массиве отсортированы по возрастанию
 * "да, по убыванию" - если числа в массиве отсортированы по убыванию
 * "нет" - иначе
 *
 * Можно предположить, что массив всегда будет действительным, и всегда будет один правильный ответ.
 */

function isSortedAndHow(array) {
    const isAscending = array.every((num, i) => i === 0 || num >= array[i - 1]);
    const isDescending = array.every((num, i) => i === 0 || num <= array[i - 1]);
    if (isAscending) return "yes, ascending";
    if (isDescending) return "yes, descending";
    return "no";
}

isSortedAndHow([4, 2, 30])
