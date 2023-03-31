/* Tipos genericos: forma de permitir a passagem de tipos como argumentos de uma
 função geralmente é usando quando tem-se a herança e é necessario distinguir os tipos que herdam a superclasse

 sintaxe: function hello <"TIPO A SE TRABALHAR"> (param: "TIPO A SE TRABALHAR"): "TIPO DE RETORNO DA FUNÇÂO"

 é legal usar quando uma função pode trabalhar com varios interfaces que tem uma super interface de herança

 ex: Abaixo declaramos a tipagem da super interface de personagem, depois declaramos suas interfaces filhas com 1 atributo a mais
 ao pedir para aumentar os pontos de vida de qualquer personagem, seja magic ou thief, podemos usar os tipos genericos extendendo a 
 interface character
*/
interface character {
  name: string;
  healthPts: number;
}
interface mage extends character {
  magicPts: number;
  element: string;
}
interface thief extends character {
  stealthPts: number;
}
function setHealthToACharacter<characterType extends character>(
  character: characterType,
  health: number
): characterType {
  const newCharacter = character;
  newCharacter.healthPts = health;
  return newCharacter;
}

const thief: thief = { name: "Lucas Thief", healthPts: 0, stealthPts: 1000 };
const mage: mage = {
  name: "Carlos Mage",
  healthPts: 0,
  magicPts: 1000,
  element: "Fogo",
};
const thief1 = console.log(setHealthToACharacter(thief, 2000));
const mage1 = console.log(setHealthToACharacter(mage, 3000));
