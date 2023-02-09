function sum(a, b) {
  const firstNumber = Number(a)
  const secondNumber = Number(b)

  if (isNaN(firstNumber) || isNaN(secondNumber)) {
      throw new Error('arguments must be two numbers')
  }

  return firstNumber + secondNumber
}

/* tenta realizar os procedimentos abaixo, 
se houver algum erro, o codigo é parado e cai no catch 
para tratar o erro e finaliza executando os comandos do finally
*/
try {
  console.log(sum(2, 9))
  console.log(sum(true, 14))
  console.log(sum(undefined, 22))
  console.log(sum(18, "0"))
  console.log(sum(39, null))
  console.log(sum(13, "zero"))
} catch (error) {
  console.log("An error ocurred!")
  console.log(error.message)
} finally {
  console.log('Calculations finished.')
}