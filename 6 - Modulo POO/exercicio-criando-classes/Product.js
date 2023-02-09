class Product {
  constructor(name, description, price, inStock) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.inStock = 0;
  }
  addToStock(quantity) {
    this.inStock += quantity;
  }
  calculateDiscount(percentage) {
    const finalPrice = parseFloat(this.price) - (percentage / 100 * parseFloat(this.price));
    return finalPrice;
  }
}

const product1 = new Product("Bola", "Uma bola de futebol", 250,20);
console.log(product1)

product1.addToStock(100)
console.log(product1.calculateDiscount(20))

console.log(product1)
