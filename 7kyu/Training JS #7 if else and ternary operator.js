/**
 * Задание:
 *
 * Выполните функцию saleHotdogs/SaleHotDogs/sale_hotdogs,
 * функция принимает
 * 1 параметр:n, n - количество хот-догов, которые купит клиент,разные номера имеют разные цены (см. следующую таблицу), верните, сколько денег потратит клиент, чтобы купить это количество хот-догов. количество хот-догов цена за единицу (центы)
 *
 * n < 5  === 100
 * n >= 5 и n < 10 === 95
 * n >= 10 === 90
 *
 * Для завершения можно использовать оператор if..else или троичный оператор.
 *
 */
const saleHotdogs = (n) => n *(n< 5 ? 100 : n >= 5 && n < 10 ? 95  : 90)
