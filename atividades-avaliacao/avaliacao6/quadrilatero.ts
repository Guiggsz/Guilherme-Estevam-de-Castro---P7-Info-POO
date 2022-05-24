import { Ponto } from "./ponto";

class Quadrilatero {
    private A: Ponto;
    private B: Ponto;

    public constructor(A: Ponto, B: Ponto) {
        this.A = A;
        this.B = B;
    }

    public pertenceArea(ponto: Ponto) : boolean {
        if(this.A.x === this.B.x || this.A.y === this.B.y) 
            return false

        if(this.A.x < this.B.x) { // A.x < B.x
            if(this.A.y < this.B.y) // A.y < B.y
                return ponto.x > this.A.x && ponto.y > this.A.y && ponto.x < this.B.x && ponto.y < this.B.y;
            else // A.y > B.y
                return ponto.x > this.A.x && ponto.y < this.A.y && ponto.x < this.B.x && ponto.y > this.B.y;
        } else { // A.x > B.x
            if(this.A.y < this.B.y) // A.y < B.y
                return ponto.x < this.A.x && ponto.y > this.A.y && ponto.x > this.B.x && ponto.y < this.B.y;
            else // A.y > B.y
                return ponto.x < this.A.x && ponto.y < this.A.y && ponto.x > this.B.x && ponto.y > this.B.y;
        }
    } 
}

function teste(){
    const Q1 = new Quadrilatero(new Ponto(1, 2), new Ponto(1, 2));
    const Q2 = new Quadrilatero(new Ponto(1, 2), new Ponto(1, 3));
    const Q3 = new Quadrilatero(new Ponto(1, 2), new Ponto(3, 2));
    const Q4 = new Quadrilatero(new Ponto(2, 1), new Ponto(6, 5));
    const Q5 = new Quadrilatero(new Ponto(2, 5), new Ponto(6, 1));
    const Q6 = new Quadrilatero(new Ponto(6, 1), new Ponto(2, 5));
    const Q7 = new Quadrilatero(new Ponto(6, 5), new Ponto(2, 1));

    const C = new Ponto(2, 2);
    const D = new Ponto(3, 4);
    const E = new Ponto(1, 7);
    const F = new Ponto(3, 8);
    const G = new Ponto(0, 4);
    const H = new Ponto(5, 3);

    console.log("Testando Q1");
    console.log("Ponto C", Q1.pertenceArea(C));
    console.log("Ponto D", Q1.pertenceArea(D));
    console.log("Ponto E", Q1.pertenceArea(E));
    console.log("Ponto F", Q1.pertenceArea(F));
    console.log("Ponto G", Q1.pertenceArea(G));
    console.log("Ponto H", Q1.pertenceArea(H));

    console.log("Testando Q2");
    console.log("Ponto C", Q2.pertenceArea(C));
    console.log("Ponto D", Q2.pertenceArea(D));
    console.log("Ponto E", Q2.pertenceArea(E));
    console.log("Ponto F", Q2.pertenceArea(F));
    console.log("Ponto G", Q2.pertenceArea(G));
    console.log("Ponto H", Q2.pertenceArea(H));

    console.log("Testando Q3");
    console.log("Ponto C", Q3.pertenceArea(C));
    console.log("Ponto D", Q3.pertenceArea(D));
    console.log("Ponto E", Q3.pertenceArea(E));
    console.log("Ponto F", Q3.pertenceArea(F));
    console.log("Ponto G", Q3.pertenceArea(G));
    console.log("Ponto H", Q3.pertenceArea(H));
    
    console.log("Testando Q4");
    console.log("Ponto C", Q4.pertenceArea(C));
    console.log("Ponto D", Q4.pertenceArea(D));
    console.log("Ponto E", Q4.pertenceArea(E));
    console.log("Ponto F", Q4.pertenceArea(F));
    console.log("Ponto G", Q4.pertenceArea(G));
    console.log("Ponto H", Q4.pertenceArea(H));

    console.log("Testando Q5");
    console.log("Ponto C", Q5.pertenceArea(C));
    console.log("Ponto D", Q5.pertenceArea(D));
    console.log("Ponto E", Q5.pertenceArea(E));
    console.log("Ponto F", Q5.pertenceArea(F));
    console.log("Ponto G", Q5.pertenceArea(G));
    console.log("Ponto H", Q5.pertenceArea(H));

    console.log("Testando Q6");
    console.log("Ponto C", Q6.pertenceArea(C));
    console.log("Ponto D", Q6.pertenceArea(D));
    console.log("Ponto E", Q6.pertenceArea(E));
    console.log("Ponto F", Q6.pertenceArea(F));
    console.log("Ponto G", Q6.pertenceArea(G));
    console.log("Ponto H", Q6.pertenceArea(H));

    console.log("Testando Q7");
    console.log("Ponto C", Q7.pertenceArea(C));
    console.log("Ponto D", Q7.pertenceArea(D));
    console.log("Ponto E", Q7.pertenceArea(E));
    console.log("Ponto F", Q7.pertenceArea(F));
    console.log("Ponto G", Q7.pertenceArea(G));
    console.log("Ponto H", Q7.pertenceArea(H));
}

teste();
