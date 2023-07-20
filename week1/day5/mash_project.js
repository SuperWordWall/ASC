
function mash(){
    console.log("You will live in a " + getHome() + " and travel to " + getTravelCount() + " countries," + " and have a " + getPet() + " and you go to " + futurcollege() + " you also are currently " + occuption())
}
function randNumGenerator(int){
    return Math.floor(Math.random() * int);  
}
function getHome(){
    let userinput = process.argv[2]
    let array = ["Mansion","Castle","Shack","House",userinput];
    randNum = randNumGenerator(5)
    return (array[randNum])
    
}
function getPet(){
    userinput = process.argv[3]
    let randomPets = ["Dragon","Dog","Cat","Shark","Alien","Rock"];
    let rand = randNumGenerator(randomPets.length);
    let pet = randomPets[rand];
    for(let i = 0; i <= 6; i++){
        randomPets.push(userinput)
    }
    return pet
    
}
function getTravelCount(){
    return randNumGenerator(101)
}
function futurcollege(){
    let array = ["Harvord","NJ University","Yale"];
    randNum = randNumGenerator(3)
    return (array[randNum])
    
}
function occuption(){
    let array = ["working at Mcdonlds","working at Wendys","working at Shack Shack","Unemployed","Own a business","A Millionare"];
    randNum = randNumGenerator(7)
    return (array[randNum])
}
let mashtv = mash()
console.log(mashtv)

