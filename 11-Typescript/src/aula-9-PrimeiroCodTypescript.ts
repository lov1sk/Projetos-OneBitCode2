function sendSpaceship(name: string, captain: string) {
  const spaceship = {
    name,
    captain,
    speed: 20,
    inMission: true,
    crew: [],
  };
  alert(`A nave ${spaceship.name} foi enviada em uma missão`);
  return spaceship;
}

function changeVelocity(
  targetSpeed: number,
  spaceship: { name: string; speed: number }
) {
  spaceship.speed = targetSpeed;
  alert(
    `Aumentando a velocidade da ${spaceship.name} para ${targetSpeed} km/h`
  );
}

const spaceshipname = prompt("Digite o nome da primeira nave");
const spaceshipcaptain = prompt("Digite o nome do capitão");

const currentShip = sendSpaceship(spaceshipname, spaceshipcaptain);
const speed = parseInt(prompt("Para qual velocidade deseja mudar"));
changeVelocity(speed, currentShip);
