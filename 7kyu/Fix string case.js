/**
 * В этом ката вам будет дана строка, в которой могут быть смешанные прописные и строчные буквы,
 * и ваша задача - преобразовать эту строку либо в строчную, либо в прописную, исходя из следующего:
 *
 * делайте как можно меньше изменений.
 * если строка содержит равное количество прописных и строчных букв, преобразуйте строку в строчную. например:
 *
 * solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
 * solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
 * solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
 */


function solve(s){
    const uper = s.length - s.replace(/[A-Z]/g, '').length
    const lower = s.length - s.replace(/[a-z]/g, '').length
    return (uper === lower ||lower > uper  ) ? s.toLowerCase() : s.toUpperCase()
}

solve('CODe')
solve('COde')
solve('Code')
solve('code')
solve('CODE')
