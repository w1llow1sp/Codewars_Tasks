/**
 * Возьмите целое число n (n >= 0) и цифру d (0 <= d <= 9).
 *
 * Возведите в квадрат все числа k (0 <= k <= n) между 0 и n.
 *
 * Подсчитайте количество цифр d, использованных при записи всех k**2.
 * Реализуйте функцию, принимающую n и d в качестве параметров и возвращающую этот счет.
 *
 */
function nbDig(n, d) {
    let counter = 0
    for (let k = 0; k <=n; k ++) {
        let square = k * k;
        let squareStr = String(square);
        for (let char of squareStr) {
            if (char === String(d)) {
                counter++;
            }
        }
    }
    console.log(counter)
    return counter
}

nbDig(11011,2)
