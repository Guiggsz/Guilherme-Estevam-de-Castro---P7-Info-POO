"use strict";
exports.__esModule = true;
exports.Produto = void 0;
var Produto = /** @class */ (function () {
    function Produto(nome, preco) {
        this.nome = nome;
        this.preco = preco > 0 ? preco : 0;
    }
    return Produto;
}());
exports.Produto = Produto;
