const process = require("process");

process.stdout.write("Qual o seu nome?\n");

process.stdin.on("data", (teclado) => {
  process.stdout.write("\n==> Texto inserido: " + teclado);
  process.exit();
});
