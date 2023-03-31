const planetDatabase = require("./database");

type situationType = "Habitado" | "Habitavel" | "Inabitavel" | "Inexplorado";
type coordinatesType = [number, number, number, number];

class Planet {
  public name;
  public coordinates;
  public situation;
  public satelites;
  constructor(
    name: string,
    coordinates: coordinatesType,
    situation: situationType
  ) {
    (this.name = name),
      (this.coordinates = coordinates),
      (this.situation = situation),
      (this.satelites = []);
  }

  static savePlanet = (planet: Planet) => {
    planetDatabase.push(planet);
    console.log(`Planet named: ${planet.name} saved`);
  };
  static changePlanetSituation = (
    name: string,
    newSituation: situationType
  ) => {
    const planet = planetDatabase.find((planetItem) => planetItem.name == name);
    planet.situation = newSituation;
    console.log(
      `Planet: ${name} has your situation changed to "${newSituation}"`
    );
  };
  static addSatelitesToAPlanet = (name: string, newSatelite: string) => {
    const planet = planetDatabase.find((planetItem) => planetItem.name == name);
    planet.satelites.push(newSatelite);
    console.log(`Planet: ${name} add a satelite named: "${newSatelite}"`);
  };
  static removeSateliteFromPlanet = (name: string, sateliteName: string) => {
    const planet = planetDatabase.find((planetItem) => planetItem.name == name);
    const sateliteToRemove = planet.satelites.findIndex(
      (sateliteItem) => sateliteItem == sateliteName
    );
    console.log(sateliteToRemove);

    planet.satelites.splice(sateliteToRemove, 1);
    console.log(`Satelite: ${sateliteName} removed from planet ${planet.name}`);
  };
  static showPlanets = () => {
    console.log(planetDatabase);
  };
}

module.exports = Planet;
