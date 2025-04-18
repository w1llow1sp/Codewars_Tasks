/**
 * В этом простом упражнении вы создадите программу,
 * которая примет два списка целых чисел, a и b.
 *
 * Каждый список будет состоять из 3 положительных целых чисел больше 0,
 * представляющих размеры кубоидов a и b.
 *
 * Вы должны найти разность объемов кубоидов независимо от того, какой из них больше.
 * Например, если переданы параметры
 * ([2, 2, 3], [5, 4, 1]), то объем
 * a равен 12,
 * а объем b - 20.
 *
 * Поэтому функция должна возвращать 8.
 * Ваша функция будет протестирована как на готовых примерах, так и на случайных.
 */
const findDifference = (a, b) => Math.abs(a.reduce((x, y) => x * y, 1) - b.reduce((x, y) => x * y, 1));

findDifference([3, 2, 5], [1, 4, 4]) // 14
findDifference([9, 7, 2], [5, 2, 2]) // 106
findDifference([11, 2, 5], [1, 10, 8]) // 30
findDifference([4, 4, 7], [3, 9, 3]) // 31
findDifference([15, 20, 25], [10, 30, 25]) // 0