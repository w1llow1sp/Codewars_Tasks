/**
 * Завершите метод, который возвращает число, наиболее часто встречающееся в заданном входном массиве.
 * Если есть равные числа, то возвращается наибольшее из них.
 *
 * Примечание: пустые массивы не выдаются.
 *
 * Примеры [12, 10, 8, 12, 7, 6, 4, 10, 12] --> 12 [12, 10, 8, 12, 7, 6, 4, 10, 12, 10] --> 12 [12, 10, 8, 8, 3, 3, 3, 2, 4, 10, 12, 10] --> 3
 */

function highestRank(arr) {
    // Подсчёт частоты
    let resObj = {};
    for (let item of arr) {
        resObj[item] = (resObj[item] || 0) + 1;
    }

    // Находим число с максимальной частотой
    let maxCount = 0;
    let maxNumber = arr[0];

    for (let num in resObj) {
        if (resObj[num] > maxCount) {
            maxCount = resObj[num];
            maxNumber = Number(num); // Преобразуем ключ в число
        } else if (resObj[num] === maxCount && Number(num) > maxNumber) {
            maxNumber = Number(num); // Преобразуем ключ в число
        }
    }

    return maxNumber; // Возвращаем число
}
const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
highestRank(arr)