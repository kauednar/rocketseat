let students = [
    {
        name: "Kauê",
        firstScore: 10,
        secondScore: 8
    },
    {
        name: "Isabelle",
        firstScore: 7,
        secondScore: 8
    },
    {
        name: "Juanzin",
        firstScore: 5,
        secondScore: 6
    }
]

function mediaScore(student) {
    return ((student.firstScore + student.secondScore) / 2)
}

for (let student of students) {
    let scoreMSG = mediaScore(student)

    if (mediaScore(student) > 7) {
        alert(`A média do(a) aluno(a) ${student.name} é: ${scoreMSG} \nParabéns ${student.name} Você foi aprovado no curso!`)
    } else {
        alert(`A média do(a) aluno(a) ${student.name} é: ${scoreMSG} \nNão foi dessa vez ${student.name}! Tente novamente`)
    }
}