// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let form_1 = document.forms.form_1
form_1.onsubmit = function (e) {
    e.preventDefault()
    let newObject = {
        name: this.name.value,
        surname: this.surname.value,
        age: this.age.value
    }


    let div_1 = document.createElement('div')
    for (let element in newObject) {
        let h4 = document.createElement('h4')
        h4.innerText = `${element}: ${newObject[element]}`
        div_1.appendChild(h4)
    }
    document.body.appendChild(div_1)
}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

localStorage.setItem('number', String(+localStorage.getItem('number') + 1));
document.getElementsByClassName('count')[0].innerText = localStorage.getItem('number');

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
let json = localStorage.getItem('sessions')
let sessions = json ? JSON.parse(json) : [];
sessions.push ({
    date: new Date().toISOString(),
});
localStorage.setItem('sessions', JSON.stringify(sessions));
// =========================
// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let users = [
    {id: 1, name: 'John', surname: 'Doe', age: 25, status: true},
    {id: 2,name: 'Jane', surname: 'Smith', age: 30, status: false},
    {id: 3,name: 'Alice', surname: 'Johnson', age: 20, status: false},
    {id: 4,name: 'Bob', surname: 'Lee', age: 35, status: false},
    {id: 5,name: 'Emily', surname: 'Brown', age: 28, status: true},
    {id: 6,name: 'David', surname: 'Clark', age: 22, status: false},
    {id: 7,name: 'Sarah', surname: 'Davis', age: 29, status: true},
    {id: 8,name: 'Mark', surname: 'White', age: 32, status: false},
    {id: 9,name: 'Olivia', surname: 'Wilson', age: 26, status: true},
    {id: 10,name: 'Brian', surname: 'Taylor', age: 31, status: false},
    {id: 11,name: 'Victoria', surname: 'Walker', age: 27, status: true},
    {id: 12,name: 'Max', surname: 'Garcia', age: 24, status: false},
    {id: 13,name: 'Julia', surname: 'Anderson', age: 33, status: true},
    {id: 14,name: 'Robert', surname: 'Scott', age: 36, status: false},
    {id: 15,name: 'Sophia', surname: 'Green', age: 23, status: true},
    {id: 16,name: 'Daniel', surname: 'Jackson', age: 27, status: false},
    {id: 17,name: 'Mia', surname: 'Adams', age: 21, status: true},
    {id: 18,name: 'Anthony', surname: 'Thomas', age: 29, status: false},
    {id: 19,name: 'Isabella', surname: 'Mitchell', age: 32, status: true},
    {id: 20,name: 'William', surname: 'Parker', age: 28, status: false},
    {id: 21,name: 'Ava', surname: 'Turner', age: 26, status: true},
    {id: 22,name: 'Michael', surname: 'Campbell', age: 30, status: true},
    {id: 23,name: 'Elizabeth', surname: 'Cooper', age: 31, status: true},
    {id: 24,name: 'David', surname: 'Edwards', age: 25, status: true},
    {id: 25,name: 'Grace', surname: 'Collins', age: 27, status: true},
    {id: 26,name: 'Christopher', surname: 'Stewart', age: 34, status: false},
    {id: 27,name: 'Chloe', surname: 'Sanchez', age: 22, status: false},
    {id: 28,name: 'Kevin', surname: 'Morris', age: 32, status: false},
    {id: 29,name: 'Natalie', surname: 'Rogers', age: 28, status: true},
    {id: 30,name: 'Matthew', surname: 'Reed', age: 26, status: true},
    {id: 31,name: 'Hannah', surname: 'Cook', age: 24, status: false},
    {id: 32,name: 'Andrew', surname: 'Morgan', age: 33, status: true},
    {id: 33,name: 'Ella', surname: 'Bell', age: 31, status: false},
    {id: 34,name: 'Joshua', surname: 'Murphy', age: 27, status: true},
    {id: 35,name: 'Avery', surname: 'Rivera', age: 23, status: true},
    {id: 36,name: 'Ryan', surname: 'Cooper', age: 30, status: true},
    {id: 37,name: 'Sofia', surname: 'Gomez', age: 25, status: true},
    {id: 38,name: 'Justin', surname: 'Perez', age: 29, status: true},
    {id: 39,name: 'Taylor', surname: 'Reyes', age: 26, status: false},
    {id: 40,name: 'Madison', surname: 'Scott', age: 32, status: false},
    {id: 41,name: 'Kai', surname: 'Gallagher', age: 23, status: false},
    {id: 42,name: 'Brielle', surname: 'Figueroa', age: 49, status: true},
    {id: 43,name: 'Averie', surname: 'Acosta', age: 33, status: true},
    {id: 44,name: 'Jada', surname: 'Boyd', age: 29, status: false},
    {id: 45,name: 'Jaylen', surname: 'Ellison', age: 46, status: true},
    {id: 46,name: 'Jovani', surname: 'Walters', age: 56, status: true},
    {id: 47,name: 'Allan', surname: 'Lambert', age: 25, status: false},
    {id: 48,name: 'Tristan', surname: 'Shepard', age: 61, status: true},
    {id: 49,name: 'Livia', surname: 'Frost', age: 37, status: true},
    {id: 50,name: 'Lila', surname: 'Ramirez', age: 54, status: true},
    {id: 51,name: 'Jade', surname: 'Myers', age: 38, status: true},
    {id: 52,name: 'Shayna', surname: 'Chen', age: 29, status: false},
    {id: 53,name: 'Leandro', surname: 'Cox', age: 22, status: true},
    {id: 54,name: 'Elianna', surname: 'Hartman', age: 50, status: true},
    {id: 55,name: 'Malcolm', surname: 'Patrick', age: 40, status: false},
    {id: 56,name: 'Briana', surname: 'Cooke', age: 31, status: true},
    {id: 57,name: 'Gwendolyn', surname: 'Maldonado', age: 45, status: true},
    {id: 58,name: 'Kadence', surname: 'Gregory', age: 29, status: true},
    {id: 59,name: 'Lauryn', surname: 'Hoffman', age: 26, status: false},
    {id: 60,name: 'Jaida', surname: 'Graham', age: 41, status: true},
    {id: 61,name: 'Jasper', surname: 'Waters', age: 37, status: false},
    {id: 62,name: 'Charli', surname: 'Byrd', age: 49, status: false},
    {id: 63,name: 'Eliezer', surname: 'Manning', age: 60, status: true},
    {id: 64,name: 'Giselle', surname: 'Colon', age: 34, status: true},
    {id: 65,name: 'Colten', surname: 'Ballard', age: 57, status: true},
    {id: 66,name: 'Nina', surname: 'Perez', age: 24, status: false},
    {id: 67,name: 'Gunnar', surname: 'Rose', age: 30, status: true},
    {id: 68,name: 'Emery', surname: 'Bryant', age: 47, status: true},
    {id: 69,name: 'Emmy', surname: 'Vasquez', age: 44, status: true},
    {id: 70,name: 'Landon', surname: 'Nichols', age: 34, status: false},
    {id: 71,name: 'Livia', surname: 'Fields', age: 51, status: true},
    {id: 72,name: 'Kobe', surname: 'Bentley', age: 25, status: false},
    {id: 73,name: 'Samir', surname: 'Stephens', age: 28, status: false},
    {id: 74,name: 'Kian', surname: 'Cameron', age: 39, status: true},
    {id: 75,name: 'Amiya', surname: 'Harris', age: 52, status: true},
    {id: 76,name: 'Alyssa', surname: 'Foster', age: 23, status: false},
    {id: 77,name: 'Jada', surname: 'Boyd', age: 29, status: true},
    {id: 78,name: 'Jaylen', surname: 'Ellison', age: 46, status: true},
    {id: 79,name: 'Jovani', surname: 'Walters', age: 56, status: false},
    {id: 80,name: 'Allan', surname: 'Lambert', age: 25, status: false},
    {id: 81,name: 'Tristan', surname: 'Shepard', age: 61, status: true},
    {id: 82,name: 'Livia', surname: 'Frost', age: 37, status: true},
    {id: 83,name: 'Lila', surname: 'Ramirez', age: 54, status: true},
    {id: 84,name: 'Jade', surname: 'Myers', age: 38, status: false},
    {id: 85,name: 'Shayna', surname: 'Chen', age: 29, status: true},
    {id: 86,name: 'Leandro', surname: 'Cox', age: 22, status: true},
    {id: 87,name: 'Elianna', surname: 'Hartman', age: 50, status: true},
    {id: 88,name: 'Malcolm', surname: 'Patrick', age: 40, status: false},
    {id: 89,name: 'Briana', surname: 'Cooke', age: 31, status: true},
    {id: 90,name: 'Gwendolyn', surname: 'Maldonado', age: 45, status: false},
    {id: 91,name: 'Natalie', surname: 'Rogers', age: 28, status: true},
    {id: 92,name: 'Matthew', surname: 'Reed', age: 26, status: false},
    {id: 93,name: 'Hannah', surname: 'Cook', age: 24, status: true},
    {id: 94,name: 'Andrew', surname: 'Morgan', age: 33, status: false},
    {id: 95,name: 'Ella', surname: 'Bell', age: 31, status: false},
    {id: 96,name: 'Joshua', surname: 'Murphy', age: 27, status: true},
    {id: 97,name: 'Avery', surname: 'Rivera', age: 23, status: false},
    {id: 98,name: 'Ryan', surname: 'Cooper', age: 30, status: false},
    {id: 99,name: 'Sofia', surname: 'Gomez', age: 25, status: true},
    {id: 100,name: 'Justin', surname: 'Perez', age: 29, status: false}
];

