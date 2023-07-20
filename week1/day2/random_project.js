// Task 1
let randNumd1 =  Math.random();
let randNum1 = randNumd1 * 10
let num1round = Math.floor(randNum1) 
console.log("Random number #1:", num1round)

let randNumd2 =  Math.random();
let randNum2 = randNumd2 * 10
let num2round = Math.floor(randNum2)
let total = num1round + num2round
console.log("Random number #2:",num2round)
console.log("Sum:", num1round,"+", num2round,"=",total)

// Task 2]
let gameArray = ['Friday', 'Monday', 'Today', 'Yesterday', 'Your Birthday', 'Never', 'Sundae']
let reactions = ['Yay!', 'Ahhhhhh!!!', 'Wu wi wa wa', 'Guli Guli', 'Ka chow'];
let arraylength = gameArray.length
let randomValue = Math.random()
let randomInteger = randomValue * arraylength
let randomIndex = Math.floor(randomInteger)

console.log("Your lucky day:",gameArray[randomIndex])
console.log(reactions[randomIndex])