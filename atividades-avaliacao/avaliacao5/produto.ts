export class Produto {
    // A Classe Produto nesse caso é chamada de Estrutura de Dados,
    // pois não possui métodos e expôe seus atributos como públicos
    public id: number;
    public codigo: number; 
    public descricao: string;
    public valorUnitario: number;    

    public constructor(id : number, codigo: number, descricao: string, valorUnitario: number) {
        this.id = id;
        this.codigo = codigo;
        this.descricao = descricao;
        this.valorUnitario = valorUnitario; 
    }
}