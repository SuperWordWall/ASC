let charmanderImage;
let sqirtleImage;
let bulbsaurImage;

function preload(){
    charmanderImage = loadImage("Downloads/charmander.png")
    sqirtleImage = loadImage("Downloads/sqirtle.png")
    bulbsaurImage = loadImage("Downloads/bulbsaur.png")
}

function setup(){
    createCanvas(500,500)
    background(0);
    noStroke();
}

function draw(){
    fill(255,0,0);
    rect(100,200,100,100);
    fill(0,255,0);
    rect(200,200,100,100);
    fill(0,0,255);
    rect(300,200,100,100);

    image(charmanderImage,100,200,100,100)
    image(bulbsaurImage,200,200,100,100)
    image(sqirtleImage,300,200,100,100)
}