const arrayNivel1 = [1,2,3,4,5]
const arrayNivel2 = [
                      [" Item 1.1", " Item 1.2", " Item 1.3"],
                      [" Item 2.1"," Item 2.2"," Item 2.3"],
                      [" Item 3.3"," Item 3.2"," Item 3.3"],
                      [" Item 4.1"," Item 4.2"," Item 4.3"]
                    ]

const arrayNivel3 = [
                      [["1.1.1","1.1.2"],["1.2.1","1.2.2"]],
                      [["2.1.1","2.1.2"],["2.2.1","2.2.2"]],
                      [["3.1.1","3.1.2"],["3.2.1","3.2.2"]]
                      ]

console.log(arrayNivel1)
console.log("Tabela com array nivel 2:")
console.table(arrayNivel2)


console.log("\nIterando o array 1:")
for (let i = 0; i < arrayNivel1.length; i++) {
  console.log(arrayNivel1[i])
  
}

console.log("\nIterando o array 2:")
for (let i = 0; i < arrayNivel2.length; i++) {
  for (let ii= 0; ii < arrayNivel2[i].length; ii++) {
    console.log("==> Posicao do array camada 1 == " + (i + 1) +"\n"
                + "==> Posicao do array camada 2 == "+ (ii + 1) + "\n"
                + " ==> Informação: "+arrayNivel2[i][ii])  
  }
  
}
