let myXPos = 100;
let myYPos = 100;
let enemyXPos = 300;
let enemyYPos = 300;
let score = 0;
let playerImage;
let enemyImage;

let myLeft, myRight, myTop, myBottom;
let enemyLeft, enemyRight, enemyTop, enemyBottom;

function preload(){ 
    playerImage = loadImage("ascimages/ASCplayer.png")
    enemyImage = loadImage("ascimages/ASCenemy.png")
}

function setup() {
   createCanvas(500, 500);
   noStroke();


   imageMode(CENTER);
}


function draw() {
   background(0);


   fill(0, 0, 255);
    image(enemyImage,enemyXPos,enemyYPos,50,50)

   fill(255, 0, 0);
   image(playerImage, myXPos, myYPos, 50, 50);

   if (keyIsDown(LEFT_ARROW)) {
       myXPos -= 3;
   }


   if (keyIsDown(RIGHT_ARROW)) {
       myXPos += 3;
   }


   if (keyIsDown(UP_ARROW)) {
       myYPos -= 3;
   }


   if (keyIsDown(DOWN_ARROW)) {
       myYPos += 3;
   }
   
   myLeft = myXPos - 25;
   myRight = myXPos + 25;
   myTop = myYPos - 25;
   myBottom = myYPos + 25;

   enemyLeft = enemyXPos - 25;
   enemyRight = enemyXPos + 25;
   enemyTop = enemyYPos - 25;
   enemyBottom = enemyYPos + 25;

   if (myLeft > enemyRight || myRight < enemyLeft || myTop > enemyBottom || myBottom < enemyTop) {
        fill(255,255,255);
        textSize(22);
        text("Score:" + score, 20, 40); 

   }


   else {
    score++
       /*fill(random(255), random(255), random(255));
       textSize(22);
       text("I'm colliding with my enemy. Ouch!", 140, 480); */
       enemyXPos = random(0,500);
       enemyYPos = random(0,500);
       image(enemyImage,enemyXPos, enemyYPos, 50, 50);

   }

}