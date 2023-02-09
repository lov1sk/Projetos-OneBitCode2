//import dayjs from 'dayjs' // ES 2015
const dayjs = require("dayjs");

let date = newBirth("2000-04-04");

//Função que recebe uma data (2000-04-04)
function newBirth(date) {
  //A data que foi passada
  const birthDate = dayjs(date);
  //A data de hoje
  const today = dayjs();
  //A diferença entre a data de hoje e a de entrada, em anos
  const age = today.diff(birthDate, "year");
  //Pegando a data de entrada e adicionando a idade da pessoa + 1 ano
  const nextBirth = birthDate.add(age + 1, "year");
  //Pegando a data 04/04/2023 e subtraindo com os dias de hoje
  const leftDays = nextBirth.diff(today, "day");
  
  /* Mostrar no terminal a idade, data do proximo aniversario e 
   * quantos dias faltam para o proximo niver */
  console.log(
    ` Sua data de aniversario: ${birthDate.format("DD/MM/YYYY")}
  Sua idade: ${age}
  Seu proximo aniversario: ${nextBirth.format("DD/MM/YYYY")}
  Faltam (${leftDays} dias) para você fazer aniversario`
  );
}
