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
    
    public imprimirNotaFiscal() : string {
        const TAMANHO_MAXIMO = 111;

        let resultado = this.getCabecalho(TAMANHO_MAXIMO);
        resultado += this.getItens(TAMANHO_MAXIMO);
        resultado += "\nValor Total: " + this.calcularValor().toFixed(2).toString();
        
        return resultado;
    }

    public adicionarItem(item: ItemNotaFiscal) {
        this.itens.push(item);
    }

    private getCabecalho(tamanhoMaximo: number) : string {
        const DATA = this.data.toLocaleDateString("pt-BR", { day: '2-digit', month: '2-digit', year: 'numeric' });

        let cabecalho = this.getQuantidadeCaractere(tamanhoMaximo, "-");
        cabecalho += "\nNOTA FISCAL" + this.getQuantidadeCaractere(tamanhoMaximo - DATA.length - "NOTA FISCAL".length, " ") + DATA;
        cabecalho += "\n" + this.cliente.getDados();
        cabecalho += "\n" + this.getQuantidadeCaractere(tamanhoMaximo, "-");

        return cabecalho;
    }

    private getItens(tamanhoMaximo: number) : string {
        let itens = "\nITENS\n" + this.getQuantidadeCaractere(tamanhoMaximo, "-");

        itens += "\nSeq   Descrição" + this.getQuantidadeCaractere(52, " ") + "QTD" + this.getQuantidadeCaractere(7, " ")
        + "Valor Unit" + this.getQuantidadeCaractere(12, " ") + "Preço\n";

        itens += this.getQuantidadeCaractere(4, "-") + this.getQuantidadeCaractere(2, " ") + this.getQuantidadeCaractere(56, "-")
        + this.getQuantidadeCaractere(4, " ") + this.getQuantidadeCaractere(5, "-") + this.getQuantidadeCaractere(5, " ")
        + this.getQuantidadeCaractere(12, "-") + this.getQuantidadeCaractere(5, " ") + this.getQuantidadeCaractere(18, "-");

        itens += "\n" + this.getDadosItens();
        itens += "\n" + this.getQuantidadeCaractere(tamanhoMaximo, "-");

        return itens;
    }

    private getDadosItens() : string {
        let dadosItens = "";
        this.itens.forEach((item: ItemNotaFiscal, index: number) => {
            dadosItens += item.getDados();
            if(index < this.itens.length - 1)
                dadosItens += "\n\n";
        });
        return dadosItens;
    }

    private getQuantidadeCaractere(quantidade: number, caractere: string) : string {
        let resultado = "";
        for(let i = 0; i < quantidade; i++) {
            resultado += caractere;
        }

        return resultado;
    }
}