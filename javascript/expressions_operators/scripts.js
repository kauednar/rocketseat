/* Expressões e Operadores

- Expresssions
- Operators
    Binaary
    Unary
    Ternary
*/

let number = 1 // expressão

console.log(number + 2) // Operador Binario

console.log(++number) // Operador Unario
console.log(typeof number) // Operador Unario

console.log(false ? 'alo' : 'nada') // Operador Ternario (Três expressões)

// --

/* 
    new

    * left-hand-side expression
    * criar um novo objeto

*/

let name = new String('Kaue')
name.surName = "Lima"
let age = new Number(21) 
console.log(name.surName, age)

let date = new Date('2023-09-10')
console.log(date)

 
// OPERADORES DE COMPARAÇÃO

// Irá comparar valores e retornar um Boolean como resposta de comparação

let one = 1
let two = 2

//   ==     igual a
console.log(two == 1) // false
console.log(one == "1") // true

//   !=      diferente de
console.log(one != two) // true
console.log(one != 1) // false
console.log(one != "1") // false

//    ===      estritamente igual a
console.log(one === "1") // false
console.log(one === 1) // true

//   !==      estritamente diferente de 
console.log(two !== "2") // true
console.log(two !== 2) // false

//   >     maior que
console.log(one > two) // false

//   >=    maior igual a
console.log(one >= 1) // true
console.log(two >= 1) // true

//    <       menor que
console.log(one < two) // true

//    <=      menor igual a
console.log(one <= two) // true
console.log(one <= 1)  // true
console.log(one <= 0)  // false