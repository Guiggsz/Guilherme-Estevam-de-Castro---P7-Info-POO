import { Compra } from "./compra";

export class Cliente {
	private nome: string;
	private compras: Array<Compra>;

	public constructor(nome: string) {
		this.nome = nome;
        this.compras = new Array<Compra>();
	}

    public listarCompras() : string {
        let resultado = "Compras do(a) Cliente: " + this.nome + ".\n\n";
        this.compras.forEach((compra: Compra) => {
            resultado += compra.listarItens();
        });
        resultado += "O valor Total das compras de "+ this.nome +" foi de " + this.getValorTotal()
        + " R$.\n"
        resultado += "### Obrigado por comprar com a gente!! ###"
        return resultado; 
    }

	public getValorTotal() : number {
		let total = 0;
		this.compras.forEach((compra: Compra) => {
			total += compra.getValorCompra();
        });

		return total;
	}
	
	public addCompra(compra: Compra) : void {
		this.compras.push(compra);
	}
}
