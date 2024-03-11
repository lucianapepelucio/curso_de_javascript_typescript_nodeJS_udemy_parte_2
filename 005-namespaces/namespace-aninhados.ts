export namespace Pessoa {
    export namespace Maria {
        const data = 1 + 1;

        export let nome = "Maria";
        export const calc = () => {
            return data;
        }
    }

    export namespace Jose {
        const data = 1 + 1;

        export let nome = "Jose";
        export const calc = () => {
            return data;
        }
    }
}

// console.log(Pessoa.Maria.nome);
// console.log(Pessoa.Jose.nome);