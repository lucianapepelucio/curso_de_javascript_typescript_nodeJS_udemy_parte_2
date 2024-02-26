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

const pessoa = new Pessoa("Luciana", 38);

