"use strict";
exports.__esModule = true;
exports.NotaFiscal = void 0;
var NotaFiscal = /** @class */ (function () {
    function NotaFiscal(id, codigo, cliente) {
        this.id = id;
        this.codigo = codigo;
        this.data = new Date();
        this.cliente = cliente;
        this.itens = new Array();
    }
    NotaFiscal.prototype.calcularValor = function () {
        var valorCalculado = 0;
        this.itens.forEach(function (item) {
            valorCalculado += item.calcularValor();
        });
        return valorCalculado;
    };
    // Imprimir a NotaFiscal conforme o Layout definido
    NotaFiscal.prototype.imprimirNotaFiscal = function () {
        // Imprimir
    };
    NotaFiscal.prototype.adicionarItem = function (item) {
        this.itens.push(item);
    };
    return NotaFiscal;
}());
exports.NotaFiscal = NotaFiscal;
