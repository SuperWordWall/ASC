let clickMe = document.getElementById("clickMe")
let box = document.getElementById("box")
let orange = document.getElementById("orange")
let hide = document.getElementById("hide")

clickMe.addEventListener("click", changeBlue);
orange.addEventListener("click", changeOrange)
hide.addEventListener("click", hideDiv)
box.addEventListener("mouseenter", enterMouse)

function changeBlue(){
    box.style.backgroundColor = "blue"
    box.innerHTML = "Playstation > Xbox"
}

function changeOrange(){
    box.style.display = "block"
    box.style.backgroundColor = "orange"
    box.innerHTML = "Xbox > Playstation"
}

function hideDiv(){
    box.style.display = "none"
}

function enterMouse(){
    box.innerHTML = "Your mouse is hurting me"
}