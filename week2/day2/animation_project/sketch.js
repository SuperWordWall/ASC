let yPos = 25;

function setup() {
   createCanvas(500, 500);
   background(0);
}


function draw() {
   background(0, 30);

   //fill(0, 255, 0);
   ellipse(250, yPos, 30, 30);

    yPos += 3;

   if (yPos > 525) {  
      fill(random(255), random(255), random(255));
      yPos = -25; 
   }
}
function mouseClicked(){
   fill(random(255), random(255), random(255));
   yPos = -25
}
