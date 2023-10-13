alert("Vamos realizar calculos")
let firstNumber = prompt("Insira um numero:")
let secondNumber = prompt("Insira o segundo numero:")

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const divs = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

const par = sum % 2

alert(`Resultados:
Soma = ${sum}
Subtração = ${sub}
Multiplicação = ${multi}
Divisão = ${divs}
Resto da divisão = ${restDiv}
`)

if (par == 0 ) {
    alert("Numero par")
} else {
    alert("Numero Impar")
}

