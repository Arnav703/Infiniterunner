var spaceshipImg, spaceship;
var spaceImg, space;
var asteroidImg, asteroid, asteroidGroup;
var gameState = "play";

function preload() {
spaceshipImg = loadImage("unnamed.png");
asteroidImg = loadImage("meteor.png");
spaceImg = loadImage("space.jpg");
}

function setup() {
 createCanvas(1366,655);
 space = createSprite(600, 20000);
  space.addImage("space",spaceImg);
  space.velocityY = 1.5;
  spaceImg.width = 1525;
  spaceImg.height = 1980;

 asteroidGroup = new Group();

 spaceship = createSprite(500,500,100,100);
 spaceship.scale = 0.3;
 spaceship.addImage("spaceship", spaceshipImg);


}

function draw() {
    background(0);
    if (gameState === "play") {
      if(keyDown("left_arrow")){
        spaceship.x = spaceship.x - 3;
      }
    
     
      if(keyDown("right_arrow")){
        spaceship.x = spaceship.x + 3
    }
    if(space.y > 990){
        space.y = 960
      }
    
    spawnast();
  drawSprites();
    
    if (asteroidGroup.isTouching(spaceship)|| spaceship.y > 1200){
    spaceship.destroy();
    gameState = "end"
    }
    
    
    }


    if (gameState === "end"){
        stroke("yellow");
        fill("yellow");
        textSize(30);
        text("Game over", 600,400)
    }
}

    function spawnast() {

        if (frameCount % 40 === 0) {
        var asteroid = createSprite(200,15);
        asteroidImg.width = 150;
        asteroidImg.height = 150;

        asteroid.addImage(asteroidImg)

        asteroid.x = Math.round(random(1300,200));
        asteroid.velocityY = asteroid.velocityY + 8
        asteroid.lifetime = 800;
        asteroidGroup.add(asteroid);
    
        }
        
    }