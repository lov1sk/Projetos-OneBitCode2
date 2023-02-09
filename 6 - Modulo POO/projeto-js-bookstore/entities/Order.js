module.exports = class Order {
  #total
  #items
  #user

  // Constroi para cada item que for inserido no carrinho
  constructor(items, user) {
    //Desestrutura o objeto contido na posição do array e faz a soma do total
    items.forEach(({ product, quantity }) => {
      if (quantity > product.inStock) {
        throw new Error('Quantidade insuficiente em estoque!')
      }
    })
    this.#items = items
    this.#user = user
    this.#total = items.reduce((sum, { product, quantity }) => sum + (product.price * quantity), 0)
  }

  // Retorna o usuario e o que ele comprou
  get data() {
    return {
      items: this.#items,
      user: this.#user,
      total: this.#total
    }
  }
}