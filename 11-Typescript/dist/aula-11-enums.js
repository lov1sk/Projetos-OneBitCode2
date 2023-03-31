var games;
(function (games) {
    games["game1"] = "God of War";
    games["game2"] = "Fifa";
})(games || (games = {}));
var Roles;
(function (Roles) {
    Roles["ADMIN"] = "Administrator";
    Roles["USER"] = "User";
})(Roles || (Roles = {}));
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
