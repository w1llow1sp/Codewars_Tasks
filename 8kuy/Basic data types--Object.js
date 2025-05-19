/**
 * В JavaScript Object является одним из основных типов данных.
 * Для определения объекта вы можете использовать
 *
 * let obj = new Object() или
 * let obj = {}.
 *
 * Вы можете определить атрибуты объекта при инициализации, как это:
 *
 * let animal = {name: "dog"}
 *
 * Вы также можете установить/получить некоторые свойства после определения объекта,
 * как это:
 * let animal = {}
 * animal.name = "dog"
 * // или: animal["name"] = "dog"
 *
 * Задача
 * Дайте функцию animal, принимающую 1 параметр:obj, как здесь:
 * {name: "dog",legs:4,color: "white"} и возвращающую строку, как здесь:
 * "У этой белой собаки 4 ноги".
 */

function animal(obj){
    return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

animal({ name: "dog", legs: 4, color: "white" })