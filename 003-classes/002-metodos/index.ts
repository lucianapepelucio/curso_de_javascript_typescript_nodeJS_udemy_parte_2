class Pessoa {
    nome: string = "";
    idade: number = 0;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string) {
        return `A ${this.nome} comeu ${comida}!`;
    }

    fezAniversario() {
        return `A ${this.nome} fez ${++this.idade} anos!`;
    }
}

const pessoa1 = new Pessoa("Luciana Pepe", 37);
console.log(pessoa1.comer("Comida Japonesa"));
console.log(pessoa1.fezAniversario());

const pessoa2 = new Pessoa("Maria Santos", 52);
console.log(pessoa2.comer("Pizza"));
console.log(pessoa2.fezAniversario());