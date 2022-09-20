export class Country {
  public name: string;
  public population: number;
  public region: string;
  public subregion: string;
  public capital: string[];
  public imagePath: string;
  public currencies: { [key: string]: { name: string } };
  public languages: { [key: string]: string };
  public borders: string[];
  public shortName: string;
  public continents: string[];
  public id: number;

  constructor(
    name: string,
    population: number,
    region: string,
    subregion: string,
    capital: string[],
    imagePath: string,
    currencies: { [key: string]: { name: string } },
    languages: { [key: string]: string },
    borders: string[],
    shortName: string,
    continents: string[],
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
