const { error } = require("console");
const file = require("fs");

//Cria ou sobreescreve o arquivo teste.txt com a msg "Hello NodeJS"
file.writeFile("teste.txt", "Hello NodeJS", (error) => {
  console.log(error);
});

file.appendFile(
  "teste.txt",
  "\nInterpolando mais informações no arquivo.....",
  (error) => {
    console.log(error);
  }
);

file.rename("teste.txt", "teste2.txt", (error) => {
  console.log(error);
});
