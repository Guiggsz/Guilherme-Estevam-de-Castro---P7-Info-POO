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
    NotaFiscal.prototype.imprimirNotaFiscal = function () {
        var TAMANHO_MAXIMO = 111;
        var resultado = this.getCabecalho(TAMANHO_MAXIMO);
        resultado += this.getItens(TAMANHO_MAXIMO);
        resultado += "\nValor Total: " + this.calcularValor().toFixed(2).toString();
        return resultado;
    };
    NotaFiscal.prototype.adicionarItem = function (item) {
        this.itens.push(item);
    };
    NotaFiscal.prototype.getCabecalho = function (tamanhoMaximo) {
        var DATA = this.data.toLocaleDateString("pt-BR", { day: '2-digit', month: '2-digit', year: 'numeric' });
        var cabecalho = this.getQuantidadeCaractere(tamanhoMaximo, "-");
        cabecalho += "\nNOTA FISCAL" + this.getQuantidadeCaractere(tamanhoMaximo - DATA.length - "NOTA FISCAL".length, " ") + DATA;
        cabecalho += "\n" + this.cliente.getDados();
        cabecalho += "\n" + this.getQuantidadeCaractere(tamanhoMaximo, "-");
        return cabecalho;
    };
    NotaFiscal.prototype.getItens = function (tamanhoMaximo) {
        var itens = "\nITENS\n" + this.getQuantidadeCaractere(tamanhoMaximo, "-");
        itens += "\nSeq   Descrição" + this.getQuantidadeCaractere(52, " ") + "QTD" + this.getQuantidadeCaractere(7, " ")
            + "Valor Unit" + this.getQuantidadeCaractere(12, " ") + "Preço\n";
        itens += this.getQuantidadeCaractere(4, "-") + this.getQuantidadeCaractere(2, " ") + this.getQuantidadeCaractere(56, "-")
            + this.getQuantidadeCaractere(4, " ") + this.getQuantidadeCaractere(5, "-") + this.getQuantidadeCaractere(5, " ")
            + this.getQuantidadeCaractere(12, "-") + this.getQuantidadeCaractere(5, " ") + this.getQuantidadeCaractere(18, "-");
        itens += "\n" + this.getDadosItens();
        itens += "\n" + this.getQuantidadeCaractere(tamanhoMaximo, "-");
        return itens;
    };
    NotaFiscal.prototype.getDadosItens = function () {
        var _this = this;
        var dadosItens = "";
        this.itens.forEach(function (item, index) {
            dadosItens += item.getDados();
            if (index < _this.itens.length - 1)
                dadosItens += "\n\n";
        });
        return dadosItens;
    };
    NotaFiscal.prototype.getQuantidadeCaractere = function (quantidade, caractere) {
        var resultado = "";
        for (var i = 0; i < quantidade; i++) {
            resultado += caractere;
        }
        return resultado;
    };
    return NotaFiscal;
}());
exports.NotaFiscal = NotaFiscal;
