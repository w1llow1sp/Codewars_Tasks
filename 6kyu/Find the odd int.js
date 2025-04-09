/**
 * В массиве целых чисел найдите то, которое встречается нечетное количество раз.
 * Всегда найдется только одно целое число, которое встречается нечетное количество раз.
 */

function findOdd(A) {
    let counter = {}
    for (let num of A) {
        if (counter[num] === undefined) {
            counter[num] = 0;
        }
        if (counter[num] >= 0) {
            counter[num]++;
        }
    }
    return +Object.keys(counter).find((key) => counter[key] % 2 !== 0)
}

/**
 * function findOdd(arr) {
 *   return arr.find((item, index) => arr.filter(el => el == item).length % 2)
 * }
 */
