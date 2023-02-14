const http = require("http");

/**
 * Criando um novo servidor, passando a requisição e a resposta(que o mesmo vai devolver) como parametro.
 * O servidor devolve para o view o Hello world em H1
 */
const server = http.createServer((req, res) => {
  console.log(
    `Informações:
    => Metodo utilizado: ${req.method}
    => Url chamada na requisição: ${req.url}
    `
  );
  res.end("<h1>Olá servidor NodeJs</h1>");
});

//Ativando o servidor para ouvir todas as chamadas na porta 3000
server.listen(3000, () => {
  console.log("Servidor OK");
});
