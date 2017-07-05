export class Product {
  _id: String;
  name: String;
  cost: Number = 0.0;
  active: Boolean;
  inStock: Number = 0;
  likes: Array<any> = [];
}