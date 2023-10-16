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
    return `A média do(a) aluno(a) ${student.name} é: ${((student.firstScore + student.secondScore) / 2)}
    `
}

for (let student of students) {
    let scoreMSG = mediaScore(student)
    alert(scoreMSG)
}