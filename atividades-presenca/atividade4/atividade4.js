var Fila = /** @class */ (function () {
    function Fila() {
        this.elementos = [];
    }
    Fila.prototype.inserirElemento = function (elemento) {
        this.elementos.push(elemento);
    };
    Fila.prototype.retirarElemento = function () {
        return this.elementos.splice(0, 1);
    };
    Fila.prototype.mostrarFila = function () {
        console.log("Fila: ", this.elementos.join(" "));
    };
    return Fila;
}());
function main() {
    var fila = new Fila;
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
