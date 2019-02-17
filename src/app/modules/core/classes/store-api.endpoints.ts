import { environment } from 'environments/environment';

export class StoreApiEndpoints {
  baseUrl = `${environment.apiURL}/api`;

  products() {
    return `${this.baseUrl}/product`;
  }

  productById(id) {
    return `${this.products()}/${id}`;
  }
}
