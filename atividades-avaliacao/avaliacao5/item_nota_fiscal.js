"use strict";
exports.__esModule = true;
exports.ItemNotaFiscal = void 0;
var ItemNotaFiscal = /** @class */ (function () {
    function ItemNotaFiscal(id, sequencial, quantidade, produto) {
        this.id = id;
        this.sequencial = sequencial;
        this.quantidade = quantidade;
        this.produto = produto;
    }
    ItemNotaFiscal.prototype.calcularValor = function () {
        return this.produto.valorUnitario * this.quantidade;
    };
    ItemNotaFiscal.prototype.getDados = function () {
        return this.getAtributoFormatado(this.sequencial.toString(), 3, "0") + this.getQuantidadeCaractere(3, " ")
            + this.produto.descricao + this.getQuantidadeCaractere(60 - this.produto.descricao.length, " ")
            + this.getAtributoFormatado(this.quantidade.toString(), 5) + this.getQuantidadeCaractere(5, " ")
            + this.getAtributoFormatado(this.produto.valorUnitario.toFixed(2).toString(), 12) + this.getQuantidadeCaractere(5, " ")
            + this.getAtributoFormatado(this.calcularValor().toFixed(2).toString(), 18);
    };
    ItemNotaFiscal.prototype.getAtributoFormatado = function (atributo, quantidade, caractere) {
        if (caractere === void 0) { caractere = " "; }
        var atributoFormatado = "";
        for (var i = 0; i < quantidade - atributo.length; i++) {
            atributoFormatado += caractere;
        }
        return atributoFormatado + atributo;
    };
    ItemNotaFiscal.prototype.getQuantidadeCaractere = function (quantidade, caractere) {
        var resultado = "";
        for (var i = 0; i < quantidade; i++) {
            resultado += caractere;
        }
        return resultado;
    };
    return ItemNotaFiscal;
}());
exports.ItemNotaFiscal = ItemNotaFiscal;
