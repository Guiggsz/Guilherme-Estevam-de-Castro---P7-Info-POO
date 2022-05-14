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
}
