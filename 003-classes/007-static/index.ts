/*
Métodos estáticos não são chamados nas instâncias da classe.
Em vez disso, eles são chamados na própria classe.
Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.
*/

// class Utils {
//     cloneObject(object: Array<{}>) {
//         return JSON.parse(JSON.stringify(Object.assign(object)));
//     }
// }

// const utils = new Utils();

// const tenis1: { tamanho: number, estoque: boolean } = {
//     tamanho: 41,
//     estoque: true,
// };

// const tenis2: { tamanho: number, estoque: boolean } = {
//     tamanho: 37,
//     estoque: false,
// };

// console.log(utils.cloneObject([tenis1, tenis2]));

class Utils {
    static cloneObject(object: Array<{}>) {
        return JSON.parse(JSON.stringify(Object.assign(object)));
    }
}

const tenis1: { tamanho: number, estoque: boolean } = {
    tamanho: 41,
    estoque: true,
};

const tenis2: { tamanho: number, estoque: boolean } = {
    tamanho: 37,
    estoque: false,
};

console.log(Utils.cloneObject([tenis1, tenis2]));