/**
 * "Правило делимости - это сокращенный способ определить,
 *
 * делится ли данное целое число на определенный делитель, не выполняя деления,
 * обычно путем изучения его цифр".
 *
 * При последовательном делении 10 на 13 получаются следующие
 * остатки от целочисленных делений:
 * 1, 10, 9, 12, 3, 4, так как:
 *
 * 10 ^ 0 ->  1 (mod 13)
 * 10 ^ 1 -> 10 (mod 13)
 * 10 ^ 2 ->  9 (mod 13)
 * 10 ^ 3 -> 12 (mod 13)
 * 10 ^ 4 ->  3 (mod 13)
 * 10 ^ 5 ->  4 (mod 13)
 * 10 ^ 6 -> 1 (mod 13)
 * 10 ^ 7 -> 10 (mod 13)
 * 10 ^ 8 -> 9 (mod 13)
 * 10 ^ 9 -> 12 (mod 13)
 *
 *
 * Затем вся схема повторяется. Отсюда следующий метод:
 *  * умножьте самую правую цифру числа на самую левую цифру в последовательности,
 *  показанной выше,
 *  * вторую самую правую цифру на вторую самую левую цифру числа в этой последовательности.
 *
 *  Цикл продолжается, и вы суммируете все эти произведения.
 *  Повторяйте этот процесс до тех пор, пока последовательность сумм не станет стационарной.
 *
 *  Пример: Какой остаток получается при делении 1234567 на 13?
 *
 *  7      6     5      4     3     2     1  (digits of 1234567 from the right)
 * ×      ×     ×      ×     ×     ×     ×  (multiplication)
 * 1     10     9     12     3     4     1  (the repeating sequence)
 *
 * Therefore following the method we get:
 *
 *  7×1 + 6×10 + 5×9 + 4×12 + 3×3 + 2×4 + 1×1 = 178
 *
 *  Повторяем процесс с числом 178:
 *  8x1 + 7x10 + 1x9 = 87
 *
 *  и снова с 87:
 *  7x1 + 8x10 = 87
 *
 *  С этого момента последовательность становится стационарной (мы всегда получаем 87), а остаток от 1234567 на 13 равен остатку от 87 на 13 (то есть 9).
 *
 *  Задача: Вызовите функцию thirt,
 *  которая обрабатывает данную последовательность операций над целым числом n (>=0).
 *  thirt вернет стационарное число.
 *
 *  thirt(1234567) вычисляет 178, затем 87, затем 87 и возвращает 87.
 *  thirt(321) вычисляет 48, 48 и возвращает 48
 */

const remainders = [1, 10, 9, 12, 3, 4,1,10,9,12,3];



function thirt(n) {
    function calculateSum(num) {
        const digits = num.toString().split('').reverse();
        let sum = 0;


        for (const [index, digit] of digits.entries()) {
            sum += Number(digit) * remainders[index % remainders.length];
        }

        return sum;
    }
    let current = n;
    let previous;


    do {
        previous = current;
        current = calculateSum(current);
    } while (current !== previous);

    return current;
}

thirt(1234567) // 79
/*
thirt(8529) // 79
thirt(85299258) // 31
thirt(5634) //57
thirt(1111111111) // 71
thirt(987654321) // 30*/
