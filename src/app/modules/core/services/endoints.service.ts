import { Injectable } from '@angular/core';
import { SwapiApiEndpoints, StoreApiEndpoints } from 'app/modules/core/classes';

@Injectable()
export class EndpointsService {
  swapi = new SwapiApiEndpoints();
  store = new StoreApiEndpoints();

  constructor() {

  }

}
