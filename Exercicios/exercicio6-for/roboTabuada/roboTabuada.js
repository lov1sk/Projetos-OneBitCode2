let numero = parseInt(prompt("Digite um numero:"));
let numeroAlterado = 0;
let exibicao = "\n";

for (let index = 1; index <= 20; index++) {
  numeroAlterado = index * numero;
  exibicao += numero + " x" + index + " = " + numeroAlterado + "\n";
  alert(exibicao);
}
