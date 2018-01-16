export class SwapiApiEndpoints {
  baseUrl: string = "http://swapi.co/api";

  getPeople(): string {
    return `${this.baseUrl}/people/`;
  }

  getPersonById(id: string): string {
    return `${this.getPeople()}${id}/`;
  }

  searchPeople(term: string): string {
    return this.search(this.getPeople(), term);
  }

  private search(endpoint, term): string {
    return `${endpoint}?search=${term}`;
  }

}