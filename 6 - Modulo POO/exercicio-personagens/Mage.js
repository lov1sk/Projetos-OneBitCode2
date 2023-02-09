const Character = require("./Character.js");

module.exports = class Mage extends Character {
  constructor(name, health, atk, def, magic) {
    super(name, health, atk, def);
    this.magic = magic;
  }
  atack(target) {
    target.health -= this.magic + this.atk - target.def;
  }
  increaseHealth(target) {
    target.health += 2 * this.magic;
  }
};
