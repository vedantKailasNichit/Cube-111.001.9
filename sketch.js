var cube, ground;
//// Platform
var block1;
//// canvas
var canvas;
//// gravity variables
var yVelocity = 0, fallSpeed = 1, jumpHeight = -12;
//// movement variable
var xVelocity = 0, moveSpeed = 10, drag = 0.6;

function preload(){

}

function setup() {
  canvas = createCanvas(1300,610);
  //// CUBE OR PLAYER
  cube = createSprite(800, canvas.height-400, 20, 20);
  cube.shapeColor = 'red'
  ground  = createSprite(width/2,canvas.height-10,width,30);
  block1  = createSprite(200,560,200,30);
  block1.shapeColor = 'green';

}

function draw() {
  background(76, 135, 230);  

  //// Creating edges so that player dose not go out of canvas
  edges = createEdgeSprites();
  cube.bounceOff(edges[0]);
  cube.bounceOff(edges[1]);
  cube.bounceOff(edges[2]);
  cube.bounceOff(edges[3]);

  collide(cube,block1);
  

  //// ALL FUNCTIONS ARE CALLED HERE
  gravity();
  move();
  level1();
  drawSprites();
}

function gravity(){

  //// Gravity Code
  cube.y += yVelocity;
  if(cube.isTouching(ground)){
    if(keyDown('up')){
      yVelocity = jumpHeight;
    }else{
      yVelocity = 0;
    }
  }else{
    yVelocity += fallSpeed;
  }
}

function move(){

  //// Movement Code
  cube.x += xVelocity;
  if(!cube.isTouching(ground) || cube.isTouching(ground)){
      xVelocity = 0;
      if(keyDown('right')){
        xVelocity += moveSpeed;
      }else if(keyDown('left')){
        xVelocity += moveSpeed * -1;
      }
  }
  xVelocity *= drag;
}

////levelDesign
function level1(){
  //block1 = createSprite(100,510,100,100);
}

function collide(block1,block2){
  if(block1.isTouching(block2)){
    block1.bounceOff(block2)
  }
  
}


