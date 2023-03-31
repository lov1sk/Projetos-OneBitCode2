enum games {
  game1 = "God of War",
  game2 = "Fifa",
}

enum Roles {
  ADMIN = "Administrator",
  USER = "User",
}

const spaceships = [
  {
    name: "spaceship1",
    pilot: "Lucas",
    passangers: 10,
    nacionality: "EUA",
  },
  {
    name: "spaceship2",
    pilot: "Carlos",
    passangers: 5,
    nacionality: "Brasil",
  },
];

const carlosSpaceship = spaceships.find((item) => item.pilot === "Carlos");
console.log(carlosSpaceship);
