// Add your code to this file
let body = document.querySelector("body")
body.style.backgroundColor = "darkblue"

let pokemon_images = document.getElementsByClassName("pokemon_images")
let stater_image = document.getElementById("starters_image_div img")
for(let inc = 0; inc < pokemon_images.length; inc++){
    pokemon_images[inc].style.borderStyle = "dotted";
    pokemon_images[inc].style.borderStyle.color = "orange";
}
stater_image.style.borderStyle = "dotted";

let pokename = document.getElementsByClassName("pokemon_names")

    pokename[inc].style.in = "dotted";

