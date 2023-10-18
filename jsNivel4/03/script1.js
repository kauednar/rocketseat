alert('Vamos criar uma calculadora')

let firstNumber = prompt('Digite o primeiro numero')
let secondNumber = prompt('Digite o segundo numero')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber

alert(`Resultado da soma: ${sum}`)
alert(`Resultado da subtraçãao: ${sub}`)
alert(`Resultado da multiplicação: ${multi}`)
alert(`Resultado da divisão: ${div}`)
alert(`Resultado do resto da divisão: ${restDiv}`)