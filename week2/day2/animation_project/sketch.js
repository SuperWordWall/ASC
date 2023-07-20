let yPos = 25;
let r = random(0,255)
let g = random(0,255)
let b = random(0,255) 

function setup() {
   createCanvas(500, 500);
   background(0);
}


function draw() {
   background(0, 15);


   fill(0, 255, 0);
   ellipse(250, yPos, 30, 30);


    yPos += 3;


   if (yPos > 525) {
        yPos = -25;
   }
}
function mouseClicked(){
   fill(r,g,b);  
   yPos = -25
}
