// URL
let url = "https://randomuser.me/api"

// fetch
fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data.results[0].email)
})