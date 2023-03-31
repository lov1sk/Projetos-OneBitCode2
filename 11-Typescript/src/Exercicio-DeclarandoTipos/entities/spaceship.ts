const spaceshipsDatabase = [];
class spaceship {
  static createSpaceship(spaceship: {
    name: string;
    pilot: string;
    crewLimit: number;
    crew?: string[];
    inMission?: boolean;
  }) {
    spaceshipsDatabase.push(spaceship);
  }
  static showSpaceshipByName(name: string) {
    return spaceshipsDatabase.find((item) => item.name == name);
  }
  static addMemberToSpaceship(
    name: string,
    member: { name: string; age: number }
  ) {
    const spaceshipRecovered = spaceship.showSpaceshipByName(name);
    if (spaceshipRecovered.crew.length >= spaceshipRecovered.crewLimit) {
      throw new Error("Crew Limit excedeed");
    }
    spaceshipRecovered.crew.push(member);
    return spaceshipRecovered;
  }

  static sendSpaceshipToAMission(name: string) {
    const spaceshipRecovered = spaceship.showSpaceshipByName(name);
    const cutLimit = spaceshipRecovered.crewLimit / 3;

    if (spaceshipRecovered.inMission) {
      throw new Error("Spaceship already in mission");
    }

    if (spaceshipRecovered.crew.length < cutLimit) {
      throw new Error("Not have enough members in the spaceship");
    }

    spaceshipRecovered.inMission = true;
  }
  static showAll() {
    return spaceshipsDatabase
  }
}
module.exports = spaceship;
