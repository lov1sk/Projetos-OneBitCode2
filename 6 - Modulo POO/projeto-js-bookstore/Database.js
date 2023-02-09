module.exports = class Database {
  // Atributo que salva todos as entidades em lista
  #storage = {
    authors: [],
    books: [],
    posters: [],
    orders: [],
    users: [],
  };

  /**
   * Netodo de encontrar objetos dentro do database, criado sob o conceito de chave (tipo de produto)
   * e valor (nome do produto)
   */
  find(key, objectName) {
    switch (key) {
      case "all":
        return this.#storage;
      case "book":
        return this.#storage.books.find((book) => book.name === objectName);
      case "authors":
        return this.#storage.authors.find(
          (author) => author.name === objectName
        );
      case "posters":
        return this.#storage.posters.find(
          (poster) => poster.name === objectName
        );
      case "orders":
        return this.#storage.orders.find((order) => order.name === objectName);
      case "users":
        return this.#storage.users.find((user) => user.name === objectName);

      default:
        throw new Error(
          "O parametro key deve bater com alguma entidade existente"
        );
    }
  }

  /**
   * Netodo de salvar objetos dentro do database, utilizando os metodos de array push,
   * criado sob o conceito de chave (tipo de produto) e valor (nome do produto)
   */
  saveAny(key, objectName) {
    switch (key) {
      case "author":
        this.#storage.authors.push(objectName);
        break;
      case "book":
        const bookExists = this.find("book", objectName);
        if (!bookExists) {
          this.#storage.books.push(objectName);
        }
        break;
      case "poster":
        const posterExists = this.findPosterByName(objectName);
        if (!posterExists) {
          this.#storage.posters.push(objectName);
        }
        break;
      case "user":
        const userExists = this.#storage.users.find(
          (u) => u.email === objectName
        );
        if (!userExists) {
          this.#storage.users.push(objectName);
        }
        break;
      case "order":
        this.#storage.orders.push(objectName);
        break;
      default:
        throw new Error(
          "O parametro key deve bater com alguma entidade existente"
        );
    }
  }

  /**
   * Netodo para retornar listas de objetos salvos no database, criado sob o conceito de chave (tipo de produto) 
   * e valor (nome do produto)
   */
  getAny(key) {
    switch (key) {
      case "author":
        return this.#storage.authors;
      case "book":
        return this.#storage.books;
      case "poster":
        return this.#storage.posters;
      case "order":
        return this.#storage.orders;
      case "user":
        return this.#storage.users;
      default:
        break;
    }
  }

  addBooksToStock(bookName, quantity) {
    const book = this.find("book", bookName);
    book?.addToStock(quantity);
  }

  removeBooksFromStock(bookName, quantity) {
    const book = this.find("book", bookName);
    book?.removeFromStock(quantity);
  }

  addPostersToStock(posterName, quantity) {
    const poster = this.find("poster", posterName);
    poster?.addToStock(quantity);
  }

  removePostersFromStock(posterName, quantity) {
    const poster = this.find("poster", posterName);
    poster?.removeFromStock(quantity);
  }

  showStorage() {
    console.table(this.#storage.authors);
    console.table(this.#storage.books);
    console.table(this.#storage.posters);
    console.table(this.#storage.users);
    console.table(this.#storage.orders.map((order) => order.data));
  }
};
