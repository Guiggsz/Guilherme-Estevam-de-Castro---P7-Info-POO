"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(nome) {
        this.nome = nome;
        this.compras = new Array();
    }
    Cliente.prototype.listarCompras = function () {
        var resultado = "Compras do(a) Cliente: " + this.nome + ".\n\n";
        this.compras.forEach(function (compra) {
            resultado += compra.listarItens();
        });
        resultado += "O valor Total das compras de " + this.nome + " foi de " + this.getValorTotal()
            + " R$.\n";
        resultado += "### Obrigado por comprar com a gente!! ###";
        return resultado;
    };
    Cliente.prototype.getValorTotal = function () {
        var total = 0;
        this.compras.forEach(function (compra) {
            total += compra.getValorCompra();
        });
        return total;
    };
    Cliente.prototype.addCompra = function (compra) {
        this.compras.push(compra);
    };
    return Cliente;
}());
exports.Cliente = Cliente;
