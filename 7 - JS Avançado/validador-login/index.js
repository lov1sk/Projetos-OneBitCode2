import Login from "./Login.js"

// preciso anular primeiro o evento padrao do form, que é o submit

const form = document.getElementById("loginForm")
form.addEventListener("submit", (event)=> {
  event.preventDefault()
})
// quando clicar no botao de cadastrar, o evento chamará uma função que pegara os dados .value dos inputs
const btn = document.getElementById("btnSubmit")
btn.addEventListener("click", (event)=>{
  const usernameInput = document.getElementById("username").value
  const passwordInput = document.getElementById("password").value
  const login = new Login(usernameInput, passwordInput)
  if (!login.passwordStringHaveAnyUndefined() && !login.usernameStringHaveAnyUndefined()){
    console.log(`O Usuario conseguiu preencher os requesitos`);
  }else{
    console.log(`O Usuario não preencheu os requesitos`);
  }
  
})
