// const url = new URL(location.href)
// const urlId = url.searchParams.get('data')

const url = new URL(location.href).searchParams.get('data')

const conteiner = document.getElementById('conteiner')

let urlNew = `https://jsonplaceholder.typicode.com/users/${url}`

fetch(urlNew)
    .then(value => value.json())
    .then(user => {
        const ul = document.createElement('ul')
        userBilder(user, ul)
        conteiner.append(ul, button)

    })

function userBilder(userObject, tag) {
    for (const key in userObject) {
        if (typeof userObject[key] !== 'object') {
            let li = document.createElement('li')
            li.innerHTML = `<b>${key}</b>: ${userObject[key]}`
            tag.appendChild(li)
        } else {
            let ul = document.createElement('ul')
            ul.innerHTML = `<b>${key}</b>`
            tag.appendChild(ul)
            userBilder(userObject[key], ul)
        }

    }
}

let button = document.createElement('button')
button.innerText = 'post of current user'
button.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${url}/posts`)
        .then(value => value.json())
        .then(res => {
            for (const key in res) {
                let divWrap = document.createElement('div')
                let p = document.createElement('p')
                let buttonPost = document.createElement('button')
                buttonPost.innerText = 'Detailed information about the current post'
                p.innerHTML = `<b>title</b>: ${JSON.stringify(res[key].title)}`
                buttonPost.onclick = () => {
                    location.href = `./post-details.html?post=${JSON.stringify(res[key].id)}`
                }
                divWrap.append(p, buttonPost)
                conteiner.appendChild(divWrap)
            }
        })
    button.remove()

}




