
/**
 * Função simples que retorna uma promisse para o operador spread.
 * Toda função async, reconhece que seu retorno é uma promisse
 * 
 * Se desejar Resolver uma promisse, apenas retornar ela, se quiser rejeitar, usar o 
 * metodo global da classe Promisse
 */
async function asyncSpread(element) {
  if (typeof element !== "string") {
    return Promise.reject("args must be a string")
  }
  return [...element]
}

/**
 * Execução da promisse com .then e .catch
 */
asyncSpread("123").then(result =>{
  console.log(result);
}).catch(error =>{
  console.log(error)
})

/**
 * Execução da promisse com await, que é uma alternativa ao .then e .catch
 * Com o await, o codigo fica parado naquela execuxao até a promisse retornar valor
 */
async function execute() {
  try {
    const spreadFunc = await asyncSpread("LUCAS")
    console.log(spreadFunc)
  } catch (error) {
    console.log(error);
  }
}

execute()