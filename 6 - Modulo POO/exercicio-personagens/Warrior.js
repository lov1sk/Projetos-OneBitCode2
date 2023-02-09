const Character = require("./Character.js");

module.exports = class Warrior extends Character {
  constructor(name, health, atk, def, shield) {
    super(name, health, atk, def);
    this.shield = shield;
    this.position = "defesa";
  }

  atack(target) {
    if (this.position === "ataque") {
      super.atack(target)
    }
  }
  changePos(position) {
    if (position === "ataque" || position === "defesa") {
      this.position = position;
      if (this.position === "defesa") {
        this.defPos();
      }
    } else {
      console.log("Insira uma posição valida");
      return;
    }
  }

  defPos(){
    this.def += this.shield
    console.log(this)
  }
};
