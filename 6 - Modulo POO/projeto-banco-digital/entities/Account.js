const Deposit = require("./Deposit.js");
const Loan = require("./Loan.js");
const Transfer = require("./Transfer.js");


module.exports = class Account {
  #balance;
  #deposits;
  #loans;
  #transfers;

  constructor(user) {
    this.#balance = 0;
    this.#deposits = [];
    this.#loans = [];
    this.#transfers = [];
    this.owner = user;
  }

   addDeposit(depositValue) {
    const deposito = new Deposit(depositValue);
    this.#balance += deposito.value;
    this.#deposits.push(deposito)
  }

   addLoan(loanValue,qntParcelas) {
    const emprestimo = new Loan(loanValue,qntParcelas);
    this.#balance += emprestimo.loanValue;
    this.#loans.push(emprestimo);
  }

   addTransfer(userSender,userReceived,value) {
    const transferencia = new Transfer(userSender,userReceived,value);
    //transferencia feita para outra conta
    if (transferencia.userSender === this.owner.name) {
      this.#balance -= transferencia.value
      this.#transfers.push(transferencia)
    } 
    //transferencia feita para essa conta
    else {
      this.#balance += transferencia.value
      this.#transfers.push(transferencia)
    }
  }
};
