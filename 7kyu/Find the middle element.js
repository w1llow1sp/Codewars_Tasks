/**
 * В рамках этого Ката вам нужно создать функцию, которая, получив триплет,
 * возвращает индекс числового элемента, находящегося между двумя другими элементами.
 * На вход функции будет подан массив из трех разных чисел (в Haskell - кортеж).
 *
 * Например: gimme([2, 3, 1]) => 0 2 - это число, которое находится между 1 и 3, а индекс 2 во входном массиве равен 0.
 * Другой пример (просто чтобы было понятно):
 * gimme([5, 10, 14]) => 1 10 - это число, которое находится между 5 и 14, а индекс 10 во входном массиве равен 1.
 *
 * @param triplet
 */


function gimme(triplet) {
    const sortedArr = [...triplet].sort((a, b) => a - b)
    return triplet.indexOf(sortedArr[1])
}

/**
 * Best solution:
 *
 * function gimme(a) {
 *   return a.indexOf(a.concat().sort(function(a, b) { return a - b })[1])
 * }
 */
