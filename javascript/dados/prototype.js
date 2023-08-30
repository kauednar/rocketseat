/*
    Prototype

    *prototype chain
    * __proto__
    
*/

/* 
    Type conversion (typecasting) vs Type coersion

    * Alteração de um tipo de dado para outro tipo

*/

console.log('9' + 5) // concatenação e forçou a alteração de 5 para '5'

console.log(Number('9') + 5) // type conversion

// Manipulando Strings e Numeros

let string = "123"
console.log(Number(string))
let number = 321
console.log(String(number))

// Contar quantos caracteres tem uma palavra e quantos digitos tem um numero

let word = "Paralelepipedo"
console.log(word.length)
let numberr = 1234
console.log(String(numberr).length)