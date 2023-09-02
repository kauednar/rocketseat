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


// Transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula

let numero = 535.4545433
console.log(numero.toFixed(2).replace(".", ","))

// Transforme letras minusculas em maiusculas / Ou o contrario .toLowerCase()

let word1 = "Programar é muito dificil"
console.log(word1.toUpperCase())

// Manipulando strings e Arrays



// Separe um texto que contem espaços em um novo arraay onde cadaa texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _

let phrase = "Eu quero viver"
let myArray = phrase.split(" ")
console.log(myArray)

let phraseWidthUnderscore = myArray.join("_")
console.log(phraseWidthUnderscore.toLowerCase())

// Verificando se um texto contém a palavra dinheiro

let frase = "Eu quero dinheiro"
console.log(frase.includes("dinheiro"))


// Criar Array com construtor

let myArray2 = new Array('a', 'b', 'c')
console.log(myArray2)

// Contar elementos de um Array

console.log([
    "a",
    "b",
    "c"
].length)

// Transformar uma caadeia de caaracterese em elementos de um array

let word2 = "manipulação"
console.log(Array.from(word))


// MANIPULANDO ARRAYS

let techs = ["html", "css", "js"]

// adicionar um item no fim
techs.push("nodejs")
// adicionar no começo
techs.unshift("sql")
// remover do fim
techs.pop()
// remover do começo
techs.shift()
// pegar somente alguns elementos do array
//console.log(techs.slice(1,3))

// remover 1 ou mais itens em qualquer posição do array
//techs.splice(1, 2)

// encontrar a posição de um elemtno no array
let index = techs.indexOf('css')
console.log(index)
techs.splice(index, 1)


console.log(techs)