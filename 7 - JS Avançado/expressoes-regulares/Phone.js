
module.exports = class PhoneNumber{
  constructor(phoneNumberString){
    /**
     * Salva a string passada com possiveis erros de digitação, espaços a mais ou letras e os remove
     * 
     * elementos de espaço e letras a - z          flag global          transformar em vazio
     * (        /[\sa-zA-Z]/                            g,                    "")
     */
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "")

    /**
     * Realiza uma comparação, para os dois numeros depois do "+" e salva o resultado no atributo countryCode
     * 
     * Utiliza o index 0, pois o metodo match do JS retorna um array (com o resultado match, o index da string onde o elemento foi achado,
     *  a string inteira original, e os grupos de elementos).
     * 
     * Neste caso, para salvar no atributo, precisamos apenas do resultado match
     * (?<=\+)\d{1,3}
     * 
     */
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)

    /**
     * Realiza uma comparação, para os dois numeros dentro do parenteses "( )" e salva o resultado no atributo ddd
     * (?<=\()\d+(?=\))
     */
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]


    /**
     * Retorna tudo que for depois do ")" que seria o fechamento de "( ddd )" da string fixedString, todas as correspondencias,
     * com a observação que todos os "-" são substituidos por elementos vazios atraves do metodo replace
     * 
     */
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "")
  }
}

