const form = document.getElementById("form");
const ol = document.getElementById("list");

// adicionar um monitor de submit
// adicionar um prevent default no form
// pegar o item que foi escrito e clicado em add e adicionar na lista
// limpar o input
// Remover algum item

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formInput = document.getElementById("addItem");
  const removeBtn = elementFactory("button");
  const li = elementFactory("li");
  removeBtn.id = "remove";
  removeBtn.classList.add("remove");
  removeBtn.innerText = "Remover";
  li.innerText = formInput.value;
  li.appendChild(removeBtn);
  if (li.textContent != "") {
    ol.appendChild(li);
    console.log(li);
    alert(`Elemento "${formInput.value}" inserido!`);
    formInput.value = "";
  }

  removeBtn.addEventListener("click", (event) => {
    if (event.target.classList.contains("remove")) {
      if (confirm("Deseja mesmo deletar o item em questão?")) {
        event.target.parentElement.remove();
        return;
      }
      return;
    }
  });
});

function elementFactory(element) {
  return document.createElement(element);
}

