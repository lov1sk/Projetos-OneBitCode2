const person = {
  nome: "Lucas",
  telefone: "11 95175-9223",
  endereco: "Rua: Ricardo Moretti, 185",
  pais: ["Carlos", "Deborah"],
};

const { nome, pais } = person;
const [pai, mae] = pais;

console.log(
  `Nome da Pessoa: ${nome}
Nome do pai: ${pai}
Nome da mãe ${mae}`
);
