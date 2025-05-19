/**
 * Возьмите 2 строки s1 и s2, включающие только буквы от a до z.
 * Верните новую отсортированную строку (в алфавитном порядке),
 * самую длинную из возможных,
 * содержащую отдельные буквы - каждая из которых взята только
 * один раз - из s1 или s2.
 *
 * Примеры: a = "xyaabbbccccdefww"
 * b = "xxxxyyyyabklmopq"
 *
 * longest(a, b) ->
 * "abcdefklmopqwxy" a= "abcdefghijklmnopqrstuvwxyz"
 * longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 *
 */

export const longest = (s1: string, s2: string): string => {
    const uniqueChars: { [key: string]: boolean } = {};

    // Собираем уникальные символы из s1 и s2
    for (const char of s1 + s2) {
        uniqueChars[char] = true;
    }

    // Преобразуем ключи объекта в массив, сортируем и объединяем
    return Object.keys(uniqueChars).sort().join('');
};

const str1 = 'aaaaabbbbbbcccc'
const str2 = 'ddddddddddddddddddddfffffffffffffff'
longest(str1, str2)