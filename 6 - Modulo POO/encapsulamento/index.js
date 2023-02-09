class Account {
  // atributos privados (sempre criados fora do contrutor)
  #email
  #password
  #balance
  //Construtor que recebe um outro objeto como parametro
  constructor(user) {
    this.#email = user.email
    this.#password = user.password
    this.#balance = 100
  }
  //metodo publico para resgatar todos os atributos privados
  getAtributes(){
    return `
    Email: ${this.#email}
    Senha: ${this.#password}`
  }
  //metodo publico para resgatar o atributo privado balance, mediante autenticação
  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance
    } else {
      return "error"
    }
  }
  //metodo privado
  #authenticate(email, password) {
    return this.#email === email && this.#password === password
  }
}

/**
 * Criação de variaveis e instancias para teste
 */
const user = {
  email: "lucassantana00@gmail.com",
  password:"34791034"
}

const myAccount = new Account(user)
console.log(myAccount)
console.log(myAccount.getAtributes())
console.log(myAccount.getBalance("lucassantana00@gmail.com","34791034"))