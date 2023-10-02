const url = new URL(location.href).searchParams.get('post')

const urlPost = `https://jsonplaceholder.typicode.com/posts/${url}`

const divWrapper = document.createElement('div')
let h1UserId = document.createElement('h1')
let h2Id = document.createElement('h2')
let h3Title = document.createElement('h3')
let h3Body = document.createElement('h3')
let hr = document.createElement('hr')
divWrapper.classList.add('wrapper')


fetch(urlPost)
    .then(value => value.json())
    .then(result => {
        console.log(result)
        h1UserId.innerText = `UserID: ${result.userId} `
        h2Id.innerText = `ID: ${result.id} `
        h3Title.innerText = `Title: ${result.title}`
        h3Body.innerText = `Body: ${result.body}`
        divWrapper.append(h1UserId, h2Id, h3Title, h3Body, hr)
        document.body.append(divWrapper)
    })

let divConteinerWrapper = document.createElement('div')
divConteinerWrapper.classList.add('wrapConteiner')
fetch(`https://jsonplaceholder.typicode.com/posts/${url}/comments`)
    .then(value => value.json())
    .then(comments => {
        console.log(comments)
        for (const comment of comments) {
            let divElement = document.createElement('div');
            divElement.classList.add('comment')
            for (const value in comment) {
                let h4 = document.createElement('h4')
                h4.innerText = `${value}: ${comment[value]}`
                divElement.appendChild(h4)
                divConteinerWrapper.append(divElement)
            }
            divWrapper.appendChild(divConteinerWrapper)
        }


    })
