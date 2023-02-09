
/**
 * função passo 2
 */
function step02() {
  console.log('Passo 02')
}

console.log('Passo 01')
step02()
console.log('Passo 03')
console.log('Passo 04')
/**
 * metodo assincrono, que leva 2 minutos para terminar execução
 */
setTimeout(() => {
    console.log('Passo 05 async')
}, 2 * 1000)
console.log('Passo 06')