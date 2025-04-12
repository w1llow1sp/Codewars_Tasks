/**
 *
 * - Если один из символов не является буквой, возвращается -1
 * - Если оба символа имеют одинаковый регистр, возвращается 1
 * - Если оба символа являются буквами, но не имеют одинакового регистра, возвращается 0
 */

function sameCase(a, b) {
    if (!/[a-zA-Z]/.test(a) || !/[a-zA-Z]/.test(b)) {
        return -1;
    }
    if ((a === a.toUpperCase()) === (b === b.toUpperCase())) {
        return 1;
    }
    return 0;
}


sameCase('C', 'B')
sameCase('b', 'a')
sameCase('d', 'd')
sameCase('A', 's')
sameCase('c', 'B')
sameCase('b', 'Z')
sameCase('\t', 'Z')
sameCase('H', ':')
