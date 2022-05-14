"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(id, nome, codigo, cnpjcpf, tipo) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.cnpjcpf = cnpjcpf;
        this.tipo = tipo;
    }
    Cliente.prototype.getDados = function () {
        var dados = "Cliente:  " + this.codigo + this.getQuantidadeCaractere(8 - this.codigo.toString().length, " ")
            + "Nome: " + this.nome;
        dados += "\nCPF/CNPJ: " + this.cnpjcpf;
        return dados;
    };
    Cliente.prototype.getQuantidadeCaractere = function (quantidade, caractere) {
        var resultado = "";
        for (var i = 0; i < quantidade; i++) {
            resultado += caractere;
        }
        return resultado;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
