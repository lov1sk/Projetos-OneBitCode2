import'./styles/index.css'

alert("Bem vindo!!!");

const button = document.querySelector("button")


button.addEventListener("click", (event) =>{
  alert("Você clicou no botão!")
  console.log (button)
})