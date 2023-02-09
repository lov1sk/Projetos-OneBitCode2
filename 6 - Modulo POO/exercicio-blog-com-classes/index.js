// a classe post deve ser criada
  // esta deve ter um objeto author e comment (array)
  // quando criar um post, deve ter um metodo para relacionar o autor com o post
  // deve ter um metodo de add comments OK

// a classe autor deve ter arrays de posts que ele ja fez

const Post = require("./Post.js")

const Author = require("./Author");

const john = new Author("John Doe")

const post = john.writePost("Título do Post", "Lorem ipsum dolor sic amet ...")

post.addComment("Isaac", "Muito bom!")
post.addComment("Lucas", "Achei interessante.")

console.log(john)
console.log(post)