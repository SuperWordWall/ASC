// Arrays
let letters = ['A', 'B', 'C', 'D', 'E'];
let days = ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
let myArray = ['Do', "Re", "Mi", "Fa", "So"];
let scores = [85, 93, 65, 92, 81, 93];
// Console
// Letters
console.log(letters[1]);
console.log(letters[3]);
console.log(letters[5]);
// Days
console.log(days[0]);
console.log(days[6]);
console.log(days.length);
console.log(days[days.length]);
console.log(days[days.length - 1]);
// myArray
console.log(myArray);

myArray.length = 2;
console.log(myArray);

myArray.length = 0;
console.log(myArray);

// Average
let score1 =scores[1] 
let score2 =scores[2]
let score3 =scores[3] 
let score4 =scores[4]
let score5 =scores[5]
let score6 =scores[6]     

let total = score1 + score2 + score3 + score4 + score5 + score6
let average = scores.length / total
console.log(total)
console.log("Average:",average);
