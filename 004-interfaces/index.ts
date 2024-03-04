interface IPessoa {
    nome: string;
    idade: number;
    readonly cpf: number;
    enabled(): boolean;
}

let pessoa: IPessoa = {
    nome: "Luciana",
    idade: 38,
    cpf: 11111111111111,
    enabled: () => {
        return true;
    },
}

class Joao implements IPessoa {
    nome: string = "Joao";
    idade: number = 23;
    readonly cpf: number = 1111111;

    enabled(): boolean {
        return true;
    }
}

class Maria implements IPessoa {
    nome: string = "Maria";
    idade: number = 50;
    readonly cpf: number = 2222222;

    enabled(): boolean {
        return false;
    }
}

