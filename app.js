const githubUser = new GitHub;
const ui=new UI;
const user=document.getElementById('inputUser');
user.addEventListener('keyup',(e) => {
    const userName=e.target.value;
    if(userName!==''){
        githubUser.getGitHubuser(userName)
        .then(data=>{
            if(data.profile.message!=='Not Found'){
                ui.clearAlert();
                ui.getUserProfile(data.profile);
                //console.log(data.repos)
                ui.getUserRepo(data.repos);
            }else{
                ui.clearUserProfile();
                ui.showAlert('User not found','alert alert-danger');
            }
        })
    }else{
        ui.clearUserProfile();
    }
})