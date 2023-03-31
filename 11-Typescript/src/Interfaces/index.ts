interface personProps {
  name: string;
  age: number;
  parents: [];
}

class Person implements personProps {
  name: string;
  age: number;
  parents: [];

  constructor(props: personProps) {
    this.name = props.name;
    this.age = props.age;
    this.parents = props.parents;
  }
}
