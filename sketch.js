var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bg,bgImg ;
var player,playerImg;
var zombie,zombieImg,zombieGroup;

var laser,laserImg,laserGroup
var shoot = 0;
var score = 0;


function preload()
{
    bgImg = loadImage("bg.jpg");
    playerImg = loadImage("player.png");
    zombieImg = loadImage("zombie.png");
    laserImg =loadImage("bullet.png")
}

function setup()
{
    createCanvas(1000,600);
    bg=createSprite(900,300);
    bg.addImage(bgImg);
    bg.scale = 4.25;
    bg.velocityX = -3;

   player = createSprite(50,450);
   player.addImage(playerImg);
   player.scale = 1.0

   zombieGroup = new Group;
   laserGroup =new Group;

   score  = 0  ;
stroke("red");
fill("red");
textSize(25);
  
}

function draw()
{
    background(0);


    if(gameState ===PLAY){
    if (bg.x <100){
        bg.x = bg.width/2;
      }
      bg.velocityX =-3
    
     // createEdgeSprites();

      //player.bounceOff(edges);

      if(keyDown("UP_ARROW")){
        player.y = player.y - 4;
      
      }
      if(keyDown("DOWN_ARROW")){
        player.y = player.y + 4;
      
      }
      
        
      if(keyDown("LEFT_ARROW")){
        player.x = player.x - 4;
       
      }
      if(keyDown("RIGHT_ARROW")){
        player.x = player.x + 4;
      
      }

      shoot = shoot-1
      if(keyDown("space") && shoot <0){
      laser = createSprite(player.x,player.y);
      laser.addImage(laserImg);
      laser.velocityX = 5 ;
      laserGroup.add(laser);
      shoot = laser.x;
      laser.scale = 0.25;
     
      }
    
    if(laserGroup.isTouching(zombieGroup)){
      score = score+10;
      zombieGroup.destoryEach();
    }
      
    if(zombieGroup.isTouching(player)){
        gameState =END 
    }
}


else if(gameState === END){
    bg.velocityX =0 
    zombieGroup.setVelocityXEach(0);
    zombieGroup.setVisibleEach(false);
    
    }
      spawnZombies();
    drawSprites();


    function spawnZombies(){
        if(World.frameCount % 150 === 0){
            zombie =createSprite(1100,500);
            zombie.addImage(zombieImg);
            zombie.velocityX =-2;
           // deer.y =Math.round(random(550,50));
            zombieGroup.add(zombie);
            zombie.scale = 0.5
        }
    }
    
    
    
}
