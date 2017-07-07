export class SwapiApiEndpoints {
  baseUrl: String = "http://swapi.co/api";
  getPeople() {
    return `${this.baseUrl}/people`;
  }

}