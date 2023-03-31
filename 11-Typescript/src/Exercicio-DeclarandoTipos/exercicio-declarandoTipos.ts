const spaceshipModel = require("./entities/spaceship");
let option = "";

do {
  option = prompt(
    `Bem vindo:
1 - Para adicionar uma nova nave
2 - Cadastrar um novo membro a nave
3 - Para mandar uma nave para a missão
4 - Listar as naves

Qualquer outra tecla sai do programa
`
  );
  switch (option) {
    case "1":
      const name = prompt("Insira o nome da nave: ");
      const pilot = prompt("Insira o nome do piloto");
      const crewLimit = prompt("Insira a capacidade maxima da nave");
      spaceshipModel.createSpaceship({
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false,
      });
      alert("Sucesso");
      break;
    case "2":
      let nameToSearch = prompt("Insira o nome da nave: ");
      const nameMember = prompt("Insira o nome do membro: ");
      const ageMember = prompt("Insira a idade do membro: ");
      spaceshipModel.addMemberToSpaceship(nameToSearch, {
        name: nameMember,
        age: ageMember,
      });
      break;
    case "3":
      nameToSearch = prompt("Insira o nome da nave: ");
      spaceshipModel.sendSpaceshipToAMission(nameToSearch);
      break;
    case "4":
      const database = spaceshipModel.showAll();
      console.log(database);
      break;

    default:
      option = "5";
      break;
  }
} while (option != "5");

/** Testes 
spaceshipModel.createSpaceship({
  name: "Lucas Spaceship",
  pilot: "Lucas",
  crewLimit: 2,
  crew: [],
  inMission: false,
});
spaceshipModel.createSpaceship({
  name: "Tamires Spaceship",
  pilot: "Tamires",
  crewLimit: 1,
  crew: [],
  inMission: true,
});
spaceshipModel.addMemberToSpaceship("Lucas Spaceship", {
  name: "Carlos",
  age: 50,
});
spaceshipModel.sendSpaceshipToAMission("Lucas Spaceship");
//addMemberToSpaceship("Lucas Spaceship", { name: "Tamires", age: 22 });
*/
