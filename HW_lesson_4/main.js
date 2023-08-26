// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleS(a, b) {
    let s = a * b
    console.log(`the area of the rectangle:`, s)
    return s
}

let resFunctionRectangleS = rectangleS(5, 12)
console.log(resFunctionRectangleS)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circles(r) {
    let areaS = 3.14 * r ** 2
    console.log(`area of a circle:`, areaS)
    return areaS
}

let resFunctionCircles = circles(15)
console.log(resFunctionCircles)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinder(h, r) {
    let s = 2 * 3.14 * r * (r + h)
    console.log(`cylinder area`, s)
    return s
}

let resFunctionCylinder = cylinder(15, 12)
console.log(resFunctionCylinder)

// - створити функцію яка приймає масив та виводить кожен його елемент
let newArre = [1, 3, 5, true, 'hello okten', false]

function eachArrayElement(arr) {
    for (let arrElement of arr) {
        console.log(arrElement)
    }
}

eachArrayElement(newArre)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function creatingParagraph(textParagraph) {
    document.write(`<p>${textParagraph}</p>`)
}

creatingParagraph('hello okten')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// через цикл
function ulIl(text_Il) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text_Il}</li>`)
    }
    document.write(`</ul>`)
}

ulIl('hello Friday')
// ----------------------------------------------------------------------------------------------------------
// без циклу
function ulIl_1(text_Il) {
    document.write(`<ul>`)
    document.write(`<li>${text_Il}</li>`)
    document.write(`<li>${text_Il}</li>`)
    document.write(`<li>${text_Il}</li>`)
    document.write(`</ul>`)
}

ulIl_1('hello Friday')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function ulLi_2(text, num) {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

ulLi_2('Friday', 5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function creatingLists(...arr) {
    return arr
}

let resFunctionCreatingLists = creatingLists([1, 3, true, false, 'hello', 'friday'])
console.log(resFunctionCreatingLists)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [{id: 1, name: 'Max', age: 22}, {id: 2, name: 'Dima', age: 21}, {id: 3, name: 'Vasia', age: 12}]

function usersArr(users) {
    for (let user of users) {
        document.write(`<div>id: ${user.id} name: ${user.name} age : ${user.age}</div>`)
    }
}

usersArr(users)

// - створити функцію яка повертає найменьше число з масиву
let arrNum = [5, 2, 4, 6, 3, 7, 9]

function minNumArr(someArr) {
    let res ;
    for (let Element of someArr) {
        if (res === undefined){
            res = Element
        }else if (Element < res){
            res = Element
        }
    }
    return res
}
let resFunctionMinNumArr  = minNumArr(arrNum)
console.log(resFunctionMinNumArr)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arrNum_1 = [1, 2, 6, 8, 2, 1]

function sumAllArr(arr) {
    let result = 0
    for (let arrElement of arr) {
        result += arrElement
    }
    return result
}

let resFunctionSumAllArr = sumAllArr(arrNum_1)
console.log(resFunctionSumAllArr)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let someSwapArray = [11, 22, 33, 44, 55];

function swap(arr, index1, index2) {
    let one = arr[index1]
    let two = arr[index2]
    arr[index1] = two
    arr[index2] = one
    return arr
}

let resFunctionSwap = swap(someSwapArray, 0, 1)
console.log(resFunctionSwap)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAH / item.value
        }
    }
}

let resFunctionExchange = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}, {currency: 'PLN', value: 8}], 'USD')
console.log(resFunctionExchange)