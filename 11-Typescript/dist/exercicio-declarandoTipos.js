const spaceshipsDatabase = [];
function createSpaceship(spaceship) {
    spaceshipsDatabase.push(spaceship);
}
function showSpaceshipByName(name) {
    return spaceshipsDatabase.find((item) => item.name == name);
}
function addMemberToSpaceship(name, member) {
    const spaceshipRecovered = showSpaceshipByName(name);
    if (spaceshipRecovered.crew.length >= spaceshipRecovered.crewLimit) {
        throw new Error("Crew Limit excedeed");
    }
    spaceshipRecovered.crew.push(member);
    return spaceshipRecovered;
}
function sendSpaceshipToAMission(name) {
    const spaceshipRecovered = showSpaceshipByName(name);
    const cutLimit = spaceshipRecovered.crewLimit / 3;
    if (spaceshipRecovered.inMission) {
        throw new Error("Spaceship already in mission");
    }
    if (spaceshipRecovered.crew.length < cutLimit) {
        throw new Error("Not have enough members in the spaceship");
    }
    spaceshipRecovered.inMission = true;
}
/** Testes */
createSpaceship({
    name: "Lucas Spaceship",
    pilot: "Lucas",
    crewLimit: 2,
    crew: [],
    inMission: false,
});
createSpaceship({
    name: "Tamires Spaceship",
    pilot: "Tamires",
    crewLimit: 1,
    crew: [],
    inMission: true,
});
addMemberToSpaceship("Lucas Spaceship", { name: "Carlos", age: 50 });
sendSpaceshipToAMission("Lucas Spaceship");
//addMemberToSpaceship("Lucas Spaceship", { name: "Tamires", age: 22 });
console.log(spaceshipsDatabase);
