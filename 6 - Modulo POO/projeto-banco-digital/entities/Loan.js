const Installment = require("./Installment.js")

module.exports = class Loan {
  static #basicFee

  constructor(loanValue, parcelas, basicFee = 1.1){
    this.loanValue = loanValue
    this.createdAt = new Date()
    this.parcelas = new Installment(parcela)
    this.#basicFee = basicFee
  }

  static get getBasicFee(){
    return this.#basicFee
  }
  static set setBasicFee(fee){
    this.#basicFee = fee
  }
}