/**
 * Введение
 *
 * Идет война, о которой никто не знает - война алфавитов!
 *
 * Есть две группы враждебных букв.
 *
 * Напряжение между левыми и правыми буквами было слишком велико,
 * и началась война.
 *
 * Задание
 *
 * Напишите функцию, которая принимает строку fight,
 * состоящую только из маленьких букв, и возвращает, кто победил в этой
 * борьбе.
 *
 * При победе левой стороны возвращается "Левая сторона победила!",
 * при победе правой стороны возвращается "Правая сторона победила!",
 * в другом случае возвращается
 * "Давайте снова сразимся!". Левые буквы и их сила:
 *
 * The left side letters and their power:
 *  w - 4
 *  p - 3
 *  b - 2
 *  s - 1
 *
 *  The right side letters and their power:
 *  m - 4
 *  q - 3
 *  d - 2
 *  z - 1
 */



function alphabetWar(fight) {
    const leftPower = { w: 4, p: 3, b: 2, s: 1 };
    const rightPower = { m: 4, q: 3, d: 2, z: 1 };
    let left = 0
    let right = 0
    fight.split('').forEach((letter) => {
        left += leftPower[letter] || 0;
        right += rightPower[letter] || 0;
    })
    return left > right ? 'Left side wins!' : left === right ? "Let's fight again!" : "Right side wins!"

}

alphabetWar("z")
alphabetWar("zdqmwpbs")
