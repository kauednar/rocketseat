// function scope
let subject = 'create video' // esse tem um significado

function createThink(subject) { 
    subject = 'study' // esse tem outro significado
    return subject
}

console.log(subject)
console.log(createThink(subject))