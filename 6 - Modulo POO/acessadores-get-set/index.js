class Wallet {
  #amount
  #username

  constructor() {
    this.#amount = 100.99 * 100 // 10099
  }

  get amount() {
    return this.#amount / 100
  }

  set username(newUsername) {
      this.#username = newUsername
  }

  get username() {
    return this.#username
  }
}

// Criando uma instancia da classe wallet
const trustWallet = new Wallet()
console.log(trustWallet.amount)

// Utilizando o metodo set
trustWallet.username = "Isaac"
console.log(trustWallet.username)

// Concatenando outra string ao user name, utilizando o metodo set
myWallet.username += " Pontes"
console.log(trustWallet.username)
