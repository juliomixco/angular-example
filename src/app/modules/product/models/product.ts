export class Product {
  _id: string;
  name: string;
  cost: Number = 0.0;
  active: Boolean;
  inStock: Number = 0;
  likes: Array<any> = [];
}