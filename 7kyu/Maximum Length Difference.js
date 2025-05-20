/**
 * ОПИСАНИЕ: Вам даны два массива a1 и a2 строк.
 *
 * Каждая строка состоит из букв от a до z.
 *
 * Пусть x - любая строка в первом массиве,
 * а y - любая строка во втором массиве.
 *
 * Найдите max(abs(length(x) - length(y)))
 *
 * Если a1 и/или a2 пусты, верните -1 в каждом языке, кроме Haskell (F#),
 * где вы вернете Nothing (None). Пример:
 *
 * a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
 * a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
 * mxdiflg(a1, a2) --> 13
 */
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) {
        return -1;
    }
    // Находим максимальную и минимальную длины строк в a1
    const len1 = a1.map(str => str.length);
    const max1 = Math.max(...len1);
    const min1 = Math.min(...len1);

    // Находим максимальную и минимальную длины строк в a2
    const len2 = a2.map(str => str.length);
    const max2 = Math.max(...len2);
    const min2 = Math.min(...len2);

    return Math.max(Math.abs(max1 - min2), Math.abs(max2 - min1));

}
const s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
const s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];

mxdiflg(s1,s2)