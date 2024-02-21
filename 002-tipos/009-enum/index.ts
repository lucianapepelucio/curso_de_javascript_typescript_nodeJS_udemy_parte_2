enum Mes {
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
}

//console.log(Mes.JAN);

const pessoa: { nome: string, mesAniversario: string } = {
    nome: "Luciana",
    mesAniversario: Mes.JAN,
}

if (pessoa.mesAniversario === Mes.JAN) {
    console.log(pessoa);
}