//const database = [];
class Spaceship {
  private name: String;
  private pilot: String;
  private speed: number;

  constructor(
    name: String,
    pilot: String = "",
    speed: number = 20,
    inMission?: any
  ) {
    this.name = name;
    this.pilot = pilot;
    this.speed = speed;
  }

  //static store (spaceship) = {database.push(spaceship)};
}
