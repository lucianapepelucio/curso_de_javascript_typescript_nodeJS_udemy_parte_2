let array1: [string, string] = ["Luciana", "Pepe"]; // meu array terá apenas 2 strings
let array2: Array<string> = ["Luciana", "Pepe", "Ana"]; // meu array terá diversos strings

let array3: [string, string, number, boolean] = ["Luciana", "Pepe", 123, true]; // tupla
let array4: Array<string | number | boolean> = ["Luciana", 123, "Pepe", false, "Ana"];

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);

let obj1: { nome: string, sobrenome: string, idade: number, deuBom: boolean } = {
    nome: "Luciana",
    sobrenome: "Pepe",
    idade: 38,
    deuBom: true,
}

let obj2: Array<{ nome: string, sobrenome: string, idade: number, deuBom: boolean }> = [
    {
        nome: "Luciana",
        sobrenome: "Pepe",
        idade: 38,
        deuBom: true,
    },
    {
        nome: "Ana",
        sobrenome: "Pepe",
        idade: 71,
        deuBom: false,
    },
];

console.log(obj1);
console.log(obj2);