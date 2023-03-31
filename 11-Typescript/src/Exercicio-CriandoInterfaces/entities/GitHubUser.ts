interface IGitHubUser {
  name: string;
  bio: string;
  public_repos: number;
  repos_url: string;
}
export class GitHubUser {
  name: string;
  bio: string;
  public_repos: number;
  repos_url: string;

  constructor(props: IGitHubUser) {
    this.name = props.name;
    this.bio = props.bio;
    this.public_repos = props.public_repos;
    this.repos_url = props.repos_url;
  }
}
