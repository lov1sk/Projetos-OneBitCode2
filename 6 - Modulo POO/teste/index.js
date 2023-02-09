//criar um label
//criar um input

import switchTheme from "./changeTheme.js";
import createElement from "./creatingElements.js";
import editElement from "./editingElements.js";

//Criar um form
//adicionar os itens criados acima
//adicionar um prevent default
//criar um botao
//agregar o form ao body
/*
const createLabel = (options) => {
  const label = document.createElement("label")
  Object.assign(label, options);
  return label
};

const createInput = (options) => {
  const input = document.createElement("input")
  Object.assign(input, options);
  return input
};

const Form = (label, input) => {
  const form = document.createElement("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
  });
  form.append(label, input);
  return form
};

const label1 = createLabel({ htmlFor: "input1", textContent: "Input nº1" });
const input1 = createInput({
  id: "input1",
  name: "input1",
  placeholde: "insira algo",
});*/

createElement("h1", "p");
editElement("h1", { textContent: "hello world" });
editElement("p", { textContent: "testando a edição dos componentes " });

document.getElementById("switch").addEventListener("click", switchTheme);
