let hotTake = "pineapple on pizza"
console.log(hotTake)

//alert(hotTake)

// Select an element with query selector
let header = document.querySelector("h1")
header.style.color = "red"

let para2 = document.querySelector("#two")
para2.style.color = "pink"

// Select elements by ID - document.getElementById()
let para1 = document.getElementById("one")
para1.style.color = "orange"
para1.style.fontSize = "50px"
para1.style.fontFamily = "Impact,Charcoal,sans-serif"

// Make android > apple the second largest with color blue
let para3 = document.getElementById("three")
para3.style.color = "blue"
para3.style.fontSize = "32px"

// querySelectorAll - select all element
let paraAll = document.querySelectorAll("p")
for(let inc = 0; inc < paraAll.length; inc++){
    paraAll[inc].style.backgroundColor = "magenta"
}

// document.getElementByClassName()
let hotTakeElem = document.getElementsByClassName("hotTake")
console.log(hotTakeElem)
for(let inc = 0; inc < hotTakeElem.length; inc++){
    hotTakeElem[inc].style.textAlign = "center"
}