interface IRepositories {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
}

export class Repositories implements IRepositories {
  name: string;
  description: string;
  fork: boolean;
  stargazers_count: number;
  constructor(props: IRepositories) {
    this.name = props.name;
    this.description = props.description;
    this.fork = props.fork;
    this.stargazers_count = props.stargazers_count;
  }
}
