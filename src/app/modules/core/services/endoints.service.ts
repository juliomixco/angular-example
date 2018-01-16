import { Injectable } from "@angular/core";
import { Product } from "app/modules/product/models";
import { SwapiApiEndpoints, StoreApiEndpoints } from "app/modules/core/classes";

@Injectable()
export class EndpointsService {
  swapi = new SwapiApiEndpoints();
  store = new StoreApiEndpoints();

  constructor() {

  }

}