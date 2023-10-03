let result = prompt("Adivinhe o numero que estou pensando? Entre 0 e 10:")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

while(Number(result) != randomNumber){
    result = prompt("Erro, tente novamente:")
    xAttempts++
}

alert(`Parabens, você conseguiu acertar em ${xAttempts} tentativas`)