function update() {
    let ul = document.createElement('ul');
    document.getElementsByClassName('div-wraper')[0].innerHTML = '';
    document.getElementsByClassName('div-wraper')[0].appendChild(ul);
    for (let i = +localStorage.getItem('startNumber'), j = 0; j < 10 && i < users.length; j++, i++) {
        const user = users[i];
        let li = document.createElement('li');
        li.innerText = `${user.id} ${user.name} ${user.surname} ${user.age} ${user.status}`;
        ul.appendChild(li);
    }
}
update();
document.getElementById('prevButton').addEventListener('click', function () {
    let startNumber = JSON.parse(localStorage.getItem('startNumber')) || 0;
    localStorage.setItem('startNumber', startNumber < 10 ? 0 : startNumber - 10);
    update();
});
document.getElementById('nextButton').addEventListener('click', function () {
    let startNumber = JSON.parse(localStorage.getItem('startNumber')) || 0;
    if (startNumber + 10 < users.length) localStorage.setItem('startNumber', String(startNumber + 10));
    update();
});

//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let h1 = document.createElement('h1')
h1.innerText = 'hello'
h1.setAttribute('id', 'text')

let buttonDel = document.createElement('button')
buttonDel.innerText = 'del'

document.body.append(h1, buttonDel)
buttonDel.onclick = function () {
    h1.setAttribute('id', '')
}

