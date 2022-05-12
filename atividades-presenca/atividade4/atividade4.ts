class Fila {
    private elementos: number[];

    public constructor() {
        this.elementos = [];
    }

    public inserirElemento(elemento: number) {
        this.elementos.push(elemento);
    }

    public retirarElemento() {
        return this.elementos.splice(0, 1);
    }

    public mostrarFila() {
        console.log("Fila: ", this.elementos.join(" "))
    }
}

function main() {
    const fila = new Fila;
    fila.inserirElemento(1);
    fila.inserirElemento(2);
    fila.inserirElemento(3);
    fila.inserirElemento(4);
    fila.mostrarFila(); // Fila:  1 2 3 4
    fila.retirarElemento();
    fila.retirarElemento();
    fila.mostrarFila(); // Fila:  3 4
    fila.inserirElemento(6);
    fila.inserirElemento(7);
    fila.mostrarFila(); // Fila:  3 4 6 7
    fila.retirarElemento();
    fila.mostrarFila(); // Fila:  4 6 7
}

main();