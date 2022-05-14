import {Produto} from "./produto"

export class ItemNotaFiscal {
    private id: number;
    private sequencial: number; 
    private quantidade: number;
    private produto : Produto;

    public constructor(id : number, sequencial: number, quantidade: number, produto: Produto) {
        this.id = id;
        this.sequencial = sequencial;
        this.quantidade = quantidade;
        this.produto = produto; 
    }
    
    public calcularValor() : number {
        return this.produto.valorUnitario * this.quantidade;
    }

    public getDados() : string {
        return this.getAtributoFormatado(this.sequencial.toString(), 3, "0") + this.getQuantidadeCaractere(3, " ")
        + this.produto.descricao + this.getQuantidadeCaractere(60 - this.produto.descricao.length, " ")
        + this.getAtributoFormatado(this.quantidade.toString(), 5) + this.getQuantidadeCaractere(5, " ")
        + this.getAtributoFormatado(this.produto.valorUnitario.toFixed(2).toString(), 12) + this.getQuantidadeCaractere(5, " ")
        + this.getAtributoFormatado(this.calcularValor().toFixed(2).toString(), 18);
    }

    private getAtributoFormatado(atributo: string, quantidade: number, caractere: string = " ") : string {
        let atributoFormatado = "";
        
        for(let i = 0; i < quantidade - atributo.length; i++) {
            atributoFormatado += caractere;
        }
        
        return atributoFormatado + atributo;
    }
    
    private getQuantidadeCaractere(quantidade: number, caractere: string) : string {
        let resultado = "";
        for (let i = 0; i < quantidade; i++) {
            resultado += caractere;
        }

        return resultado;
    }
}
