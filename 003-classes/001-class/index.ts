// class Pessoa {
//     nome: string;
//     idade: number;

//     constructor(nome: string, idade: number) {
//         this.nome = nome;
//         this.idade = idade;
//     }
// }

// const pessoa1 = new Pessoa("Luciana Pepe", 38);

// console.log(pessoa1.nome);
// console.log(pessoa1.idade);

class Pessoa {
    nome: string = "";
    idade: number = 0;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("Luciana Pepe", 38);
const pessoa2 = new Pessoa("Jonas Silva", 76);

console.log(pessoa1.nome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.idade);