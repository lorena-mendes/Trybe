import Client from "./Client";
import ItemOrder from "./ItemOrder";
import Order from "./Order";

const client = new Client('Lorena');

const juice = new ItemOrder('Suco de morango', 6.00);
const pie = new ItemOrder('Torta de frago', 10.00);
const dessert = new ItemOrder('Chocolate', 3.00);

const order = new Order(client, [juice, pie, dessert], 'dinheiro', 0.2)

console.log(order);
console.log('Valor sem desconto: R$', order.totalOder());
console.log('valor com desconto: R$', order.totalWithDiscount());

