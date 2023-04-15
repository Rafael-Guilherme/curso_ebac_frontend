const alunosDaTurma = [
    {
        nome: "José",
        nota: 5
    },
    {
        nome: "Henrique",
        nota: 5.6
    },
    {
        nome: "Antônio",
        nota: 8
    },
    {
        nome: "Paula",
        nota: 9.5
    },
    {
        nome: "Roberta",
        nota: 7.25
    },
    {
        nome: "Miguel",
        nota: 8.25
    },
    {
        nome: "Rafael",
        nota: 6.25
    },
    {
        nome: "Fernando",
        nota: 4.25
    }
]

const alunosQuePassaram = alunosDaTurma.filter((item) => {
    return item.nota >= 6
})

console.log(alunosQuePassaram)