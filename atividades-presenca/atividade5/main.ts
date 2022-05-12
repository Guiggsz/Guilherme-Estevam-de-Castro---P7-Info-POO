import { Produto } from "./produto";
import { Item } from "./item";
import { Compra } from "./compra";
import { Cliente } from "./cliente";

const p1 = new Produto("Notebook", 2590.70);

const p2 = new Produto("Tv 40", 3466);
const p3 = new Produto("Caneta", 2.30);
const p4 = new Produto("Caderno", 15.80);

const p5 = new Produto("Fogão", 1550.98);
const p6 = new Produto("Geladeira", 1764.50);

const i1 = new Item(p1, 1);

const i2 = new Item(p2, 1);
const i3 = new Item(p3, 4);
const i4 = new Item(p4, 2);

const i5 = new Item(p5, 1);
const i6 = new Item(p6, 1);

const c1 = new Compra("Amazon");
const c2 = new Compra("Americanas");
const c3 = new Compra("Magazine Luiza");

const guilherme = new Cliente("Guilherme");

c1.addItem(i1);

c2.addItem(i2);
c2.addItem(i3);
c2.addItem(i4);

c3.addItem(i5);
c3.addItem(i6);

guilherme.addCompra(c1);
guilherme.addCompra(c2);
guilherme.addCompra(c3);

console.log(guilherme.listarCompras());
