function setHealthToACharacter(character, health) {
    const newCharacter = character;
    newCharacter.healthPts = health;
    return newCharacter;
}
const thief = { name: "Lucas Thief", healthPts: 0, stealthPts: 1000 };
const mage = {
    name: "Carlos Mage",
    healthPts: 0,
    magicPts: 1000,
    element: "Fogo",
};
const thief1 = console.log(setHealthToACharacter(thief, 2000));
const mage1 = console.log(setHealthToACharacter(mage, 3000));
