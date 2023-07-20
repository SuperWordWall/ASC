let num = 100;

while(num > 0){
    console.log(num);
    num--;
}

let userInput = process.argv[2];

while(userInput > 0){
    console.log(userInput);
    userInput--;
}
// Task2
let num2 = 1;
let num1 = 0;
let tries = 1;

while (num1 !== num2) {
    num2 = num1;
    num1 = Math.floor(Math.random() * 11);
    console.log("Try #",tries,"-","1st random number:",num1, "2st random number:",num2)
    tries++
}

console.log("Same random numbers! End Loop")