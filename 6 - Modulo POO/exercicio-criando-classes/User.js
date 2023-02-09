class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }

  login(email, senha) {
    if (email === this.email && senha === this.password) {
      console.log(`O login foi autenticado com Sucesso`);
    }else {
      console.log("Não foi possivel autenticar");
    }
  }
}

const user1 = new User(
  "Lucas Ribeiro Santana",
  "lucassantana00@gmail.com",
  "34791034"
);

console.log(user1);
user1.login("lucassantana00@gmail.com", "34791034");
