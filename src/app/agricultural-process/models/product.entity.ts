export class Product {
  id: number;
  name: string;
  price: number;
  quantity: number;

  constructor(product: { id?: number; name?: string; price?: number; quantity?: number }) {
    this.id = product.id || 0;
    this.name = product.name || '';
    this.price = product.price || 0;
    this.quantity = product.quantity || 0;
  }
}
