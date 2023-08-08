let r = 0;
let g = 255;
let b = 0;

let score = 0
let score1;

let health = 10
let health1;

let Xpos = 250;
let Ypos = 30;
let xSpeed;
let ySpeed;
let xDirection = 1
let yDirection = 1 

function setup() {
  createCanvas(500, 500);
  xSpeed = 7
  ySpeed = 7
}

function draw() {
  background(0);
  
  strokeWeight(1)
  score1 = "Score:" + score
  textSize(22)
  text(score1, 0, 20)
  
  health1 = "Health:" + health
  text(health1, 400, 20)
  
  fill(r, g, b);
  ellipse(Xpos, Ypos, 50, 50)
  
  Xpos += xSpeed * xDirection
  Ypos += ySpeed * yDirection
  
  if (Xpos < 25 || Xpos > 475){
    xDirection *= -1
  }
  if (Ypos < 25){
    yDirection *= -1
  }

  if (Ypos > 425 && Ypos < 475 && Xpos > mouseX && Xpos < mouseX + 100) {
    yDirection *= -1
    xDirection *= 1
    score++
  }
  
  if (Ypos > 475){
    Ypos = 50
    health = health - 1
  } 
  

  //line
  stroke(r, g, b);
  strokeWeight(5)
  line(mouseX, 450, mouseX + 100, 450);
}
