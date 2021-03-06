export class Product implements IProduct {
  id: string;
  name: string;
  cost: number = 0.0;
  active: boolean;
  inStock: number = 0;
  likes: Array<any> = [];
}
export interface IProduct {
  id: string;
  name: string;
  cost: number;
  active: boolean;
  inStock: number;
  likes: Array<any>;
}

export interface IProductDto {
  _id: string;
  name: string;
  cost: number;
  active: boolean;
  inStock: number;
  likes: Array<any>;
}
