/* 
  Crie uma lista de pacientes

  Cada paciente dentro da lista, deverá conter
    nome
    idade
    peso
    altura

  Escreva uma lista contendo o nome dos pacientes
*/

const patients = [
  {
    name: "Kauê",
    age: 22,
    weight: 93,
    height: 1.76
  },
  {
    name: "Isabelle",
    age: 21,
    weight: 66,
    height: 1.66
  },
  {
    name: "Caique",
    age: 23,
    weight: 96,
    height: 1.79
  }
]

let patientsNames = []

for(let patient of patients) {
  patientsNames.push(patients.name)
}

alert(`O ${patients[0].name} tem ${patients[0].age} anos`)