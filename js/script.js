/* 
  Dada uma lista de pacientes, descubra o IMC de cada paciente e imprima

  "Paciente X possui o IMC de: Y"

  Onde X é o nome do paciente e Y é o IMC desse paciente

  Crie uma função para fazer o cálculo de IMC
*/

/* peso / (altura * altura) */

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

function printIMC(patient) {
    return `
        O paciente ${patient.name} possui o IMC de ${(patient.weight / (patient.height**2)).toFixed(2)}
    `
}

for (let patient of patients) {
    let IMGmessage = printIMC(patient)
    alert(IMGmessage)
}