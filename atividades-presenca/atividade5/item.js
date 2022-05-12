"use strict";
exports.__esModule = true;
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(produto, quantidade) {
        this.produto = produto;
        this.quantidade = quantidade;
    }
    Item.prototype.getItemDescricao = function () {
        var descricao;
        if (this.quantidade > 1) {
            descricao = "O produto " + this.produto.nome + " tem o valor de " + this.produto.preco
                + " R$ e a quantidade é de " + this.quantidade + " produtos.\n";
        }
        else if (this.quantidade === 1) {
            descricao = "O produto " + this.produto.nome + " tem o valor de " + this.produto.preco + " R$.\n";
        }
        else {
            descricao = "Sem itens desse produto na compra.\n";
        }
        return descricao;
    };
    Item.prototype.getValorItem = function () {
        return this.quantidade * this.produto.preco;
    };
    return Item;
}());
exports.Item = Item;
