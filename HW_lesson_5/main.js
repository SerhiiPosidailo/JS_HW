// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let fun_1 = (a, b) => {
    return a * b
}
console.log(fun_1(5, 12))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
let fun_2 = (r) => {
    return 3.14 * r ** 2
}

console.log(fun_2(15))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let fun_3 = (h, r) => {
    return 2 * 3.14 * r * (r + h)
}

console.log(fun_3(15, 12))

// - створити функцію яка приймає масив та виводить кожен його елемент
let newArre = [1, 3, 5, true, 'hello okten', false]

let fun_4 = (arr) => {
    for (let arrElement of arr) {
        console.log(arrElement)
    }
}

fun_4(newArre)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let fun_5 = (textParagraph) => {
    document.write(`<p>${textParagraph}</p>`)
}

fun_5('hello okten')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let fun_6 = (text_Il) => {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text_Il}</li>`)
    }
    document.write(`</ul>`)
}

fun_6('hello Friday')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let fun_7 = (text, num) => {
    document.write(`<ul>`)
    for (let i = 0; i < num; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

fun_7('Friday', 5)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let fun_8 = (arr) => {
    document.write(`<ul>`)
    for (let arrElement of arr) {
        document.write(`<li>${arrElement}</li>`)
    }
    document.write(`</ul>`)
}

fun_8([1, 3, true, false, 'hello', 'friday'])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {id: 1, name: 'Max', age: 22},
    {id: 2, name: 'Dima', age: 21},
    {id: 3, name: 'Vasia', age: 12}
]

let fun_9 = (users) => {
    for (let user of users) {
        document.write(`<div>id: ${user.id} name: ${user.name} age : ${user.age}</div>`)
    }
}

fun_9(users)
// - створити функцію яка повертає найменьше число з масиву
let arrNum = [5, 2, 4, 6, 3, 7, 9]
let fun_10 =(someArr) => {
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
console.log(fun_10(arrNum))
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let arrNum_1 = [1, 2, 6, 8, 2, 1]

let fun_11 = (arr)=> {
    let result = 0
    for (let arrElement of arr) {
        result += arrElement
    }
    return result
}

console.log(fun_11((arrNum_1)))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let someSwapArray = [11, 22, 33, 44, 55];
let fun_12 = (arr, index1, index2) => {
    let one = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = one
    return arr
}

console.log(fun_12(someSwapArray, 0 ,1))
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let price = [
    {currency: 'USD', value: 40},
    {currency: 'EUR', value: 42},
    {currency: 'PLN', value: 8}
]
let fun_13 =(sumUAH, currencyValues, exchangeCurrency) => {
    for (let item of currencyValues) {
        if (item.currency === exchangeCurrency){
            return sumUAH / item.value
        }
    }
}

console.log(fun_13(10000, price, 'USD'))