class UI{
    constructor(){
        this.userProfile=document.getElementById('userProfile');
    }

    getUserProfile(user){
        this.userProfile.innerHTML=`
        
        <div class= "card card-body mb-3 mt-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-3" src="${user.avatar_url}"></img>
                    <a href=${user.html_url} target="_blank" class="btn btn-primary btn-block mb-4">Check Profile</a>
                </div>
                <div class="col-md-9 ">
                    <span class="badge badge-success mb-2">Public Repositories:${user.public_repos}
                    </span>
                    <span class="badge badge-success mb-2">Public Gists:${user.public_gists}
                    </span>
                    <span class="badge badge-success mb-2">Followers:${user.followers}
                    </span>
                    <span class="badge badge-success mb-2">Following:${user.following}
                    </span>
                    <br><br>
                    <ul class="list-group">
                    <li class="list-group-item">Company:${user.company}</li>
                    <li class="list-group-item">Blog:${user.blog}</li>
                    <li class="list-group-item">Location:${user.location}</li>
                    <li class="list-group-item">Profile Created at:${user.created_at}</li>
                    <ul>
                </div>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repositories</h3>
        <div id="latestRepos"></div>
        `

    }

    getUserRepo(repos){
        let result='';
        repos.forEach(function(repo) {
            result+= `
            <div class=card card-body mb-3>
                <div class=row>
                    <div class=col-md-6>
                    <a href="${repo.html_url}">${repo.name}</a>
                    </div>
                    <div class=col-md-6>
                        <span class="badge badge-success mb-1 mt-1">StarGazers count:${repo.stargazers_count}
                        </span>
                        <span class="badge badge-success mb-1 mt-1">Watchers Count:${repo.watchers_count}
                        </span>
                        <span class="badge badge-success mb-1 mt-1">Forks Count:${repo.forks_count}
                        </span>
                    <br><br>
                    </div>
                </div>
            </div>
            `
        });
        document.getElementById('latestRepos').innerHTML=result;
    }
    clearAlert(){
        const alert=document.querySelector('.alert')
        if(alert){
            alert.remove();
        }
        
    }
    showAlert(message,className){
        this.clearAlert();
        const div=document.createElement('div');
        div.className=className;
        //const text=;
        div.appendChild(document.createTextNode(message));
        const container=document.querySelector('.searchContainer');
        const search=document.querySelector('.search');
        container.insertBefore(div, search);

    }

    
    clearUserProfile(){
        this.userProfile.innerHTML='';
    }
}