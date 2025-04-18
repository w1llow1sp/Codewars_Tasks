/**
 * ОПИСАНИЕ:
 *
 * Простые числа расположены неравномерно.
 *
 * Например, от 2 до 3 промежуток равен 1.
 * От 3 до 5 промежуток равен 2.
 * От 7 до 11 - 4.
 * Между 2 и 50 есть следующие пары простых чисел с двумя промежутками:
 * 3-5, 5-7, 11-13, 17-19, 29-31, 41-43.
 *
 * Пробел длины n - это промежуток из n-1 последовательных составных чисел между двумя
 * последовательными праймами (см.: http://mathworld.wolfram.com/PrimeGaps.html).
 *
 * Напишем функцию gap с параметрами:
 * g (целое число >= 2),которое указывает искомый промежуток
 * m (целое число > 2), которое дает начало поиска (по m включительно)
 * n (целое число >= m), которое дает конец поиска (по n включительно)
 *
 * В примере gap(2, 3, 50) вернет [3, 5] или (3, 5) или {3, 5}, которая является первой парой между 3 и 50 с промежутком 2.
 *
 * Таким образом, эта функция должна возвращать первую пару из двух простых чисел, расположенных с промежутком g между пределами m, n, если эти числа существуют, иначе `nil или null или None или Nothing (или ... в зависимости от языка).
 */

function gap(g, m, n) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let prevPrime = null;
    for (let i = m; i <= n; i++) {
        if (isPrime(i)) {
            // If we have a previous prime, check the gap
            if (prevPrime !== null && i - prevPrime === g) {
                return [prevPrime, i];
            }
            prevPrime = i;
        }
    }
    return null;
}
