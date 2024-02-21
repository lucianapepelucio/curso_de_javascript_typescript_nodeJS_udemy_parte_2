const fn = (nome: string, idade?: number) => {
    if (!idade) {
        return `nome: ${nome}, idade: sem valor definido`;
    }
    return `nome: ${nome}, idade: ${idade}`;
};

console.log(fn("Luciana", 38));
console.log(fn("Luciana"));

const pessoa: { nome: string; idade?: number } = { nome: "Luciana"};