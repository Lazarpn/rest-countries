export class Country {
  public name: string;
  public population: number;
  public region: string;
  public subregion: string;

  public capital: string;
  public imagePath: string;
  public currencies: {};
  public languages: any;
  public borders;
  public id: number;
  public shortName: string;
  public continents: any;

  constructor(
    name: string,
    population: number,
    region: string,
    subregion: string,
    capital: string,
    imagePath: string,
    currencies: {},
    languages: any,
    borders: [],
    shortName: string,
    continents: any,
    id?: number
  ) {
    this.name = name;
    this.population = population;
    this.region = region;
    this.subregion = subregion;
    this.capital = capital;
    this.imagePath = imagePath;
    this.currencies = currencies;
    this.languages = languages;
    this.borders = borders;
    this.shortName = shortName;
    this.continents = continents;
    this.id = id;
  }
}
