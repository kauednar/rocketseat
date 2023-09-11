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
 
