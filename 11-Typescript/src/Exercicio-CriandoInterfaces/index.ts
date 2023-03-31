import { GitHubUser } from "./entities/GitHubUser.js";
import { Repositories } from "./entities/Repositories.js";
import { UsersDatabase } from "./entities/UserDatabase.js";

/**
 *
 * Criar um array para salvar todos os usuarios
 * Criar uma interface para o tipo do usuario que será salvo no array acima
 *
 * Primeira função: ela recebe um nome a ser pesquisado e realiza uma requisição GET
 * para a API do github "https://api.github.com/users/<nomeusuario>", passando como parametro o nome que recebeu.
 *
 * Após aguardar a resposta, a mesma deve ser convertida para json, sera utilizado os atributos:id(number), login(string),
 * name(string), bio(string), public_repos(number) e repos_url(string) para tipar um objeto que tera a resposta atribuida
 *
 * Esse mesmo usuario deve ser salvo no array atraves do .push
 */
const getUsersAndSave = async (nameUser: string) => {
  const response = await (
    await fetch(`https://api.github.com/users/${nameUser}`)
  ).json();
  const { name, bio, public_repos, repos_url } = response;
  const newUser = new GitHubUser({ name, bio, public_repos, repos_url });
  UsersDatabase.push(newUser);
};
const showRepos = async (name: string) => {
  const user = UsersDatabase.find((user) => user.name == name);
  const response = await (await fetch(user.repos_url)).json();
  response.forEach((res) => {
    const { name, description, fork, stargazers_count } = res;
    const newRepo = new Repositories({
      name,
      description,
      fork,
      stargazers_count,
    });
    console.log(
      `Os repositorios de "${name}":
        ${newRepo}`
    );
  });
};
const showUsers = () => {
  console.log("Usuarios cadastrados:/n ");
};
const sumAllRepos = () => {
  let sum = 0;
  UsersDatabase.forEach((user) => {
    sum += user.public_repos;
  });
  console.log(`A soma dos repositorios são: ${sum}`);
};

getUsersAndSave("lov1sk");
getUsersAndSave("diego3g");
setTimeout(() => {
  showUsers();
}, 2000);
setTimeout(async () => {
  await showRepos("Lucas Ribeiro Santana");
}, 2000);
setTimeout(() => {
  sumAllRepos();
}, 2000);
