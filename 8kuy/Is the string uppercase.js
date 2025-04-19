/**
 * ОПИСАНИЕ: Является ли строка прописной?
 * Задача :
 *
 * Создайте метод, который будет проверять, является ли строка ALL CAPS.
 *
 * Примеры:(вход -> выход)
 * "c" -> False
 * "C" -> True
 * "hello I AM DONALD" -> False
 * "HELLO I AM DONALD" -> True
 * "ACSKLDFJSgSKLDFJSKLDFJ" -> False
 * "ACSKLDFJSGSKLDFJSKLDFJ" -> True
 *
 * В этом Ката считается, что строка написана ALL CAPS,
 * если в ней нет ни одной строчной буквы,
 * поэтому любая строка, в которой вообще нет букв,
 * тривиально считается написанной ALL CAPS.
 */

String.prototype.isUpperCase = function() {
    console.log(String(this)=== String(this).toUpperCase())
}

'c'.isUpperCase()
'С'.isUpperCase()
'hello I AM DONALD'.isUpperCase()
'ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase()