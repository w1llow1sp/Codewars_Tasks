/**
 *
 * Выполните функцию howManydays.
 *
 * Она принимает 1 параметр month, который означает месяц года.
 *
 * Разные месяцы имеют разное количество дней, как показано в таблице ниже.
 * Верните количество дней в месяце.
 * Валидация ввода не требуется: месяц всегда будет больше 0 и меньше или равен 12.
 */

function howManydays(month){
    let days;
    switch (month){
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30
            break;
        case 2:
            days =28
            break;
        default:
            days = 31;
            break;

    }
    return days;
}