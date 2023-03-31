//Definindo uma "interface completa" para atributos de um Gato
interface ICat {
  name: string;
  scientificName: string;
  age: number;
  familyName: string;
  birth: Date;
  haveCormobity: boolean;
}
//Criando uma classe generica para gatos, omitindo apenas as propriedades de name, scientificName
class Cat2 {
  props: Omit<ICat, "scientificName" | "familyName">;
  constructor(props: Omit<ICat, "scientificName" | "familyName">) {
    this.props = props;
  }
}
//Criando uma nova instancia de Gato e atribuindo apenas os atributos que não foram omitidos
const timbosa = new Cat2({
  name: "Timbosa",
  age: 1,
  birth: new Date("2022-03-25T03:24:00"),
  haveCormobity: false,
});

console.log(timbosa);
console.log(typeof timbosa);
