/**
 * Удаление восклицательного знака из конца строки.
 *
 * Для начинающего ката можно считать, что входные данные всегда являются строкой, проверять это не нужно.
 */

const remove = (string) =>  string.endsWith("!") ? string.slice(0, string.length -1) :string
remove("Hi!")
remove("Hi!!!")
