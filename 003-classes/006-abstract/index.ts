abstract class Pessoa {
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

    // Modelo para as outras classes:
    protected abstract profissao: string;
    public abstract qualSuaProfissao(): string;
    public abstract qualSeuSalario(salario: number): number;
}

class Luciana extends Pessoa {
    protected profissao: string = "Desenvolvedora";

    constructor() {
        super("Luciana", 38);
    }

    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao}`;
    }

    public qualSeuSalario(salario: number): number {
        return salario;
    }
}

class Jose extends Pessoa {
    protected profissao: string = "Desenvolvedor";

    constructor() {
        super("Jose", 45);
    }

    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao}`;
    }

    public qualSeuSalario(salario: number): number {
        return salario;
    }
}

const luciana = new Luciana();
const jose = new Jose();
