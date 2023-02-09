module.exports = class Address {
  constructor(street, number, neighborhood, city, state) {
    this.street = street
    this.number = number
    this.neighborhood = neighborhood
    this.city = city
    this.state = state
  }

  fullAddress() {
    return `Endereço completo:
    Rua ${this.street}, nº ${this.number}. ${this.neighborhood}, ${this.city}/${this.state}`
  }
}

