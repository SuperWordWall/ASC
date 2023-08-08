// Create an object
let pacman = {
//  Key     Values
    color: "yellow",
    speed: "fast",
    size: "medium size",
// Methods

    eat: function(){
        console.log('I can eat fruit and my speed is')
    }
}

console.log(pacman.color)
console.log(pacman["speed"])
console.log(pacman.size)

pacman.eat()