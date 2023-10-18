alert('Vamos calcular a média do aluno')

const student = prompt('Qual o nome do aluno?')
let firstGrade = prompt('Qual a nota da primeira prova?')
let secondGrade = prompt('Qual a nota da segunda prova?')
let thirdGrade = prompt('Qual a nota da terceira prova?')

firstGrade = Number(firstGrade)
secondGrade = Number(secondGrade)
thirdGrade = Number(thirdGrade)

const average = (Number(firstGrade) + Number(secondGrade) + Number(thirdGrade)) / 3

alert(`A média do aluno ${student} é ${average.toFixed(2)}`)

if (average > 4){
    alert(`Parabéns ${student}! Você passou no bimestre!`)
} else {
    alert(`Que pena ${student}, você não passou no bimestre, mas não desista! Continue estudando!`)
}