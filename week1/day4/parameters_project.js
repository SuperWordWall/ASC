function evenOrOdd(Number){
    Number1 = Number % 2
    console.log("Your number is:",Number)
    if(Number1 == 0){
        console.log(Number,"is even")
    }
    else {
        console.log(Number,"is odd")
    }
}

function divisor(num,num2){
    num3 = num % num2
    if(num3 == 0){
        console.log(num,"is divisible by",num2,)
    }
    else {
    console.log(num,"is NOT divisible by",num2,)   
    }
}
function distanceCalculator(name1,x1,y1,name2,x2,y2){
    let val = Math.sqrt((x2 - x1)**2 + (y2 + y1)**2)
    console.log(name1,"and",name2,"are",val,"meter(s) apart")
}
function arrayHandler(array){
    console.log(typeof array, array)
}

divisor(4, 5)
evenOrOdd(7);
evenOrOdd(6872);
evenOrOdd(-5);
evenOrOdd(0);
distanceCalculator("zamn",5,70,"day",34,60);
arrayHandler([5,6,"e","y",true])