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
        var dados = "";
        dados += "Id=" + this.id + "\n";
        dados += "Nome=" + this.nome + "\n";
        dados += "Codigo=" + this.codigo + "\n";
        dados += "CnpjCpf=" + this.cnpjcpf + "\n";
        dados += "TipoCliente=" + this.tipo;
        return dados;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
