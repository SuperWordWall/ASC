let ballArray = [];


function setup() {
   createCanvas(500, 500);


   for (let i = 0; i < 100; i++) {
       let temp = new Ball(random(0, 500), 500, random(255), random(255), random(255), random(2, 5));
       ballArray.push(temp);
   }
}


function draw() {
   background(0);
    let radius = random(25,50)

   for (let i = 0; i < ballArray.length; i++) {
       fill(ballArray[i].redValue, ballArray[i].greenValue, ballArray[i].blueValue);
       ellipse(ballArray[i].xPos, ballArray[i].yPos, radius, radius);


       ballArray[i].yPos += ballArray[i].speedValue;


       if (ballArray[i].yPos > 525) {
           ballArray[i].yPos = -25;
       }
   }
}


class Ball {
   constructor(x, y, r, g, b, speed) {
       this.xPos = x;
       this.yPos = y;
       this.redValue = r;
       this.greenValue = g;
       this.blueValue = b;
       this.speedValue = speed;
   }
}
