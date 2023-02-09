import { Component } from "./Component.js";

export class Input extends Component {
  //Construtor recebendo os parametros de qual o parente e os atributos da tag
  constructor(parent, options) {
    super('input', parent, options)
  }
}