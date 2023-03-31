/**
 * Primeira função, salvará em um array um objeto planet com os atributos: nome( tipo: string),
coordenadas(tipo:tupla 4 Numeros),situação (tipo: aliases), satelites (tipo: string[])

 * Segunda função: recupera um planeta pelo nome e atualiza a situação dele

 * Terceira função: recupera um planeta pelo nome e cadastra novos satelites com um push

 * Quarta função: recupera um planeta pelo nome, recupera o indice de um determinado satelite pelo nome e realiza um slice

 * Quinta função: Lista todos os planetas e todos os satelites
*/
const planet = require("./entities/Planet");
const planet1 = new planet("Terra", [0, 0, 0, 0], "Habitado");
const planet2 = new planet("Mars", [0, 10, 0, 10], "Inabitavel");
planet.savePlanet(planet1);
planet.showPlanets();
planet.savePlanet(planet2);
planet.showPlanets();
planet.changePlanetSituation("Terra", "Inexplorado");
planet.showPlanets();
planet.addSatelitesToAPlanet("Mars", "Commet");
planet.showPlanets();
planet.addSatelitesToAPlanet("Terra", "Lua");
planet.showPlanets();
planet.removeSateliteFromPlanet("Terra", "Lua");
planet.showPlanets();
