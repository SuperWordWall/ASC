/*let xPos = 25;
let direction = 1;

function setup() {
   createCanvas(500, 500);
   background(0);
}


function draw() {
   background(0);


   fill(0, 255, 0);
   ellipse(xPos, 250, 50, 50);


   xPos += 3 * direction;


   if (xPos > 475 || xPos < 25) {
    direction *= -1;
   }
} */

let xPos = 250;
let yPos = 250;
let xSpeed;
let ySpeed;
let xDirection = 1;
let yDirection = 1;

function setup() {
   createCanvas(500, 500);
   background(0);

   xSpeed = random(-5,5)
   ySpeed = random(-5,5)
}


function draw() {
    background(0);
 
 
    fill(0, 255, 0);
    rect(xPos, yPos, 50, 50);
     fill(255);
     textSize(20);
     textAlign(CENTER);
    text("DvD", xPos + 25, yPos + 20)
    text("Video", xPos + 25, yPos + 40)
 
 
     xPos += ySpeed * xDirection;
     yPos += xSpeed * yDirection;
 
    if (xPos > 475 || xPos < 25) {
        xDirection *= -1;
        
    }
    if (yPos > 475 || yPos < 25) {
         yDirection *= -1;
         
     }
 }


