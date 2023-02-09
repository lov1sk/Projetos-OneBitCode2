/*
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
}*/

// Função calcular IMC, recebe como parametro o peso e altura e executa a função
// essa função vai aguardar a função de calculate IMC finalizar

async function calculate(peso, altura) {
  try {
    const resultado = await executePromisse(peso, altura).then((result) => {
      if (result < 18.5) {
        return "magreza " + result;
      } else if (result >= 18.5 && result <= 24.9) {
        return "Normal " + result;
      } else if (result >= 25 && result <= 29.9) {
        return "sobrepeso " + result;
      } else if (result >= 30 && result <= 39.9) {
        return "obesidade " + result;
      } else {
        return "obesidade grave " + result;
      }
    });
    console.log(`Seu IMC é: ${resultado}`)
  } catch (error) {
    console.log(error);
  }
}

async function executePromisse(peso, altura) {
  if (typeof peso !== "number" || typeof altura !== "number") {
    return Promise.reject("Algum dos argumentos não são do tipo numero");
  } else {
    return peso / Math.pow(altura, 2);
  }
}

calculate(70, 1.8);
