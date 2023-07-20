
function setup(){
    createCanvas(500,500);
    background(0,0,0);
}

function draw(){
    background(0)    
    fill(255,0,0)
    rect(mouseX , 200,50,50)
    fill(0,255,0)
    rect(mouseX , 300,50,50)
    fill(0,0,255)
    rect(mouseX , 400,50,50)
}

function mouseClicked(){
    let r = random(0,255)
    let g = random(0,255)
    let b = random(0,255)

    let r1 = random(0,255)
    let g1 = random(0,255)
    let b1 = random(0,255)

    let r2 = random(0,255)
    let g2 = random(0,255)
    let b2 = random(0,255)

    fill(r,g,b)
    rect(mouseX , 200,50,50)
    fill(r1,g1,b1)
    rect(mouseX , 300,50,50)
    fill(r2,g2,b2)
    rect(mouseX , 400,50,50)
}