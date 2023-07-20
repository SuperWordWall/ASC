let state = 1
let state1 = 'white'

function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
    
    fill(0,0,0);
    rect(0, 0, 100, 100);
    fill(255, 255, 255);
    textSize(20);
    text("Clear", 20, 40)
    text("Canvas", 20, 60)
    textAlign(CENTER); 

}
 
 function draw() {
    let r = random(0, 255);
    let g = random(0, 255);
    let b = random(0, 255);
    let opacity = random (120, 180);
    noStroke();
    fill(r, g, b, opacity);
 
    let size = random(5, 35);
    let offSetX = random(-25, 25);
    let offSetY = random(-25, 25);

    if(state == 1){
        ellipse(mouseX + offSetX, mouseY + offSetY, size, size);
    }
    if(state == 2){
        rect(mouseX + offSetX, mouseY + offSetY, size, size);
    }
    if(state == 3){
        triangle(mouseX + offSetX, mouseY + offSetY, mouseX - 30 + offSetX, mouseY - 60 + offSetY, mouseX - 60 + offSetX, mouseY + offSetY)
    }
    if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100){
        state1 = 'black';
    }
 }
 
 
 function mouseClicked() {
    if(state == 1){
        state = 2
    }
    else if(state == 2){
        state = 3
    }
    else{
        state = 1
    }
    if (state1 == 'black'){
        background(255,255,255)
    }
 }
 