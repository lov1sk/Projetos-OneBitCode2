module.exports = class Character{
  constructor(name, health, atk, def){
    this.name = name
    this.health = health
    this.atk = atk
    this.def = def
  }

  atack(target){
    if (target instanceof Character){
      target.health -= this.atk - target.def
    }
  }

}