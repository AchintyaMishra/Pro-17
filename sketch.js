
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;


function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
   bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

 
}



function setup() {
  createCanvas(400,400)
  
  monkey=createSprite(30,360,10,10)
  monkey.addAnimation("running",monkey_running)  
  monkey.scale=0.1
  
  ground=createSprite(100,395,700,15)
  ground.velocityX=-5
  
 }


function draw() {
  background("red")
  
  if(ground.x<50)
    ground.x=200
  
  if(keyDown("space"))
    {
      monkey.velocityY=-5 
      monkey.velocityY=monkey.velocityY+1
     }
   
    
  sobstacle();
  sbanana();
  
drawSprites();
  
}


function sobstacle(){
  if(frameCount% 50 === 0)
    {
  obstacle=createSprite(400,370,20,20)
  obstacle.addImage(obstacleImage)
  obstacle.scale=0.1
 obstacle.velocityX=-5
    }
  
}

function sbanana(){
  if(frameCount% 200 === 0)
    {
      banana=createSprite(200,250,10,10)
      banana.addImage(bananaImage) 
      banana.scale=0.1
      banana.velocityX=-5
    }
  
}


