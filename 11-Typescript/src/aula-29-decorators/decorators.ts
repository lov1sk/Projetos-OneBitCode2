/**
 * Decorators sõa funções que podem ser atreladas a execuções de outras funções, para que ambas executem no mesmo ciclo
 * sua sintaxe coincide em "@nomeDecorator()" em cima da declaração da função que sera principal para ser executada
 * Porem são usadas para executar junto com funções de alguma determinada classe
 *
 * Geralmente em frameworks a maioria das vezes iremos consumir decorators ao inves de cria-los
 *
 */

function hi() {
  // key: Função que chama o decorator, descriptor.value: a função que o decorator retorna e executa
  return function (target, key, descriptor) {
    console.log("Hello,World");
  };
}

class person {
  @hi() // Chamada da função decorator
  static Welcome() {
    console.log(
      "In this journey, you will see a lot of typescript/javascript sintax and features"
    );
  }
}
person.Welcome();
