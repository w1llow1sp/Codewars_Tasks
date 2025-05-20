/**
 * Получив смешанный массив числовых и строковых представлений
 * целых чисел, сложите нестроковые целые числа и вычтите сумму
 * строковых целых чисел.
 *
 * Возврат в виде числа
 *
 */

export const divCon = (x: (string | number)[]): number => {
    // @ts-ignore
    return x.reduce((acc: number, item: string | number): number => {
        if (typeof item === 'number') {
            return acc + item;
        } else {
            return acc - Number(item);
        }
    }, 0);
};

divCon([9, 3, '7', '3'])
divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7])
divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'])