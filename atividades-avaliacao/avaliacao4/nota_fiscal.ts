import {Cliente} from "./cliente";
import {ItemNotaFiscal} from "./item_nota_fiscal";

export class NotaFiscal {
    private id: number;
    private codigo: number; 
    private data: Date;
    private cliente: Cliente;
    private itens: Array<ItemNotaFiscal>;  
    
    public constructor(id: number, codigo: number, cliente: Cliente) {
        this.id = id;
        this.codigo = codigo;
        this.data = new Date(); 
        this.cliente = cliente; 
        this.itens = new Array<ItemNotaFiscal>();
    }

    public calcularValor() : number {
        let valorCalculado = 0;
        this.itens.forEach((item: ItemNotaFiscal) => {
            valorCalculado += item.calcularValor()
        });

        return valorCalculado;
    }
    
    // Imprimir a NotaFiscal conforme o Layout definido
    public imprimirNotaFiscal() : void {
        // Imprimir
    }

    public adicionarItem(item: ItemNotaFiscal) {
        this.itens.push(item);
    }
}