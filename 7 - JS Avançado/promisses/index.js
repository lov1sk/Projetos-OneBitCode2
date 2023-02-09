/**
 * Função que retorna uma promisse para testes, a qual demora 3 segundos para ser resolvida
 *
 */
function execute() {
  return new Promise((resolve, reject) => {
    console.log("Entrei na promise, levarei 3 segundos para resolver...");
    const willReject = "n"
    if (willReject == "s") {
      reject("rejeitada");
    } else {
      setTimeout(() => {
        resolve("Resolved");
      }, 1000 * 3);
      console.log("Enquanto isso, aguarde por favor");
    }
  });
}

/**
 * Atribuição a constante "p" a função que retorna a execução de uma promisse
 * Seu retorno aqui sera pending, pois não deu o tempo dela ser resolvida
 */
const p = execute();

/**
 * Especie de if/else da promisse, se ela for resolvida, executará a função de callback
 * do p.then, se ela for rejeitada, executara o catch
 */
p.then(() => {
  /**
   * Temporizador para ver a promisse resolvida, demora 4 segundos para ser executado
   */
  setTimeout(() => {
    console.log(p);
  }, 1000 * 4);
}).catch(() => {
  console.log("promisse rejeitada");
});
