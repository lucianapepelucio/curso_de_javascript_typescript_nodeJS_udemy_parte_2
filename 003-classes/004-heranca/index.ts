/*
public - pode ser acessado tanto pela mesma classe, classes filhas e outras classes.
protected - pode ser acessado pela mesma classe e classes filhas, não pode ser acessado por
outras classes.
private - pode ser acessado somente pela própria classe.
*/

class Pessoa {
    public nome: string = "";
    public idade: number = 0;

    private _profissao: string = "Programador";

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string) {
        return `A ${this.nome} comeu ${comida}!`;
    }

    public fezAniversario() {
        return `A ${this.nome} fez ${++this.idade} anos!`;
    }
}

class Luciana extends Pessoa {
    private profissao: string = "Desenvolvedora";

    constructor() {
        super("Luciana", 38);
    }

    public getProfissao() {
        return `${this.nome} trabalha como ${this.profissao}`;
    }
}

//class Ana extends Pessoa {}

const luciana = new Luciana();
//const ana = new Ana("Ana", 71);

console.log(luciana.nome);
console.log(luciana.idade);
console.log(luciana.comer("Tapioca"));
console.log(luciana.fezAniversario());
console.log(luciana.getProfissao());

// console.log(ana.nome);
// console.log(ana.idade);