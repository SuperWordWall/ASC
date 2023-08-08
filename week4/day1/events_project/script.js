let colortext = document.getElementById("color-display")

let aqua = document.getElementById("aqua")
aqua.addEventListener("click", changeAqua)

let teal = document.getElementById("teal")
teal.addEventListener("click", changeTeal)

let pink = document.getElementById("pink")
pink.addEventListener("click", changePink)

let purple = document.getElementById("purple")
purple.addEventListener("click", changePurple)

let colorless = document.getElementById("colorless")
colorless.addEventListener("click", changeColorless)

let hide = document.getElementById("hide")
hide.addEventListener("click", hideDiv)

function changeAqua(){
    colortext.style.display = "flex"
    colortext.style.backgroundColor = "aqua"
    colortext.innerHTML = "aqua"
}

function changeTeal(){
    colortext.style.display = "flex"
    colortext.style.backgroundColor = "teal"
    colortext.innerHTML = "teal"
}

function changePink(){
    colortext.style.display = "flex"
    colortext.style.backgroundColor = "pink"
    colortext.innerHTML = "pink"
}

function changePurple(){
    colortext.style.display = "flex"
    colortext.style.backgroundColor = "purple"
    colortext.innerHTML = "purple"
}

function changeColorless(){
    colortext.style.display = "flex"
    colortext.style.backgroundColor = "white"
    colortext.innerHTML = "colorless"
}

function hideDiv(){
    colortext.style.display = "none"
}