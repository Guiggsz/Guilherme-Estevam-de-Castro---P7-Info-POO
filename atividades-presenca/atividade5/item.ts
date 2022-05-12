import { Produto } from "./produto";

export class Item {
	private produto: Produto;
	private quantidade: number;

    public constructor(produto: Produto, quantidade: number){
		this.produto = produto;
		this.quantidade = quantidade;
	}

    public getItemDescricao() : string {
        let descricao: string;
        if(this.quantidade > 1) {
            descricao = "O produto " + this.produto.nome + " tem o valor de " + this.produto.preco
            +" R$ e a quantidade é de " + this.quantidade + " produtos.\n";
        } else if(this.quantidade === 1) {				
            descricao = "O produto " + this.produto.nome + " tem o valor de " + this.produto.preco + " R$.\n";
        } else {
            descricao = "Sem itens desse produto na compra.\n";
        }

        return descricao;
    }

    public getValorItem() : number {
		return this.quantidade * this.produto.preco;
	}
}
