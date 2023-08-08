// Select elements
let btn = document.querySelector("button")
let box = document.getElementById("box")
let img = document.querySelector("img")

btn.addEventListener("click", displayImage)

function displayImage(event){
    event.preventDefault()

    let path = "images/" + box.value + ".png" 
    img.src = path
}