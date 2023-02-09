class Vehicle {
  move(){
    console.log("O veiculo esta em movimento");
  }
}

class Car extends Vehicle {
  move(speed = 20){
    console.log("O carro esta se movendo a " + speed +" km/h");
  }
}

class Ship extends Vehicle {
  move(speed = 15){
    console.log("O navio esta se movendo a " + speed +" km/h");
  }
}
class Airplane extends Vehicle {
  move(speed = 30){
    console.log("A aeronave esta se movendo a " + speed +" km/h");
  }
}

const start = (vehicle) =>{
  vehicle.move()
}
/**
 * 1º Meio
 */

console.log("\nPrimeiro console log");
const delorean = new Car()
const blackPearl = new Ship ()
const epoch = new Airplane()

delorean.move()
blackPearl.move()
epoch.move(50)

/**
 * 2º Meio
 */
console.log("\nSegundo console log");
start(delorean)
start(blackPearl)
start(epoch)