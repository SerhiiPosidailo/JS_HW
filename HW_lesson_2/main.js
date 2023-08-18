// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let someArr = [234, 'hello', true, 2.75, 'age', false, 'name', 'okten', 800, 7]
console.log(someArr[0])
console.log(someArr[1])
console.log(someArr[2])
console.log(someArr[3])
console.log(someArr[4])
console.log(someArr[5])
console.log(someArr[6])
console.log(someArr[7])
console.log(someArr[8])
console.log(someArr[someArr.length-1])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let bookDescription_1 = {
    title: 'against the path to victory',
    pageCount: 376,
    genre: 'eSports'
}
let bookDescription_2 = {
    title: 'Crash Course in Python.',
    pageCount: 600,
    genre: 'teaching'
}
let bookDescription_3 = {
    title: 'The Wolf of Wall Street',
    pageCount: 576,
    genre: 'on real events'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let bookDescriptionNameAge_1 = {
    title: 'against the path to victory',
    pageCount: 376,
    genre: 'eSports',
    authors: [
        {name : 'Danylo Zeus Teslenko', age: 35}
    ],
}
let bookDescriptionNameAge_2 = {
    title: 'Crash Course in Python.',
    pageCount: 600,
    genre: 'teaching',
    authors: [
        {name: 'Eric Matthes', age: 48}
    ],
}
let bookDescriptionNameAge_3 = {
    title: 'The Wolf of Wall Street',
    pageCount: 576,
    genre: 'on real events',
    authors: [
        {name :	'Jordan Belfort', age : 56}
    ],
}

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {name: 'Vasia', username: 'Vasilian', password: 1234567},
    {name: 'Petia', username: 'Petr', password: 22345},
    {name: 'Olga', username: 'Ol', password: 22667788},
    {name: 'Dima', username: 'Drim', password: 825242},
    {name: 'Taras', username: 'Tras', password: 252113344},
    {name: 'Geka', username: 'GK', password: 8463829},
    {name: 'Vika', username: 'Tori', password: 9442189},
    {name: 'Semen', username: 'Seven', password: 66699994444},
    {name: 'Vlad', username: 'Vladislav', password: 1777555444222222},
    {name: 'Maxim', username: 'Max', password: 123456789},
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)

//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = +prompt('pleas entry number')
if (a !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('entry time')
if (time === 0 && time <= 14) {
    console.log('first quarter')
} else if (time >= 15 && time <= 29 ){
    console.log('second quarter')
} else if (time >= 30 && time <= 44){
    console.log('third quarter')
} else if (time >= 45 && time <= 59){
    console.log('fourth quarter')
} else{
    console.log('went beyond the time space')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('entry number day')
if (day === 0){
    console.log('there is no such day of the month')
} else if (day === 1 || day <= 11) {
    console.log('the FIRST half of the month')
} else if (day <= 22) {
    console.log('the SECOND half of the month')
} else if (day <= 31) {
    console.log('the THIRD half of the month')
} else {
    console.log('a maximum of 31 days per month')
}

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
let userNumber = +prompt('entry number week')
switch (userNumber){

    case 1:
        console.log('Monday')
        break

    case 2:
        console.log('Tuesday')
        break

    case 3:
        console.log('Wednesday')
        break

    case 4:
        console.log('Thursday')
        break

    case 5:
        console.log('Friday')
        break

    case 6:
        console.log('Saturday')
        break

    case 7:
        console.log('Sunday')
        break

    default :
        console.log('7 days a week')
}
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let x = false
if (x === false || x === null || x === undefined || x === NaN || x === '' || x === 0){
    console.log('default')
}else{
    console.log(x)
}

//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
}


