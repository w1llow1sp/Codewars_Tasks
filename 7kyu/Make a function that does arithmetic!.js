/**
 * Если даны два числа и арифметический оператор (его название в виде строки),
 *
 * верните результат применения этого оператора к двум числам.
 *
 * a и b будут целыми положительными числами,
 * причем a всегда будет первым числом в операции, а
 * b - вторым.
 *
 * Четыре оператора: "сложение", "вычитание", "деление", "умножение".
 *
 */

const arithmetic = (a, b, operator) => operator === 'add' ? a + b : operator === 'subtract' ? a - b : operator === 'multiply' ? a * b : a / b;

/**
 * function arithmetic(a, b, operator){
 *   optable = { "add":"+", "subtract": "-", "multiply": "*" , "divide":"/"};
 *   return eval(a + optable[operator] + b);
 * }
 */