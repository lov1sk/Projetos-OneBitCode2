let palavra = prompt("Digite uma palavra");
let palindromoF = "";
let palindromoT = "";


for (let index = 0; index < palavra.length; index++) {
  palindromoF += palavra[index];
}
console.log("Palavra original: " + palindromoF);

for (let i = palavra.length - 1; i >= 0; i--) {
  palindromoT += palavra[i];
}
console.log("\nPalavra invertida: " + palindromoT);

if (palindromoF === palindromoT) {
  alert("Voce digitou um palindromo");
} else {
  alert("Voce nao digitou um palindromo");
}
