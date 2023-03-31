//Criando uma classe generica que instancia novos gatos usando apenas o nome
class Cat {
    props;
    constructor(props) {
        this.props = props;
    }
    showCatName() {
        return this.props.name;
    }
    sayHello(message) {
        return `A gatinha ${this.props.name} esta dizendo ${message}`;
    }
}
//Instamciando e exibindo em tela o gato "Mel"
const mel = new Cat({ name: "Melzinha" });
console.log(mel.showCatName());
console.log(mel.sayHello("Miaaaau"));
