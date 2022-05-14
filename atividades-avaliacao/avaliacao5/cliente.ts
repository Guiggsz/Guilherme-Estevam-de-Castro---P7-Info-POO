import { TipoCliente } from "./tipo_cliente";

export class Cliente {
    private id: number;
    private nome: string;
    private codigo : number; 
    private cnpjcpf: string;
    private tipo: TipoCliente;    

    public constructor(id: number, nome: string, codigo: number, cnpjcpf: string, tipo: TipoCliente) {
        this.id = id;
        this.nome = nome;
        this.codigo = codigo;
        this.cnpjcpf = cnpjcpf;
        this.tipo = tipo; 
    }

    public getDados() : string {
        let dados = "Cliente:  " + this.codigo + this.getQuantidadeCaractere(8 - this.codigo.toString().length, " ")
        + "Nome: " + this.nome;
        dados += "\nCPF/CNPJ: " + this.cnpjcpf;

        return dados;
    }

    private getQuantidadeCaractere(quantidade: number, caractere: string) : string {
        let resultado = "";
        for (let i = 0; i < quantidade; i++) {
            resultado += caractere;
        }

        return resultado;
    }
}