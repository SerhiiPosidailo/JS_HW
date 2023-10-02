window.addEventListener('load', function (e){
    e.preventDefault()
    let conteiner = document.getElementById('conteiner')
    let url = 'https://jsonplaceholder.typicode.com/users'
    fetch(url)
        .then(value => value.json())
        .then(users => {
            for (const user of users) {
                let userBlock = document.createElement('div')
                let userId = document.createElement('h3')
                let userName = document.createElement('h3')
                let form = document.createElement('form')
                let button = document.createElement('button')

                userBlock.classList.add('user')
                userId.classList.add('userId')
                userName.classList.add('name')
                button.classList.add('button')
                userId.innerText = `ID: ${user.id}`
                userName.innerText = `Name: ${user.name}`
                button.innerText = 'More'

                form.appendChild(button)
                form.setAttribute('method', 'post')
                form.setAttribute('action', `user-details.html?data=${JSON.stringify(user.id)}`)

                userBlock.append(userId, userName, form)
                conteiner.appendChild(userBlock)
            }
        })
})