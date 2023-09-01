// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let one = 'hello world'
let two = 'lorem ipsum'
let three = 'javascript is cool'
console.log(one.length)
console.log(two.length)
console.log(three.length)
// ---------------------------OR---------------------------------
let string_1 = ['hello world', 'lorem ipsum', 'javascript is cool']
string_1.map(x => console.log(x.length))
// ------------OR---------------------------------------------------------
let string_1_1 = ['hello world', 'lorem ipsum', 'javascript is cool'].map(x => console.log(x.length))

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
let one_1 = 'hello world'
let two_1 = 'lorem ipsum'
let three_1 = 'javascript is cool'
console.log(one_1.toUpperCase())
console.log(two_1.toUpperCase())
console.log(three_1.toUpperCase())
// ------------------------------OR--------------------------------------
let string_2 = ['hello world', 'lorem ipsum', 'javascript is cool']
string_2.map(st => console.log(st.toUpperCase()))


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let one_2 = 'HELLO WORLD'
let two_2 = 'LOREM IPSUM'
let three_2 = 'JAVASCRIPT IS COOL'
console.log(one_2.toLowerCase())
console.log(two_2.toLowerCase())
console.log(three_2.toLowerCase())
//--------------------------------------------OR----------------------------------
let string_3 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
string_3.map(st_3 => console.log(st_3.toLowerCase()))


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str = ' dirty string   '
let newStr = str.trim()
console.log(newStr)
// ------------------------OR-------------------------------
let str_1 = ' dirty string   '.trim()
console.log(str_1)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str_2 = 'Ревуть воли як ясла повні'

let stringToarray = (str) => str.split(' ')

let arr = stringToarray(str_2)
console.log(arr)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0]

let newArr = arrNum.map(arr => arr.toString())
console.log(newArr)
// -----------------OR-------------------------------------------

let arrNum_1 = [10, 8, -7, 55, 987, -1011, 0, 1050, 0].map(num => num.toString())
console.log(arrNum_1)


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
let nums = [11, 21, 3]

let sortNums = (num, direction) => {
    if (direction === 'ascending') {
        return num.sort((u1, u2) => u1 - u2)
    }
    return num.sort((u1, u2) => u2 - u1)
}

let res = sortNums(nums, 'ascending')
console.log(res)
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
]
let sortMaxMin = coursesAndDurationArray.sort((u2, u1) => u1.monthDuration - u2.monthDuration)
console.log(sortMaxMin)

let filterMoreThanFive = coursesAndDurationArray.filter(n => n.monthDuration > 5)
console.log(filterMoreThanFive)

let newTipe = coursesAndDurationArray.map((arr, index) => ({id: index, ...arr}))
console.log(newTipe)
// =========================
// - описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let deck = {
    cardSuit: ['spade', 'clubs', 'diamond', 'heart'],
    value: ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'],
    color: ['red', 'black']
}

let allCards = []
let initDeck = () => {
    for (const suit of deck.cardSuit) {
        for (const value of deck.value) {
            if (suit === 'spade' || suit === 'clubs') {
                let color = 'black'
                allCards.push({value: value, suit: suit, color: color})
            } else {
                let color = 'red'
                allCards.push({value: value, suit: suit, color: color})
            }

        }
    }
    return allCards
}

console.log(initDeck())
// - знайти піковий туз
let aceOfSpades = allCards.filter(ace => ace.suit === 'spade' && ace.value === 'ace')
console.log(aceOfSpades)

// - всі шістки
let sixAll = allCards.filter(six => six.value === '6')
console.log(sixAll)

// - всі червоні карти
let allRedCard = allCards.filter(red => red.color === 'red')
console.log(allRedCard)

// - всі буби
let allDiamond = allCards.filter(diamond => diamond.suit === 'diamond')
console.log(allDiamond)

// - всі трефи від 9 та більше
let allClubs_9_andMore = allCards.filter(clubs => clubs.value !== '6' && clubs.value !== '7' && clubs.value !== '8' && clubs.suit === 'clubs')
console.log(allClubs_9_andMore)
// =========================
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let reduse_1 = allCards.reduce((accumulator, card) => {
    accumulator[card.suit].push(card)
    return accumulator
}, {spade: [], clubs: [], diamond: [], heart: []})
console.log(reduse_1)

// -------------------------OR----------------

let reduse_2 = allCards.reduce(function (accumulator, card) {
    if (card.suit === 'spade') {
        accumulator.spade.push(card)
    } else if (card.suit === 'clubs') {
        accumulator.clubs.push(card)
    } else if (card.suit === 'diamond') {
        accumulator.diamond.push(card)
    } else if (card.suit === 'heart'){
        accumulator.heart.push(card)
    }
    return accumulator
}, {spade: [], clubs: [], diamond: [], heart: []})

console.log(reduse_2)


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
let result_1 = coursesArray.filter((one) => one.modules.includes('sass'))
console.log(result_1)
// --написати пошук всіх об'єктів, в який в modules є docker
let result_2 = coursesArray.filter((two) => two.modules.includes('docker'))
console.log(result_2)



