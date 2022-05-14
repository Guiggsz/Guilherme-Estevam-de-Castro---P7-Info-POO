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
    return ItemNotaFiscal;
}());
exports.ItemNotaFiscal = ItemNotaFiscal;
