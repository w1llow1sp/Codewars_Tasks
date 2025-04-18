/**
 * Ваш начальник решил сэкономить, купив недорогую программу
 * оптического распознавания символов для сканирования текстов
 * старых романов в вашу базу данных.
 *
 * Поначалу кажется, что программа хорошо распознает слова,
 * но вскоре вы замечаете,
 * что она вбрасывает множество цифр в случайных местах текста.
 *
 * Ваши измученные коллеги ищут решение, как взять этот
 * беспорядочный текст и удалить все цифры.
 *
 * Ваша программа примет строку, очистит все числовые символы
 * и вернет строку с интервалом и специальными символами
 * ~#$%^&!@*():;"'.,? в целости и сохранности.
 */

function stringClean(s){
   return s.replace(/\d/g, '')
}