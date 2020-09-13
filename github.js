class GitHub {
    constructor(){
        this.repos_count=5;
        this.reposSort='created: asc'

    }

    async getGitHubuser(userName){
        const responseProfile=await fetch(`https://api.github.com/users/${userName}`);

        const profileData= await responseProfile.json();

        const responseRepos=await fetch(`https://api.github.com/users/${userName}/repos?per_page=${this.repos_count}&sort=${this.reposSort}`);
        
        const reposData = await responseRepos.json();

        return {
            profile: profileData,
            repos: reposData
        }
    }
}