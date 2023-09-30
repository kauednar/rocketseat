alert('Vamos calcular a média do aluno!')

let student = prompt("Qual o nome do aluno?")
let firstGrade = prompt("Qual a nota da primeira prova?")
let secondGrade = prompt("Qual a nota da segunda prova?")
let thirdGrade = prompt("Qual a nota da terceira prova?")

let average = (Number(firstGrade) + Number(secondGrade) + Number(thirdGrade)) / 3

alert(`A média do aluno foi ${average.toFixed(2)}`)

if (average > 4) {
    alert(`Parabens ${student}!`)
} else {
    alert("Não foi desta vez! Va para a recuperação")
}