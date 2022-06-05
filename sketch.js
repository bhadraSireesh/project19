var unicorn, unicornImg;
var city, cityImg;
var gifts, giftsImg, giftsGroup;
var score = 0;
var gifts2, gifts2Img, gifts2Group;
var toys, toysImg, toysGroup;
var sword, swordImg, swordGroup;

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload()
{
  cityImg = loadImage("background.png");
  unicornImg = loadAnimation("unicorn1.png","unicorn2.png");
  giftsImg = loadImage("gifts.png");
  gifts2Img = loadImage("gifts2.png");
  toysImg = loadImage("toys.png");
  swordImg = loadImage("sword.png");
  endImg =loadAnimation("game over.png");
  
}

function setup() {
    //create a canvas

    createCanvas(windowWidth, windowHeight);
    
    city=createSprite(0, 0, 1920, 1080);
    city.addImage(cityImg);
    city.velocityX = -12;
    city.scale = 1.6;

   unicorn = createSprite(200,600,200,200);
   unicorn.addAnimation("uniRunning",unicornImg);
   unicorn.scale= 1;

   unicorn.setCollider("rectangle",0,0,40,40);

    /*gifts = createSprite(600, 600, 50, 50);
    gifts. addImage(giftsImg);
    gifts.scale = 0.5;*/
    giftsGroup = new Group();
    gifts2Group = new Group();
    toysGroup = new Group();
    swordGroup = new Group();
}

function draw()
{

   if(gameState===PLAY)
    {
      background(cityImg);
      unicorn.y = World.mouseY;
      
    }

  // background(0);
   if(city.x < 0)
   {
    city.x = width;
   }

   spawnGifts();
   spawnGifts2();
   spawnToys();
   spawnSword();
   
   if (giftsGroup.isTouching(unicorn)) {
      giftsGroup.destroyEach();
      score = score+ 10;
    }
    else if (gifts2Group.isTouching(unicorn)) {
      gifts2Group.destroyEach();
      score = score+ 20;
      
    }else if(toysGroup.isTouching(unicorn)) {
      toysGroup.destroyEach();
       score = score+ 30;

     }else{
      if(swordGroup.isTouching(unicorn)) {
        gameState=END;

        unicorn.addAnimation("uniRunning",endImg);

        giftsGroup.destroyEach();
        gifts2Group.destroyEach();
        toysGroup.destroyEach();
        swordGroup.destroyEach();
        
        giftsGroup.setVelocityYEach(0);
        gifts2Group.setVelocityYEach(0);
        toysGroup.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);
      }    
        
        
    
     
    
   background(cityImg);
   drawSprites();
   textSize(30);
   fill(255);
   text("score:"+ score,10,30);
  }
}
function spawnGifts()
{
    if (World.frameCount % 300 === 0)
    {
      var gifts = createSprite(Math.round(random(200,windowWidth)), 600, 50, 50);
      gifts.scale = 0.6;
      gifts.addImage(giftsImg);
      giftsGroup.add(gifts);
      gifts.velocityX = -9
      gifts.lifetime = 300;
    }

     
}

function spawnGifts2()
{
    if (World.frameCount % 250 === 0)
    {
      var gifts2 = createSprite(Math.round(random(200,windowWidth)), 600, 50, 50);
      gifts2.scale = 0.4;
      gifts2.addImage(gifts2Img);
      gifts2Group.add(gifts2);
      gifts2.velocityX = -7;
      gifts2.lifetime = 250;
    }

     
}

function spawnToys()
{
    if (World.frameCount % 130 === 0)
    {
      var toys = createSprite(Math.round(random(200,windowWidth)), 600, 50, 50);
      toys.scale = 0.4;
      toys.addImage(toysImg);
      toysGroup.add(toys);
      toys.velocityX = -6;
      toys.lifetime = 130;
    }

     
}

function spawnSword()
{
    if (World.frameCount % 130 === 0)
    {
      var sword = createSprite(Math.round(random(200,windowWidth)), 600, 50, 50);
      sword.scale = 0.4;
      sword.addImage(swordImg);
      swordGroup.add(sword);
      sword.velocityX = -6;
      sword.lifetime = 130;
    }

     
}

