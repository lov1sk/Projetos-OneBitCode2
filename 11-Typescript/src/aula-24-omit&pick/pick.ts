//Definindo uma "interface completa" para atributos de um Gato
interface ICatProps {
  name: string;
  scientificName: string;
  age: number;
  familyName: string;
  birth: Date;
  haveCormobity: boolean;
  //...
}
//Criando uma classe generica que instancia novos gatos usando apenas o nome
class Cat {
  props: Pick<ICatProps, "name">;
  constructor(props) {
    this.props = props;
  }
  showCatName() {
    return this.props.name;
  }
  sayHello(message: string) {
    return `A gatinha ${this.props.name} esta dizendo ${message}`;
  }
}
//Instamciando e exibindo em tela o gato "Mel"
const mel = new Cat({ name: "Melzinha" });
console.log(mel.showCatName());
console.log(mel.sayHello("Miaaaau"));
