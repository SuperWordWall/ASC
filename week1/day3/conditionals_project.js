// Task 1
// Random number
let ranDecimal = Math.random();
let ranNum = ranDecimal * 100 || ranDecimal * 10
let ranInt = Math.floor(ranNum)

// UserInput
let userInput = process.argv[2]
console.log("Your guess:", userInput)
console.log("Random number generated:", ranInt)

if(userInput == ranInt){
    console.log("YOU GUESSED RIGHT!!!!")
}
else if(userInput > ranInt){
    console.log("Your guess is TOO HIGH")
}
else {
    console.log("Your guess is TOO LOW")
}

// Task 2
let userInput1 = process.argv[3]
let score = 0
console.log("Initial score:",score)
if(userInput1 == "A"){
    console.log("Wrong answer :(")
    console.log("Final score:",score-1)
}
else if(userInput1 == "C"){
    console.log("RIGHT ANSWER! WOHOO!!!")
    console.log("Final score",score+5)
}
else if(userInput1 == "B"){
    console.log("Wrong answer :(")
    console.log("Final score:",score-1)
}
else if(userInput1 == "D"){
    console.log("Bad bad bad...")
    console.log("Final score:",score-1)
}
else if(userInput1 == "I.KNOW.THE.SECRET"){
    console.log("Welcome to NIRVANA")
    console.log("Final score:",score-1)
}
else {
    console.log("No change")
    console.log("Invaild response...")
}
