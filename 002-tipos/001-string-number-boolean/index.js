var pedido = "Pizza";
pedido = "Luciana Pepe";
var numero = 123;
numero = 789;
var deuBom = false;
deuBom = true;
// Especificando apenas o tipo da entrada
var fun = function (value) {
    return console.log(value);
};
fun("Luciana");
// Especificando o tipo da entrada e da saída
var fun1 = function (value) {
    return value;
};
console.log(fun("Luciana"));
// Typescript
// npm install -g typescript
// tsc -v
// tsc --init
// Plugin: Code Runner
// npm i -g ts-node
// ctrl + alt + n
// tsc index.ts => converte para um arquivo .js
