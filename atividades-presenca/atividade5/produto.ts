export class Produto {
	public preco: number;
	public nome: string;

	constructor(nome: string, preco: number) {
		this.nome = nome;
		this.preco = preco > 0 ? preco : 0;
	}
}
