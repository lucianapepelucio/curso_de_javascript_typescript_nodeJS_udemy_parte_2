let pedido: string = "Pizza";
pedido = "Luciana Pepe";

let numero: number = 123;
numero = 789;

let deuBom: boolean = false;
deuBom = true;

// Especificando apenas o tipo da entrada
const fun = (value: string) => {
    return console.log(value);
}

fun("Luciana");

// Especificando o tipo da entrada e da saída
const fun1 = (value:string): string => {
    return value;
}

console.log(fun("Luciana"));
