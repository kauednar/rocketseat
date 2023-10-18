alert("Vamos fazer um calculo!")
let numberOne = prompt("Digite o primeiro numero")
let numberTwo = prompt("Digite o segundo numero")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
const div = numberOne / numberTwo
const restDiv = numberOne % numberTwo

alert('Soma: ' + sum)
alert('Subtação: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto da Divisão: ' + restDiv)