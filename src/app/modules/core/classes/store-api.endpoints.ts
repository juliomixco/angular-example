export class StoreApiEndpoints {
  baseUrl = '/api';

  products() {
    return `${this.baseUrl}/product`;
  }

  productById(id) {
    return `${this.products()}/${id}`;
  }
}
