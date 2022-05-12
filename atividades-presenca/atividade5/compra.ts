import { Item } from "./item";

export class Compra {
	private nome: string;
	private itens: Array<Item>;
	
    public constructor(nome: string) {
		this.nome = nome;
		this.itens = new Array<Item>();
	}

    public listarItens() : string{
        let resultado = "A compra em " + this.nome + " tem os itens:\n";
        this.itens.forEach((item: Item, i: number) => {
            resultado += (i+1) + ": " + item.getItemDescricao();
        });
        resultado += "==> Totalizando o valor de: " + this.getValorCompra() + " R$.\n\n";

        return resultado;
    }

	public getValorCompra() : number {
		let total = 0;
        this.itens.forEach((item: Item) => {
            total += item.getValorItem();
        });

		return total;
	}

	public addItem(item: Item) : void {
		this.itens.push(item);
	}
}
