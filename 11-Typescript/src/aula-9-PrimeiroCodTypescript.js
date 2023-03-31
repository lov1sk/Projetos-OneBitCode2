function sendSpaceship(name, captain) {
    var spaceship = {
        name: name,
        captain: captain,
        speed: 20,
        inMission: true,
        crew: [],
    };
    alert("A nave ".concat(spaceship.name, " foi enviada em uma miss\u00E3o"));
    return spaceship;
}
function changeVelocity(targetSpeed, spaceship) {
    spaceship.speed = targetSpeed;
}
var spaceship1name = prompt("Digite o nome da primeira nave");
var spaceship2captain = prompt("Digite o nome da segunda nave");
sendSpaceship(spaceship1name, spaceship2captain);
