export class Country {
  public name: string;
  public population: number;
  public region: string;
  public capital: string;
  public imagePath: string;
  constructor(
    name: string,
    population: number,
    region: string,
    capital: string,
    imagePath: string
  ) {
    this.name = name;
    this.population = population;
    this.region = region;
    this.capital = capital;
    this.imagePath = imagePath;
  }
}
