// Select elements
let btn = document.querySelector("button")
let input = document.querySelector("input")
let paragraph = document.querySelector("p")

// Add events
btn.addEventListener("click", displayResult)

//function
function displayResult(event){
    event.preventDefault() //Stops the page from reloading

    paragraph.innerHTML = input.value
}