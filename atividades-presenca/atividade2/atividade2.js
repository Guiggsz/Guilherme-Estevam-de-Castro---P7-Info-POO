var DECIMAL_TAMANHO_MAXIMO = 9;
var OCTAL_TAMANHO_MAXIMO = 7;
var HEXADECIMAL_TAMANHO_MAXIMO = 13;
var BINARIO_TAMANHO_MAXIMO = 9;
imprimirTabela();
function imprimirTabela() {
    console.log(" Decimal  Octal  Hexadecimal  Binario ");
    for (var i = 0; i <= 255; i++) {
        console.log("--------------------------------------");
        console.log(printDecimal(i) + printOctal(i) + printHexadecimal(i) + printBinario(i));
    }
}
function printDecimal(numero) {
    var numeroConvertido = numero.toString(10);
    return adicionarEspacos(numeroConvertido, DECIMAL_TAMANHO_MAXIMO);
}
function printOctal(numero) {
    var numeroConvertido = numero.toString(8);
    return adicionarEspacos(numeroConvertido, OCTAL_TAMANHO_MAXIMO);
}
function printHexadecimal(numero) {
    var numeroConvertido = numero.toString(16);
    return adicionarEspacos(numeroConvertido, HEXADECIMAL_TAMANHO_MAXIMO);
}
function printBinario(numero) {
    var numeroConvertido = numero.toString(2);
    return adicionarEspacos(numeroConvertido, BINARIO_TAMANHO_MAXIMO);
}
function adicionarEspacos(numeroString, tamanhoMaximo) {
    var diferenca = tamanhoMaximo - numeroString.length;
    var caracteresSobrando = Math.floor(diferenca / 2);
    var espacosIniciais = "";
    for (var i = 0; i < caracteresSobrando; i++) {
        numeroString += " ";
        espacosIniciais += " ";
    }
    if (diferenca % 2 !== 0) {
        numeroString += " ";
    }
    return espacosIniciais + numeroString;
}
