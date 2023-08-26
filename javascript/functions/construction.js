/* 
    Function() constructor
    * expressão new
    * criar um novo objeto
    * this keyword

*/

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const kaue = new Person("Kaue")
const joao = new Person("Joao")
console.log(kaue.walk())
console.log(joao.walk())