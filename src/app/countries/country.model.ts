export class Country {
  public name: string;
  public population: number;
  public region: string;
  public capital: string;
  public imagePath: string;
  public id: number;

  constructor(
    name: string,
    population: number,
    region: string,
    capital: string,
    imagePath: string,
    id?: number
  ) {
    this.name = name;
    this.population = population;
    this.region = region;
    this.capital = capital;
    this.imagePath = imagePath;
    this.id = id;
  }
}
