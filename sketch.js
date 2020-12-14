
var fixedRect, movingRect;
var rect1, rect2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  rect1=createSprite(60,30,20,20)
  rect2=createSprite(200,30,50,50)
  rect1.velocityX=5
  rect2.velocityX=-5
}

function draw() {
  background(0,0,0);  

  bounceOff (rect1,rect2);
 bounceOff (fixedRect,movingRect)
  
  drawSprites();
}
function bounceOff (ob1,ob2){

  if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
    && ob2.x - ob1.x < ob2.width/2 + ob2.width/2) {
      ob1.velocityX = ob1.velocityX * (-1);
  ob2.velocityX = ob2.velocityX * (-1);
}
if (ob1.y - ob2.y < ob2.height/2 + ob1.height/2
  && ob2.y - ob1.y < ob2.height/2 + ob1.height/2){
    ob1.velocityY = ob1.velocityY * (-1);
    ob2.velocityY = ob2.velocityY * (-1);
  
}
}