//  - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let form_2 = document.forms.form_2

form_2.onsubmit = function (e){
    e.preventDefault()
    if (form_2.age.value < 18){
        let h1Alert = document.createElement('h1')
        h1Alert.innerText = `your age ${form_2.age.value} is less than 18 `
        document.body.append(h1Alert)
    }

}
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let rowsElement = document.getElementById('rows');
let cellsElement = document.getElementById('cells');
let contentElement = document.getElementById('content');
let generElement = document.getElementById('buttonGener');
let tableElement = document.getElementById('table');

function onGenerateButtonClick() {
    let rows = rowsElement.value;
    let cells = cellsElement.value;
    let content = contentElement.value;

    tableElement.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        let rowElement = document.createElement('tr');

        for (let j = 0; j < cells; j++) {
            let cellElement = document.createElement('td');
            cellElement.textContent = content;

            rowElement.appendChild(cellElement);
        }

        tableElement.appendChild(rowElement);
    }
}

generElement.addEventListener('click', onGenerateButtonClick);
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
let priceElement = document.getElementById('price');

let price = parseInt(localStorage.getItem('price')) || 100;

let lastUpdateTime = parseInt(localStorage.getItem('lastUpdateTime')) || 0;

let nowTime = Date.now();

if (nowTime - lastUpdateTime > 10 * 1000) {
    price += 10;

    localStorage.setItem('price', price);

    localStorage.setItem('lastUpdateTime', nowTime);
}

priceElement.textContent = price;