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
        let dados = "";
        dados += "Id=" + this.id + "\n";
        dados += "Nome=" + this.nome + "\n";
        dados += "Codigo=" + this.codigo + "\n";
        dados += "CnpjCpf=" + this.cnpjcpf + "\n";
        dados += "TipoCliente=" + this.tipo;
        return dados;
    }
}