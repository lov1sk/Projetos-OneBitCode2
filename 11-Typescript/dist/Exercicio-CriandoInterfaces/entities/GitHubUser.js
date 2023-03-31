export class GitHubUser {
    name;
    bio;
    public_repos;
    repos_url;
    constructor(props) {
        this.name = props.name;
        this.bio = props.bio;
        this.public_repos = props.public_repos;
        this.repos_url = props.repos_url;
    }
}
