let url = new URL(location.href)
let urlJson = url.searchParams.get('value')

let resJson = JSON.parse(urlJson);
console.log(resJson)



let div = document.createElement('div')
let id = document.createElement('h1')
id.innerText = `ID: ${resJson.id}`

let name = document.createElement('h2')
name.innerText = `Name: ${resJson.name}`

let username = document.createElement('h3')
username.innerText = `Username: ${resJson.username}`

let phone = document.createElement('h3')
phone.innerText = `Phone: ${resJson.phone}`

let website = document.createElement('h3')
website.innerText = `Website: ${resJson.website}`

let addressh3 = document.createElement('h3')
addressh3.innerText ='Address:'
let addressul = document.createElement('ul')
for (const resJsonKey in resJson.address) {
    let liAdress = document.createElement('li')
    liAdress.innerText = ` ${resJsonKey} - ${JSON.stringify(resJson.address[resJsonKey])}`
    addressul.appendChild(liAdress)
}
addressh3.appendChild(addressul)
let h3Company = document.createElement('h3')
h3Company.innerText = 'company'
let companyUL = document.createElement('ul')
for (const companyKey in resJson.company) {
    let liCompani = document.createElement('li')
    liCompani.innerText = `${companyKey} - ${resJson.company[companyKey]}`
    companyUL.appendChild(liCompani)
}
h3Company.appendChild(companyUL)
div.append(id ,name, username,phone, website, addressh3, h3Company)
document.body.appendChild(div)

