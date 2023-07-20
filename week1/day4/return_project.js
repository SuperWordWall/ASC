

let s1 = combineStrings("ABC", "DEF");
let s2 = combineStrings("poke", "mon");
let s3 = combineStrings("friend", "ship");
let s4 = combineStrings("1", "2");

function combineStrings(string1,string2){
    return string1 + string2
}

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);

let b1 = checkAnswer(3, 5, "+", 8);
let b2 = checkAnswer(9, 8, "+", 15);
let b3 = checkAnswer(5, 4, "-", 1);
let b4 = checkAnswer(0, 1, "-", -2);

function checkAnswer(num1,num2,op,num3){
    
    if(op = "+" && num1 + num2 == num3){
        return true 
    }
    if(op = "-" && num1 - num2 == num3){
        return true 
    }
    else{
        return false
    }
}

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);

let i1 = oddNumberCatcher([8, 22, 10, 15, 2, 50, 28]);
let i2 = oddNumberCatcher([1, 2, 3, 4, 5]);
let i3 = oddNumberCatcher([2, 2, 2, 2, 2, 2, 2, 2]);
let i4 = oddNumberCatcher([]);

function oddNumberCatcher(arr){

    for(let i = 0; i <= arr.length ; i++){
        if (arr[i] % 2 == 1){
            return i
        }
    }
    for(let i = 0; i <= arr.length ; i++){
        if (arr[i] % 2 == 0){
            return -1
        }
        else{
            return -1
        }
    }
}

console.log(i1);
console.log(i2);
console.log(i3);
console.log(i4);