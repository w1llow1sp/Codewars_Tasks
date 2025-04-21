/**
 * Вам дано секретное сообщение, которое нужно расшифровать.
 * Вот что вам нужно знать, чтобы расшифровать его:
 * -  Для каждого слова: вторая и последняя буква меняются местами
 * (например, Hello становится Holle)
 *
 * первая буква заменяется кодом символа (например, H становится 72)
 * не используются специальные символы,
 * только буквы и пробелы
 *
 * Слова разделяются одним пробелом нет ведущих и завершающих
 * пробелов Примеры
 *
 * 72olle 103doo 100ya' --> 'Hello good day'
 * '82yade 115te 103o'   --> 'Ready set go'
 */

export function decipherThis(str: string): string {
    // Разделяем строку на слова
    const words = str.split(' ');

    // Обрабатываем каждое слово
    const decipheredWords = words.map(word => {
        // Извлекаем ASCII-код (число в начале слова)
        let i = 0;
        while (i < word.length && !isNaN(parseInt(word[i]))) {
            i++;
        }
        const asciiCode = parseInt(word.slice(0, i));
        const firstLetter = String.fromCharCode(asciiCode); // Преобразуем ASCII в букву

        // Оставшаяся часть слова (буквы после ASCII-кода)
        const restOfWord = word.slice(i);

        // Если слово состоит только из ASCII-кода (одна буква), возвращаем её
        if (restOfWord.length === 0) {
            return firstLetter;
        }

        // Меняем местами вторую и последнюю буквы
        if (restOfWord.length >= 2) {
            const chars = restOfWord.split('');
            [chars[0], chars[chars.length - 1]] = [chars[chars.length - 1], chars[0]];
            return firstLetter + chars.join('');
        }

        // Если после ASCII-кода только одна буква, возвращаем её без изменений
        return firstLetter + restOfWord;
    });

    // Объединяем слова обратно в строку с пробелами
    return decipheredWords.join(' ');
}

decipherThis('72olle 103doo 100ya')