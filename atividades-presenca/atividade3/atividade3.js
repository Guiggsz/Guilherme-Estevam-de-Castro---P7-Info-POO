var Pilha = /** @class */ (function () {
    function Pilha() {
        this.elementos = [];
    }
    Pilha.prototype.inserirElemento = function (elemento) {
        this.elementos.push(elemento);
    };
    Pilha.prototype.retirarElemento = function () {
        return this.elementos.pop();
    };
    Pilha.prototype.mostrarPilha = function () {
        console.log("Pilha: ", this.elementos.join(" "));
    };
    return Pilha;
}());
function main() {
    var pilha = new Pilha;
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
