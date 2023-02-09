let vagas = [];
let opcao = null;

function listarVaga() {
  const vagasTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    textoFinal += indice + 1 + ". ";
    textoFinal += vaga.nomeVaga;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");
  alert("Vagas disponiveis: \n" + vagasTexto);
}

// ok
function cadastrarVaga() {
  //Entrada de dados
  const nomeVaga = prompt("Digite o nome da vaga:");
  const descricao = prompt("Insira uma breve descrição:");
  const dtLimite = prompt("Qual a data limite?");

  //Criação do objeto vaga aqui!!!!
  const novaVaga = { nomeVaga, descricao, dtLimite, candidatos: [] };
  console.log(novaVaga);

  //Confirmação dos dados
  const confirmacao = confirm("Deseja mesmo salvar essas informações?");
  if (confirmacao === true) {
    vagas.push(novaVaga);
    alert("Vaga cadastrada!");
  } else {
    alert("Vaga não cadastrada!");
  }
}

// ok
function visualizarVaga() {
  const indexVaga =
    parseInt(prompt("Digite o indice da vaga que esta procurando: ")) - 1;
  const vaga = vagas[indexVaga];

  if (vaga != undefined) {
    alert(
      indexVaga +
        1 +
        ". " +
        "\nNome: " +
        vaga.nomeVaga +
        "\nDescriçao: " +
        vaga.descricao +
        "\nData Limite: " +
        vaga.dtLimite +
        "\nQuantidade de candidatos: " +
        vaga.candidatos.length
    );
  } else {
    alert("Vaga não existente");
  }
}

//ok
function inscreverCandidato() {
  // Entrada de informações
  const nomeCandidato = prompt("Digite o nome do candidato: ");
  const indexVaga = parseInt(prompt("Qual é o indice da vaga?")) - 1;
  const vaga = vagas[indexVaga];
  if (vaga != undefined) {
    const confirmacao = confirm(
      "Deseja inserir o candidato na vaga abaixo?\n" +
        "Nome do candidato: " +
        nomeCandidato +
        "\n" +
        "Indice da vaga: " +
        (indexVaga + 1) +
        ". " +
        "\nNome: " +
        vaga.nomeVaga +
        "\nDescriçao: " +
        vaga.descricao +
        "\nData Limite: " +
        vaga.dtLimite
    );
    if (confirmacao === true) {
      //Cadastro do candidato no array vagas
      vaga.candidatos.push(nomeCandidato);
      alert(
        "O candidato foi devidamente cadastrado na vaga: " + (indexVaga + 1)
      );
    } else {
      alert("Não foi feito o cadastro!");
    }
  } else {
    alert("Vaga não existente");
  }
  //Mostrar info, antes de confirmar

  console.log(vagas);
}

function excluirVaga() {
  const indexVaga =
    parseInt(prompt("Digite o indice da vaga que deseja excluir: ")) - 1;
  const vaga = vagas[indexVaga];

  if (vaga != undefined) {
    const confirmacao = confirm(
      "Deseja mesmo excluir a vaga abaixo?\n" +
        (indexVaga + 1) +
        ". " +
        "\nNome: " +
        vaga.nomeVaga +
        "\nDescriçao: " +
        vaga.descricao +
        "\nData Limite: " +
        vaga.dtLimite +
        "\nQuantidade de candidatos: " +
        vaga.candidatos.length
    );
    if (confirmacao === true) {
      /* exclui de fato a vaga*/
      vagas.splice(indexVaga, 1);
      alert("Vaga excluida com sucesso!");
    } else {
      alert("Nao foi excluido a vaga!");
    }
  } else {
    alert("Vaga não existente");
  }
}
do {
  opcao = prompt(
    "Bem vindo ao Sistema:" +
      "\nPor favor, selecione uma opção abaixo:" +
      "\n1 - Listar vagas" +
      "\n2 - Criar vaga" +
      "\n3 - Visualizar vaga" +
      "\n4 - Inscrever candidato em uma vaga" +
      "\n5 - Excluir vaga" +
      "\n6 - Sair do sistema"
  );

  switch (opcao) {
    case "1":
      //Visualizar todas as vagas
      // for each no array de vagas, que retornara vaga por vaga
      // dar um print nos atributos do objeto vaga
      listarVaga();
      break;

    case "2":
      //Cadastrar uma vaga
      cadastrarVaga();
      break;
    case "3":
      //Visualizar uma vaga
      visualizarVaga();
      break;
    case "4":
      //Inscrever candidato em uma vaga
      inscreverCandidato();
      break;
    case "5":
      //Excluir vaga, primeiro puxar a vaga e depois exclui-la
      excluirVaga();
      break;
    case "6":
      alert("Saindo...");
      break;
    default:
      alert("Opção invalida!!!");
      break;
  }
} while (opcao != 6);
