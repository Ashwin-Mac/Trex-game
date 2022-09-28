
var trex ,trex_running;
var ground
function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png")
  

}

function setup(){
  createCanvas(600,200)
 ground = createSprite(300, 200, 600,30)
 trex =  createSprite(50,160,20,50)
 trex.addAnimation("running", trex_running)
 trex.scale = 0.6
  //create a trex sprite
 
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY+0.7
  trex.collide(ground)
  trex.velocityX = +1
  trex.velocityX = trex.velocity+0.1
  
  drawSprites()

}
