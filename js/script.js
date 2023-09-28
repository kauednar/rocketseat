alert('Vamos calcular a média do aluno')

let name = prompt('Qual o nome do aluno?')
let firstGrade = prompt('Qual a primeira nota?')
let secondGrade = prompt('Qual a segunda nota?')
let thirdGrade = prompt('Qual a terceira nota?')

firstGrade = Number(firstGrade)
secondGrade = Number(secondGrade)
thirdGrade = Number(thirdGrade)

const average = ((firstGrade + secondGrade + thirdGrade) / 3)

