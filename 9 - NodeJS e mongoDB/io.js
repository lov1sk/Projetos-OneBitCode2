const process = require("process");

//Comando para escrever no console a msg, parecido com o console.log
process.stdout.write("Qual o seu nome?\n");

/**
 * Metodo para entrar com dados no node, primeiro é especificado o tipo de entrada
 * (no caso dados) depois a variavel que sera armazenado tudo o que for escrito no
 * console (no caso armazena na variavel teclado)
 */
process.stdin.on("data", (teclado) => {
  process.stdout.write("\n==> Texto inserido: " + teclado);
  process.exit();
});
