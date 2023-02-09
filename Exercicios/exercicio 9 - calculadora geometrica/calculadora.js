let opcao = null;
let resultado = 0;

function areaTriangulo() {
  let base = parseFloat(prompt("Digite o valor em metros da base do triangulo"));
  let altura = parseFloat(
    prompt("Digite o valor em metros da altura do triangulo")
  );
  return (base * altura) / 2;
}
function areaRetangulo() {
  let base = parseFloat(prompt("Digite o valor em metros da base do retangulo"));
  let altura = parseFloat(
    prompt("Digite o valor em metros da altura do retangulo")
  );
  return base * altura;
}
function areaQuadrado() {
  let lado = parseFloat(prompt("Digite o valor em metros do lado do quadrado"));
  return lado * lado;
}
function areaTrapezio() {
  let bMenor = parseFloat(
    prompt("Digite o valor em metros da base menor do trapezio")
  );
  let bMaior = parseFloat(
    prompt("Digite o valor em metros da base maior do trapezio")
  );
  let altura = parseFloat(prompt("Digite o valor em metros da altura do trapezio"));
  return ((bMaior + bMenor) * altura) / 2;
}

function areaCirculo() {
  let raio = parseFloat(prompt("Digite o valor em metros do raio do circulo"));
  return 3.1415 * (raio * raio);
}

function exibirMenu() {
  return prompt(
    "Olá bem vindo ao app calculadora geometrica!" +
      "\nPor favor, selecione uma opção abaixo:" +
      "\n 1 - Calcular area do triangulo: " +
      "\n 2 - Calcular area do retangulo: " +
      "\n 3 - Calcular area do quadrado: " +
      "\n 4 - Calcular area do trapezio: " +
      "\n 5 - Calcular area do circulo: " +
      "\n 6- Sair do programa"
  );
}

do {
  opcao = exibirMenu();

  switch (opcao) {
    case "1":
      resultado = areaTriangulo();
      alert("O valor da area to triangulo é " + resultado + "m2");
      break;
    case "2":
      resultado = areaRetangulo();
      alert("O valor da area to retangulo é " + resultado + "m2");
      break;
    case "3":
      resultado = areaQuadrado();
      alert("O valor da area do quadrado é " + resultado + "m2");
      break;
    case "4":
      resultado = areaTrapezio();
      alert("O valor da area do trapezio é " + resultado + "m2");
      break;
    case "5":
      resultado = areaCirculo();
      alert("A area do circulo é " + resultado + "m2");
      break;
    case "6":
      alert("Saindo....");
      break;

    default:
      alert("Opcão invalida!!!");
      break;
  }
} while (opcao != 6);
