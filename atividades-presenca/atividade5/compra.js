"use strict";
exports.__esModule = true;
exports.Compra = void 0;
var Compra = /** @class */ (function () {
    function Compra(nome) {
        this.nome = nome;
        this.itens = new Array();
    }
    Compra.prototype.listarItens = function () {
        var resultado = "A compra em " + this.nome + " tem os itens:\n";
        this.itens.forEach(function (item, i) {
            resultado += (i + 1) + ": " + item.getItemDescricao();
        });
        resultado += "==> Totalizando o valor de: " + this.getValorCompra() + " R$.\n\n";
        return resultado;
    };
    Compra.prototype.getValorCompra = function () {
        var total = 0;
        this.itens.forEach(function (item) {
            total += item.getValorItem();
        });
        return total;
    };
    Compra.prototype.addItem = function (item) {
        this.itens.push(item);
    };
    return Compra;
}());
exports.Compra = Compra;
