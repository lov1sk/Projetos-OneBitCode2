/*
 * Função construtora  
 */
function Book(title, pages, tags, author) {
  // Atributos do objeto
  this.title = title
  this.pages = pages
  this.tags = tags
  this.author = author
  this.published = false
  this.inStock = 0

  // Metodos do objeto
  this.addOnStock = (quantity) => {
    this.inStock += quantity
  }
  this.saveInDatabase = () => {
    // Save book to database
  }
}

const author = { name: "Christopher Paolini" }
const tags = ["fantasy", "adventure", "medieval"]

// Criação de um novo objeto
const eragon = new Book("Eragon", 468, tags, author)
// Utilizando o metodo do objeto para adicionar o valor 20 no atributo
eragon.addOnStock(20)
// Criação de um novo objeto
const eldest = new Book("Eldest", 644, tags, author)

console.log(eragon)
console.log(eldest)