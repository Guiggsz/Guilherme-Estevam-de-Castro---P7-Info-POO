class Pilha {
    private elementos: number[];

    public constructor() {
        this.elementos = [];
    }

    public inserirElemento(elemento: number) {
        this.elementos.push(elemento);
    }

    public retirarElemento() : number {
        return this.elementos.pop();
    }

    public mostrarPilha() {
        console.log("Pilha: ", this.elementos.join(" "))
    }
}

function main() {
    const pilha = new Pilha;
    pilha.inserirElemento(1);
    pilha.inserirElemento(2);
    pilha.inserirElemento(3);
    pilha.inserirElemento(4);
    pilha.mostrarPilha(); // Pilha:  1 2 3 4
    pilha.retirarElemento();
    pilha.retirarElemento();
    pilha.mostrarPilha(); // Pilha:  1 2
    pilha.inserirElemento(6);
    pilha.inserirElemento(7);
    pilha.mostrarPilha(); // Pilha:  1 2 6 7
    pilha.retirarElemento();
    pilha.mostrarPilha(); // Pilha:  1 2 6
}

main();