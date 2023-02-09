const Character = require("./Character.js");

module.exports = class Thief extends Character {
  // O construtor já é herdado  automatico
  atack(target) {
    if (target instanceof Character) {
      target.health -= (this.atk - target.def) * 2;
    }
  }
}
