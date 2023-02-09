const Deposit = require("./entities/Deposit.js");
const Loan = require("./entities/Loan.js");
const Transfer = require("./entities/Transfer.js");
const User = require("./entities/User.js");

// criar uma base de dados para o usuario
module.exports = class App {
  // salvar cada user em um array
  static #users = [];

  // metodo criar unico usuario por email
  static createUser(name, email) {
    const userExists = this.findUser(email);
    if (!userExists) {
      this.#users.push(new User(name, email));
      console.log("feito");
    } else {
      throw new Error(
        `Não foi possivel cadastrar o usuario, pois o email já é vinculado a uma conta`
      );
    }
  }

  // metodo find user by email
  static findUser(email) {
    const user = this.#users.find((user) => user.email === email);
    return user ;
  }

  static getUsers() {
    return this.#users;
  }

  // metodos para realizar depositos, transferencias e emprestimos vinculado a uma conta
  static newDeposit(userEmail, value) {
    const user = this.findUser(userEmail);
    if (user) {
      user.account.addDeposit(value);
    }
  }

  static takeLoan(userEmail, loanValue, parcelas) {
    const user = App.findUser(userEmail);
    if (user) {
      user.account.addLoan(loanValue, parcelas);
    }
  }

  static newTransfer(toUserEmail, fromUserEmail, valueTransfer) {
    const toUser = App.findUser(toUserEmail);
    const fromUser = App.findUser(fromUserEmail);
    if (fromUser && toUser) {
      fromUser.account.addTransfer(toUser, fromUser, valueTransfer);
      toUser.account.addTransfer(toUser, fromUser, valueTransfer);
    }
  }
};
