// An array
let foodArray = ["Ramen", "Tacos", "Pizza", "Burgers", "Salad"];
console.log(foodArray)
console.log(foodArray[2])
console.log(foodArray[0])

//Valuse in array
console.log(foodArray)
foodArray[3] = "Tofu"
console.log(foodArray)

// Numbers of values inside arrays
let arrayLength = foodArray.length
console.log("The number of value is:", arrayLength)

//Methods
// .push()

// Add new values
foodArray.push("Cuy")
foodArray.push("Steak")
foodArray.push("Pizza")

// Output values
console.log(foodArray)

// Delete
foodArray.pop()
console.log(foodArray)

// Sort
foodArray.sort()
console.log(foodArray)

//Reverse 
foodArray.reverse(foodArray)
console.log(foodArray)

