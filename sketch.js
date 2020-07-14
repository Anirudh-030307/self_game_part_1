var canvas ; 
var play1 , tutorial ;


function setup(){
  canvas = createCanvas(windowWidth-30,windowHeight-30);

  play1 = createSprite(600,600,60,10);
  tutorial = createSprite(500,600,60,10);

}


function draw(){
  background(255);

  drawSprites();

}
