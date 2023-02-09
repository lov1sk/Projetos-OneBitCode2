// função async que recebe peso e altura e retorna uma promisse
// dentro da promisse, primeiro um if/else que deve comparar se as entradas são numeros com o isNaN
// se for if, a promisse é resolvida, se for else é rejeitada

function calculateImc(peso, altura) {
  executePromisse(peso, altura)
    .then((result) => {
      console.log(`A promisse foi resolvida, o imc é de ${result}`);
      if (result < 18.5) {
        return "magreza " + result;
      } else if (result >= 18.5 && result <= 24.9) {
        return "normal " + result;
      } else if (result >= 25 && result <= 29.9) {
        return "sobrepeso " + result;
      } else if (result >= 30 && result <= 39.9) {
        return "obesidade " + result;
      } else {
        return "obesidade grave " + imc;
      }
    })
    .catch((result) => {
      console.log(`A promisse foi rejeitada, motivo: ${result}`);
    });
}
function executePromisse(peso, altura) {
  return new Promise((resolve, reject) => {
    if (typeof peso !== "number" || typeof altura !== "number") {
      reject("Algum dos argumentos não são do tipo numero");
    } else {
      resolve(peso / Math.pow(altura, 2));
    }
  });
}

calculateImc(75, 1.7);
