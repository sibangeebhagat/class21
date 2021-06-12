var mr,fr;

function setup() {
  createCanvas(800,400);
  fr=createSprite(200, 0, 50, 50);
  fr.shapeColor = "green";
  fr.debug =true;

  mr=createSprite(200, 400, 50, 50);
  mr.shapeColor = "green";
  mr.debug =true;
  fr.velocityY = 2;
  mr.velocityY = -2;
}



function draw() {
  background(255,255,255);  

  bounceOff(mr,fr);
   
  drawSprites();
}

