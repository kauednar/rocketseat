// 1. Declare uma variavel de nome wight
//let weight

// 2. Que tipo de dado é a variavel acima?
//console.log(typeof weight)

/* 3. Declare uma variavel e atribua valores para cada um dos dados:
    * name: String
    * age: Number (integer)
    * stars: Number (float)
    * isSubscribed: Boolean
*/

//let name = "String"
//let age = 18
//let stars = 4.8
//let isSubscribed = true

// 4. A variável student abaixo é de que tipo de dados?

let student = {
    name: "Kauê",
    age: 21,
    weight: 90.7,
    isSubscribed: true,
}

//console.log(typeof student)

// 4.1 Atribua a ela as mesmas propriedades e valores do exercício 3

// 4.2 Mostre no console as seguintes mensagens
/*
<name> de idade <age> pesa <weight> pelos valores de cada objeto
*/

//console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

// 5. Declare uma variável do tipo array, de nome students e atribua nenhum valor, ou seja, somente um array vazio

let students = []


// 6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)

students = [
    student
]

// 7. Coloque no console o valor da posição zero do array acima

console.log(students[0])

// 8. Crie um novo student e coloque ele na posição do Array students
 
const john = {
    name: "John",
    age: 34,
    weight: 82.4,
    isSubscribed: false,
}

students[1] = john


console.log(students)
// 9. Sem rodar o código responda qual é a resposta do código abaixo e por que? Após sua resposta, rode o código e veja se você acertou
/*



console.log(a)
var a = 1
*/