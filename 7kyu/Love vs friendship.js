/**
 *
 * Если　a = 1, b = 2, c = 3 ... z = 26
 *
 * Затемl + o + v + e = 54
 *
 * иf + r + i + e + n + d + s + h + i + p = 108
 *
 * Так friendship что в два раза сильнее love:-)
 *
 * Ваша задача — написать функцию, которая вычисляет значение слова на основе суммы позиций его символов в алфавите.
 *
 * Ввод всегда будет состоять только из строчных букв и никогда не будет пустым
 *
 */

const wordsToMarks = (string) => [...string].reduce((res,value) => res += value.charCodeAt() - 96,0)