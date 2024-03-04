class Pessoa {
    public nome: string = "";
    public idade: number = 0;

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
    private _profissao: string = "Desenvolvedora";

    constructor() {
        super("Luciana", 38);
    }

    get profissao() {
        // pode acrescentar funções e validações
        if (this._profissao === "Web Designer") {
            return `Ela não é mais desenvolvedora, passou a ser ${this._profissao}`;
        }
        return this._profissao;
    }

    set profissao(valor: string) {
        this._profissao = valor;
    }
}

const luciana = new Luciana();

console.log(luciana.profissao);
luciana.profissao = "Web Designer";
console.log(luciana.profissao);