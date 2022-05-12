const DECIMAL_TAMANHO_MAXIMO = 9;
const OCTAL_TAMANHO_MAXIMO = 7;
const HEXADECIMAL_TAMANHO_MAXIMO = 13;
const BINARIO_TAMANHO_MAXIMO = 9;

imprimirTabela();

function imprimirTabela() {
    console.log(" Decimal  Octal  Hexadecimal  Binario ");
    for (let i = 0; i <= 255; i++) {
        console.log("--------------------------------------");
        console.log(printDecimal(i)+printOctal(i)+printHexadecimal(i)+printBinario(i));
    }
}

function printDecimal(numero: number) : string {
    let numeroConvertido = numero.toString(10);
    return adicionarEspacos(numeroConvertido, DECIMAL_TAMANHO_MAXIMO);
}

function printOctal(numero: number) : string {
    let numeroConvertido = numero.toString(8);
    return adicionarEspacos(numeroConvertido, OCTAL_TAMANHO_MAXIMO);
}

function printHexadecimal(numero: number) : string {
    let numeroConvertido = numero.toString(16);
    return adicionarEspacos(numeroConvertido, HEXADECIMAL_TAMANHO_MAXIMO);
}

function printBinario(numero: number) : string {
    let numeroConvertido = numero.toString(2);
    return adicionarEspacos(numeroConvertido, BINARIO_TAMANHO_MAXIMO);
}

function adicionarEspacos(numeroString: string, tamanhoMaximo: number) : string {
    let diferenca = tamanhoMaximo - numeroString.length;
    let caracteresSobrando = Math.floor(diferenca / 2);
    let espacosIniciais = "";
    for (let i = 0; i < caracteresSobrando; i++) {
        numeroString += " ";
        espacosIniciais += " ";
    }
    if(diferenca % 2 !== 0) {
        numeroString += " ";
    }
    return espacosIniciais + numeroString;
}
