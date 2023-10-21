const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("btnReset")

let randomCookie = Math.round(Math.random() * 10)

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function handleTryClick(event) {
    if(Number(randomCookie) == 1) {
        toggleScreen()
    } else if(Number(randomCookie) == 2) {
        toggleScreen()
        screen2.querySelector("p").innerText = `Nova mensagem`
    } else if(Number(randomCookie) == 3){
        toggleScreen()
        screen2.querySelector("p").innerText = `Nova mensagem 2`
    } else if(Number(randomCookie) == 4) {
        toggleScreen()
        screen2.querySelector("p").innerText = `Nova mensagem 3`
    } else if(Number(randomCookie) == 5){
        toggleScreen()
        screen2.querySelector("p").innerText = `Nova mensagem 4`
    } else if(Number(randomCookie) == 6) {
        toggleScreen()
        screen2.querySelector("p").innerText = `Nova mensagem5`
    } else if(Number(randomCookie) == 7){
        toggleScreen()
        screen2.querySelector("p").innerText = `Nova mensagem 6`
    } else if(Number(randomCookie) == 8) {
        toggleScreen()
        screen2.querySelector("p").innerText = `Nova mensagem 7`
    } else if(Number(randomCookie) == 9){
        toggleScreen()
        screen2.querySelector("p").innerText = `Nova mensagem 8`
    } else {
        toggleScreen()
        screen2.querySelector("p").innerText = `Nova mensagem 9`
    }
}

function handleResetClick() {
    toggleScreen()
    randomNumber = Math.round(Math.random() * 10)
}