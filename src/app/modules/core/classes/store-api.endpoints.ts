export class StoreApiEndpoints {
  baseUrl: string = "/api";

  products() {
    return `${this.baseUrl}/product`;
  }

  productById(id) {
    return `${this.products()}/${id}`;
  }
}