function Pessoa(nome, idade, genero) {
    this.nome = nome
    this.idade = idade
    this.genero = genero
    this.falar = function () {
        console.log(`${this.nome} está falando.`)
    }
}

function PessoaTrabalhadora(nome, idade, genero, profissao) {
    Pessoa.call(this, nome, idade, genero)
    this.profissao = profissao
    this.trabalhar = function () {
        console.log(`${this.nome} está trabalhando como ${this.profissao}.`)
    }
}

function PessoaEstudante(nome, idade, genero, curso) {
    Pessoa.call(this, nome, idade, genero)
    this.curso = curso
    this.estudar = function () {
        console.log(`${this.nome} está estudando ${this.curso}.`)
    };
}

const pessoa1 = new Pessoa("João", 30, "masculino")
const pessoa2 = new PessoaTrabalhadora("Maria", 25, "feminino", "desenvolvedora full stack")
const pessoa3 = new PessoaEstudante("Pedro", 20,"masculino","front-end")


pessoa1.falar()
pessoa2.trabalhar()
pessoa3.estudar()
