const planetDatabase = require("./database");
class Planet {
    name;
    coordinates;
    situation;
    satelites;
    constructor(name, coordinates, situation) {
        (this.name = name),
            (this.coordinates = coordinates),
            (this.situation = situation),
            (this.satelites = []);
    }
    static savePlanet = (planet) => {
        planetDatabase.push(planet);
        console.log(`Planet named: ${planet.name} saved`);
    };
    static changePlanetSituation = (name, newSituation) => {
        const planet = planetDatabase.find((planetItem) => planetItem.name == name);
        planet.situation = newSituation;
        console.log(`Planet: ${name} has your situation changed to "${newSituation}"`);
    };
    static addSatelitesToAPlanet = (name, newSatelite) => {
        const planet = planetDatabase.find((planetItem) => planetItem.name == name);
        planet.satelites.push(newSatelite);
        console.log(`Planet: ${name} add a satelite named: "${newSatelite}"`);
    };
    static removeSateliteFromPlanet = (name, sateliteName) => {
        const planet = planetDatabase.find((planetItem) => planetItem.name == name);
        const sateliteToRemove = planet.satelites.findIndex((sateliteItem) => sateliteItem == sateliteName);
        console.log(sateliteToRemove);
        planet.satelites.splice(sateliteToRemove, 1);
        console.log(`Satelite: ${sateliteName} removed from planet ${planet.name}`);
    };
    static showPlanets = () => {
        console.log(planetDatabase);
    };
}
module.exports = Planet;
