// Criar uma super classe Component
//  -- Armazenar a referencia em um atributo privado
//  -- metodo build
//  -- metodo render

// criar sub classes para elementos input, label e form
// --name, innerText, for, id

export class Component {
  //Atributo para guardar a referencia
  #element = null

  //Construtor que automaticamente faz o build
  constructor(tag, parent, options) {
    this.tag = tag
    this.parent = parent
    this.options = options
    this.build()
  }

  getElement() {
    return this.#element
  }

  build() {
    //salva a referencia
    this.#element = document.createElement(this.tag)
    //adiciona a referencia as opçoes
    Object.assign(this.#element, this.options)
    return this
  }

  render() {
    if (this.parent instanceof Component) {
      this.parent.getElement().append(this.#element)
    } else {
      document.querySelector(this.parent).append(this.#element)
    }
  }
}