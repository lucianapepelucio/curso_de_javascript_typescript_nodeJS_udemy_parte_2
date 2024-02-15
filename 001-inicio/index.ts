// Typescript
// npm install -g typescript
// tsc -v
// tsc --init

// Plugin: Code Runner
// npm i -g ts-node
// ctrl + alt + n

// tsc index.ts => converte para um arquivo .js

console.log("Hello World!");

const pedido = (pedido: any) => {
    return `Deu bom o seu pedido ${pedido}`;
}

console.log(pedido(123));