/**
 * Программы распознавания символов широко используются для оцифровки печатных текстов.
 *
 * Таким образом, тексты можно редактировать, искать и хранить на компьютере.
 * Когда документы (особенно старые, написанные на пишущей машинке) оцифровываются,
 * программы распознавания символов часто допускают ошибки.
 *
 * Ваша задача - исправить ошибки в оцифрованном тексте.
 * Вы должны справиться только со следующими ошибками:
 * * S неправильно интерпретируется как 5
 * * O неправильно интерпретируется как 0
 * * I неправильно интерпретируется как 1
 *
 * Тестовые примеры содержат числа только по ошибке.
 */

function correct(string) {
    let polishedString = []
    for (let symbol of string.split('')) {
        symbol === '5'
            ? polishedString.push('S')
            : symbol === '0'
                ? polishedString.push('O')
                : symbol === '1'
                    ? polishedString.push("I")
                    : polishedString.push(symbol)
    }
    return polishedString.join('')
}

correct("L0ND0N") //"LONDON"
correct("DUBL1N") //"DUBLIN"
correct("51NGAP0RE") //"SINGAPORE";
correct("BUDAPE5T") //"BUDAPEST"
correct("PAR15") //"PARIS"

/**
 * const corrections = {
 *    '5': 'S',
 *    '0': 'O',
 *   '1': 'I',
 * };
 *
 * const correct = string => (
 *    string.replace(/[501]/g, character => corrections[character])
 * );
 */