/**
 * 
 * Função que recebe o email digitado e só toma ação se a expressao email.match der 
 * false (pois sera convertida pelo operador not para true)
 * 
 * pois ela cria uma instancia de erro "err" e lança
 */
function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
      const err = new Error('Email inválido.')
      err.input = 'email'
      throw err
  }
}

/**
 * 
 * Função que só toma ação se a expressao password.match der true 
 * m alguma das comparações pois ela cria uma instancia de erro "err" e lança
 */
function validatePassword(password) {
  if (
      password.length < 8 || 
      !password.match(/[a-z]/) || 
      !password.match(/[A-Z]/) || 
      !password.match(/[0-9]/) ||
      !password.match(/[^a-zA-Z0-9\s]/)
  ) {
      const err = new Error('Senha inválida.')
      err.input = 'password'
      throw err
  }
}

/**
 * Função para quando for clicado no botao e houver alteração no objeto, o mesmo resetar os estilos e removelos
 */
function resetFormStyles() {
  Object.entries(userInputs).forEach(([key, value]) => {
      value.classList.remove('success', 'error')
      document.querySelector(`#${key}-error`).textContent = ''
  })
}

/**
 * objeto para diferentes entradas do DOM
 */
const userInputs = {}

/**
 * Atribuição dos elementos DOM ao objeto userInputs
 */
userInputs.name = document.querySelector('#name')
userInputs.email = document.querySelector('#email')
userInputs.password = document.querySelector('#password')

/**
 * Resgate do for e adicionando um eventlistener que adicionara os .value ao atributos apenas se não der erro 
 * antes no validate, pois ai o erro sera capturado
 */
document.querySelector('form').addEventListener('submit', (ev) => {
  ev.preventDefault()
  resetFormStyles()
  try {
      userInputs.name.classList.add('success')
      validateEmail(userInputs.email.value)
      userInputs.email.classList.add('success')
      validatePassword(userInputs.password.value)
      userInputs.password.classList.add('success')
  } catch (err) {
      userInputs[err.input].classList.add('error')
      document.querySelector(`#${err.input}-error`).textContent = err.message
  }
})