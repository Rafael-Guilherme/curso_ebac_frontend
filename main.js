document.addEventListener('DOMContentLoaded', function() {
    const name = document.getElementById('name')
    const username = document.getElementById('username')
    const avatar = document.getElementById('avatar')
    const repos = document.getElementById('repos')
    const followers = document.getElementById('followers')
    const following = document.getElementById('following')
    const link = document.getElementById('link')

    fetch('https://api.github.com/users/rafael-guilherme')
        .then(function(response){
            return response.json()
        })
        .then(function(json) {
            console.log(json)
            name.innerText = json.name;
            username.innerText = json.login;
            avatar.src = json.avatar_url;
            following.innerText = json.following;
            followers.innerText = json.followers;
            repos.innerText = json.public_repos;
            link.href = json.html_url;
        })
        .catch(function(erro) {
            throw new Error(erro)
        })
        .finally(function() {
            console.log('Código finalizado!')
        })
})