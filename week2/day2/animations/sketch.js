let xPos = 25;

function setup(){
    createCanvas(500,500);
    background(0);
}

function draw(){
    background(0,20)
    fill(0,255,0);
    ellipse(xPos,250,50,50);
    xPos += 3;

    if(xPos > 525){
        xPos = -25;
    }
}