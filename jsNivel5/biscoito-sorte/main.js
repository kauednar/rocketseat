const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomCookie = Math.round(Math.random() * 10)

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleTryClick(event) {
    event.preventDefault()

    if(randomCookie == 1) {
        toggleScreen()
    } else if(randomCookie == 2) {
        toggleScreen()
        screen2.querySelector("p").innerText = `A vida trará coisas boas se tiver paciência`
    } else if(randomCookie == 3){
        toggleScreen()
        screen2.querySelector("p").innerText = `Não compense na ira o que lhe falta na razão`
    } else if(randomCookie == 4) {
        toggleScreen()
        screen2.querySelector("p").innerText = `Defeitos e virtudes são apenas dois lados da mesma moeda`
    } else if(randomCookie == 5){
        toggleScreen()
        screen2.querySelector("p").innerText = `A maior de todas as torres começa no solo`
    } else if(randomCookie == 6) {
        toggleScreen()
        screen2.querySelector("p").innerText = `Não há que ser forte. Há que ser flexível`
    } else if(randomCookie == 7){
        toggleScreen()
        screen2.querySelector("p").innerText = `Siga os bons e aprenda com eles`
    } else if(randomCookie == 8) {
        toggleScreen()
        screen2.querySelector("p").innerText = `O bom-senso vale mais do que muito conhecimento.`
    } else if(randomCookie == 9){
        toggleScreen()
        screen2.querySelector("p").innerText = `Sem o fogo do entusiasmo, não há o calor da vitória`
    } else {
        toggleScreen()
        screen2.querySelector("p").innerText = `O riso é a menor distância entre duas pessoas`
    }
}

function handleResetClick() {
    toggleScreen()
    randomCookie = Math.round(Math.random() * 10)
}