// URL
let url = "https://api.thecatapi.com/v1/images/search?limit=50"

// Container
let container = document.getElementById("image_container")


// fetch
fetch(url)
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
    console.log(data[0].url);
    console.log(data.length)
    for(i = 0; i < data.length; i++ ){
        // Create an image
        let img = document.createElement("img")
        img.src = data[i].url
        container.appendChild(img)
    }
    
})