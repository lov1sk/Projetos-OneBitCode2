/**
 * Promisse nº 01, retorna uma soma simples
 * 
 */

function asyncSum(a, b) {
  return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
          reject('arguments must be of type number')
      } else {
          resolve(a + b)
      }
  })
}

/**
 * Promisse nº 02, retorna uma subtração simples
 * 
 */
function asyncSubtract(a, b) {
  return new Promise((resolve, reject) => {
      if (typeof a !== 'number' || typeof b !== 'number') {
          reject('arguments must be of type number')
      } else {
          resolve(a - b)
      }
  })
}

/**
 * Salvando as promisses nas variaveis, para poder ser usada no promisse all
 */
const sumResult = asyncSum(50, 33)
const subtractResult = asyncSubtract(50, null)

/**
 * Promisse all, metodo global que recebe como parametros de entrada um array de promisses
 * só executa o metodo .then se todas as promisses passadas forem resolvidas, se uma delas for 
 * rejeitada, ele cai no bloco catch
 */
Promise.all([sumResult, subtractResult]).then(results => {
  console.log(results)
}).catch(err => {
  console.log(err)
})