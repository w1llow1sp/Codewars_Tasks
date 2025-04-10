/**
 * Если задан массив чисел, верните новый массив длины number,
 * содержащий последние четные числа из исходного массива (в том же порядке
 *
 * Исходный массив будет не пуст и будет содержать не менее "количества" четных чисел. Например:
 *
 * ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
 * ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
 * ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
 */

const evenNumbers = (array, number) => {
    const filtredArr = array.filter((el) => el % 2 === 0)
    return filtredArr.slice(filtredArr.length - number)
}

evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)
evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2)
evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1)

//const evenNumbers = (array, number) => array.filter(item => item % 2 === 0).slice(-number);
