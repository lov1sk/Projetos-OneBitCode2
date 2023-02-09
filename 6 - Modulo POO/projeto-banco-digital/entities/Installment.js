module.exports = class Installment {
  constructor(valueParcela, qntParcelas = 1, situation){
    this.valueParcela = valueParcela
    this.qntParcelas = qntParcelas
    this.situation = situation
  }

  pagarParcela (quantity){
    this.qntParcelas -= quantity
    return `Quantidade de parcelas restantes ${this.qntParcelas}`
  }
}