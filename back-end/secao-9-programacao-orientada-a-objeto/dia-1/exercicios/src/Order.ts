import Client from "./Client";
import ItemOrder from "./ItemOrder";

export default class Order {
  private _client: Client;
  private _items: ItemOrder[] = [];
  private _paymentMethod: string;
  private _discount: number;

  constructor(
    client: Client,
    items: ItemOrder[],
    paymentMethod: string,
    discount: number,
  ) {
    this._client = client;
    this.items = items;
    this._paymentMethod = paymentMethod;
    this._discount = discount;
  }

  public get client_1(): Client {
    return this._client;
  }
  public set client_1(value: Client) {
    this._client = value;
  }

  public get items(): ItemOrder[] {
    return this._items;
  }
  public set items(value: ItemOrder[]) {
    if (value.length === 0) {
      throw new Error('O pedido deve conter pelo menos 1 item');
    }
    this._items = value;
  }

  public get paymentMethod(): string {
    return this._paymentMethod;
  }
  public set paymentMethod(value: string) {
    this._paymentMethod = value;
  }

  public get discount(): number {
    return this._discount;
  }
  public set discount(value: number) {
    if (value < 0) {
      throw new Error('O desconto não pode ter valor negativo');
    }
    this._discount = value;
  }

  totalOder(): number {
    return this.items.reduce((previousItem, item) => {
      const total = previousItem += item.price;
      return total;
    }, 0)
  }

  totalWithDiscount(): number {
    return this.totalOder() * (1 - this.discount);
  }
}