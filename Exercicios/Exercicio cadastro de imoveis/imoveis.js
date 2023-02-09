let opcao = null;
let quantidade = "";
let imovel = {};
let imoveis = [];

do {
  opcao = prompt(
    "Bem vindo ao Cadastro(a) de Imoveis:" +
      "\nQuantidade de imoveis no sistema: " +
      imoveis.length +
      "\n\nMenu:" +
      "\n 1 - Cadastrar um novo imovel" +
      "\n 2 - Mostrar imoveis" +
      "\n 3 - Sair do sistema"
  );

  switch (opcao) {
    case "1":
      //Salvar um imovel

      /*
       * Construindo um objeto imovel, para posteriormente ser listado em um array
       * Imovel recebe os @param: proprietario,qntQuartos,qntBanheiros, garagem
       */
      imovel = {
        proprietario: prompt("Digite o proprietario do imovel"),
        qntQuartos: prompt("Qual a quantidade de quartos?"),
        qntBanheiros: prompt("Qual a quantidade de banheiros?"),
        garagem: confirm("O imovel possui garagem?"),
      };

      /*
       * Transformando a informação booleana contida em garagem p/ String
       */
      if (imovel.garagem === true) {
        imovel.garagem = "Sim";
      } else {
        imovel.garagem = "Não";
      }

      /**
       * Adicionando ao final do array imoveis o objeto imovel
       */
      let salvarImovel = confirm(
        "Realmente deseja salvar o imovel?" +
          "\n\nNome do proprietario do Imovel: " +
          imovel.proprietario +
          "\nQuantidade de quartos do Imovel: " +
          imovel.qntQuartos +
          "\nQuantidade de banheiros do Imovel: " +
          imovel.qntBanheiros +
          "\nPossui garagem:  " +
          imovel.garagem
      );
      if (salvarImovel === true) {
        imoveis.push(imovel);
      } else {
        alert("Voltando ao menu...");
        break;
      }

      break;

    case "2":
      //Mostrar os imoveis
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "\nImovel nº " +
            (i + 1) +
            "\nNome do proprietario do Imovel: " +
            imoveis[i].proprietario +
            "\nQuantidade de quartos do Imovel: " +
            imoveis[i].qntQuartos +
            "\nQuantidade de banheiros do Imovel: " +
            imoveis[i].qntBanheiros +
            "\nPossui garagem:  " +
            imoveis[i].garagem
        );
        console.log(imoveis[i]);
      }
      break;

    case "3":
      //Sair do sistema
      alert("Saindo.....");
      break;
    default:
      alert("Opção invalida!!!");
      break;
  }
} while (opcao != "3");
