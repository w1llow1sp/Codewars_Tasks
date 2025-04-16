/**
 * Дана строка произвольной длины с любыми символами ascii.
 *
 * Напишите функцию, определяющую, содержит ли строка слово "English".
 *
 * Порядок символов важен - строка "abcEnglishdef" корректна,
 * а "abcnEglishsef" - нет.
 *
 * Верхний или нижний регистр букв не имеет значения - "eNglisH" также корректен.
 *
 * Возвращайте значения в виде булевых величин
 * true - если строка содержит "English",
 * false - если не содержит.
 *
 */

const  spEng = (sentence) => sentence.toLowerCase().includes('english')


spEng("english")
spEng("egnlish")