// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id
    this.name = name
    this.surname = surname
    this.email = email
    this.phone = phone
}

let users = [
    new User(57, 'Serhii', 'Posidailo', 'serh@gamil.com', '0631111111'),
    new User(34, 'Vasi', 'Vasilov', 'vasia@gamil.com', '0632222222'),
    new User(20, 'Kolia', 'Kolian', 'kolya@gamil.com', '0633333333'),
    new User(77, 'Dima', 'Dorian', 'dima@gamil.com', '0634444444'),
    new User(10, 'Max', 'Maximus', 'max@gamil.com', '0635555555'),
    new User(6, 'Semen', 'Semen', 'semen@gamil.com', '0636666666'),
    new User(31, 'Vika', 'Vikipedia', 'vika@gamil.com', '0637777777'),
    new User(58, 'Svyat', 'Svyatik', 'Svyat@gamil.com', '0638888888'),
    new User(83, 'Roma', 'Romero', 'rom@gamil.com', '0639999999'),
    new User(100, 'Loki', 'Lok', 'loki@gamil.com', '0631010101'),
]
console.log(users)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let userFilter = users.filter(user => user.id % 2 === 0)
console.log(userFilter)


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let userSort = users.sort((a, b) => a.id - b.id)
console.log(userSort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id
        this.name = name
        this.surname = surname
        this.email = email
        this.phone = phone
        this.order = order
    }
}

let userClass = [
    new Client(23, 'Dima', 'Dimka', 'dima@gmail.com', '0931111111', ['tomato', 'kivi']),
    new Client(43, 'Vika', 'Vika', 'vika@gmail.com', '0932222222', ['tomato', 'banana']),
    new Client(44, 'Kolya', 'Kolyaka', 'kolia@gmail.com', '0933333333', ['tomato', 'banana', 'kivi']),
    new Client(76, 'Olia', 'Olka', 'olia@gmail.com', '0934444444', ['tomato', 'banana', 'apple', 'potato']),
    new Client(19, 'Roma', 'Romka', 'roma@gmail.com', '0935555555', ['tomato']),
    new Client(2, 'Serhii', 'Serj', 'serj@gmail.com', '0936666666', ['tomato', 'banana', 'bread']),
    new Client(31, 'Max', 'Maxik', 'max@gmail.com', '0937777777', ['buter', 'tomato', 'banana', 'bread', 'juice']),
    new Client(39, 'Svyat', 'svyatik', 'svyat@gmail.com', '0938888888', ['banana']),
    new Client(80, 'Semen', 'Sem', 'semen@gmail.com', '0939999999', ['tomato', 'lime', 'banana']),
    new Client(68, 'Lion', 'Lion', 'lion@gmail.com', '0931010101', ['tomato', 'banana', 'juice']),
]
console.log(userClass)

let userSortMinMax = userClass.sort((a, b) => a.order.length - b.order.length)
console.log(userSortMinMax)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
function Cars(model, producer, year, maxSpead, engineCapacity) {
    this.model = model
    this.producer = producer
    this.year = year
    this.maxSpead = maxSpead
    this.engineCapacity = engineCapacity
    this.drivers = []
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.driver = function () {
        console.log(`we drive at a speed of ${maxSpead} km per hour`)
    };
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function () {
        console.log('--------------------------------')
        console.log('ALL INFORMATION ABOUT THE CAR')
        console.log('--------------------------------')
        console.log(`model - ${this.model}`)
        console.log(`producer - ${this.producer}`)
        console.log(`year - ${this.year}`)
        console.log(`Max Spead - ${this.maxSpead}`)
        console.log(`Engine Capacity - ${this.engineCapacity}`)
        console.log(`Drivers - ${JSON.stringify(this.drivers)}`)
    }
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed = function (newSpead) {
        this.maxSpead += newSpead
    }
// -- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue) {
        this.year = newValue
    }
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (name, age, status) {
        this.drivers.push(new Driver(name, age, status))
    }
}

function Driver(name, age, status) {
    this.name = name
    this.age = age
    this.status = status
}

let car_1 = new Cars('Opel', 'GM', 2000, 160, '1,4')
car_1.driver()
car_1.info()
car_1.increaseMaxSpeed(20)
car_1.info()
car_1.changeYear(2003)
car_1.info()
car_1.addDriver('Serj', 29, true)
car_1.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class Car_2 {
    constructor(model, producer, year, maxSpead, engineCapacity) {
        this.model = model
        this.producer = producer
        this.year = year
        this.maxSpead = maxSpead
        this.engineCapacity = engineCapacity
        this.drivers = []
    }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    drive() {
        console.log(`we drive at a speed of ${this.maxSpead} km per hour`)
    }

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    info() {
        console.log('--------------------------------')
        console.log('ALL INFORMATION ABOUT THE CAR')
        console.log('--------------------------------')
        console.log(`model - ${this.model}`)
        console.log(`producer - ${this.producer}`)
        console.log(`year - ${this.year}`)
        console.log(`Max Spead - ${this.maxSpead}`)
        console.log(`Engine Capacity - ${this.engineCapacity}`)
        console.log(`Drivers - ${JSON.stringify(this.drivers)}`)
    }

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    increaseMaxSpeed(newSpeed) {
        this.maxSpead += newSpeed
    }

// -- changeYear (newValue) - змінює рік випуску на значення newValue
    changeYear(newValue) {
        this.year = newValue
    }

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    addDriver(name, age, status) {
        this.drivers.push(new Driver(name, age, status))
    }
}

let car_2 = new Car_2('Opel', 'GM', 2000, 160, '1.4')
car_2.drive()
car_2.info()
car_2.changeYear(2023)
car_2.info()
car_2.increaseMaxSpeed(200)
car_2.info()
car_2.addDriver('Serhii', 29, true)
car_2.info()

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

class Cinderella extends Person {
    constructor(name, age, footSize) {
        super(name, age);
        this.footSize = footSize
    }
}

class Prince extends Person {
    constructor(name, age, boot) {
        super(name, age);
        this.boot = boot
    }

    findCinderellas(arr) {
        return arr.sort((a, b) => a.age - b.age).find((princesa) => princesa.footSize === this.boot)
    }

    findCinderellas_1(arr) {
        for (let cinderella of arr) {
            if (cinderella.footSize === this.boot)
                return cinderella
        }
    }

}

let allCinderella = [
    new Cinderella('Nika', 23, 35),
    new Cinderella('Vika', 22, 33),
    new Cinderella('Mira', 30, 38),
    new Cinderella('Liza', 18, 32),
    new Cinderella('lisa', 20, 35),
    new Cinderella('Lola', 38, 40),
    new Cinderella('Valya', 29, 36),
    new Cinderella('Marg', 33, 34),
    new Cinderella('Mono', 17, 31),
    new Cinderella('Olya', 19, 32),
];
let prince_1 = new Prince('Artur', 19, 35)
console.log(prince_1.findCinderellas_1(allCinderella));
let prince_2 = new Prince('Loki', 30, 36)
console.log(prince_2.findCinderellas(allCinderella))
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
