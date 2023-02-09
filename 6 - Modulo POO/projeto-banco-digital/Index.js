const App = require("./App")
const Account = require("./entities/Account")

App.createUser("isaac@email.com", "Isaac Pontes")
App.createUser("lucas@email.com", "Lucas Queiroga")
App.createUser("juliana@email.com", "Juliana Conde")

console.log(App.getUsers())
App.newDeposit("isaac@email.com", 100)

App.newTransfer("isaac@email.com", "lucas@email.com", 20)

App.takeLoan("juliana@email.com", 2000, 24)
console.log(App.findUser("isaac@email.com"))
console.log(App.findUser("isaac@email.com").account)
console.log(App.findUser("lucas@email.com"))
console.log(App.findUser("lucas@email.com").account)
console.log(App.findUser("juliana@email.com"))
console.log(App.findUser("juliana@email.com").account)
console.log(App.findUser("juliana@email.com").account.loans[0].installments)