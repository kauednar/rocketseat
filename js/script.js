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

() {
    students[0].firstScore = students[0].secondScore / 2 
}


alert(`A média do(a) aluno ${students[0].name} é  ${students[0].firstScore}`)