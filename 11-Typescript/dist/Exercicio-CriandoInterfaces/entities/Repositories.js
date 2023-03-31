export class Repositories {
    name;
    description;
    fork;
    stargazers_count;
    constructor(props) {
        this.name = props.name;
        this.description = props.description;
        this.fork = props.fork;
        this.stargazers_count = props.stargazers_count;
    }
}
