export class StoreApiEndpoints {
  baseUrl: String = "/api";

  products() {
    return `${this.baseUrl}/product`;
  }

  productById(id) {
    return `${this.products()}/${id}`;
  }
}