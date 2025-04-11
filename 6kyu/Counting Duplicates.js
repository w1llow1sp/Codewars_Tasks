/**
 *
 * Подсчет количества дубликатов Напишите функцию, которая будет возвращать количество различных символов алфавита и цифр,
 * встречающихся во входной строке более одного раза без учета регистра.
 * Можно предположить, что входная строка содержит только алфавиты (как прописные, так и строчные) и числовые цифры.
 *
 * Пример
 *  "abcde" -> 0 # ни один символ не повторяется более одного раза
 *  "aabbcde" -> 2 # 'a' и 'b'
 *  "aabBcde" -> 2 # 'a' встречается дважды и 'b' дважды (`b` и `B`)
 *  "indivisibility" -> 1 # 'i' встречается шесть раз
 *  "Indivisibilities" -> 2 # 'i' встречается семь раз и 's' встречается дважды
 *  "aA11" -> 2 # 'a' и '1'
 *  "ABBA" -> 2 # 'A' и 'B' встречаются по два раза
 *
 */
function duplicateCount(text) {
    const stringArr = text.toLowerCase().split('')
    let valuesStorageCounter = {}
    for (let element of stringArr) {
        valuesStorageCounter[element] === undefined ? valuesStorageCounter[element] = 0 : valuesStorageCounter[element]++
    }
    return Object.values(valuesStorageCounter).filter((el) => +el !== 0).length
}


duplicateCount("") // 0
duplicateCount("abcde") // 0
duplicateCount("aabbcde") // 2
duplicateCount("aabBcde") // 2
duplicateCount("Indivisibility") //1
duplicateCount("Indivisibilities") // 2

/**
 * function duplicateCount(text){
 *   var count = text.toLowerCase().split('').reduce((accum, curr) => {
 *     accum[curr] ? accum[curr] += 1 : accum[curr] = 1;
 *     return accum;
 *   }, {});
 *   return Object.keys(count).filter(key => count[key] > 1).length;
 * }
 *
 */
