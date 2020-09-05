var gun,wall

var speed,weight

var thickness


function setup() {
createCanvas(800,400);

thickness = random(22,83);

wall= createSprite(800, 20,thickness,800);

gun = createSprite(100,200,50,10);



speed = random(223,321);

weight = random(30,52,1500);
}

function draw() {
  background(0,0,0);
  gun.velocityX = speed/4;
  if(wall.x-gun.x < gun.width+wall.width/2)
  {
   gun.velocityX = 0;
  
var deformation= (0.5 * weight* speed* speed)/(thickness*thickness*thickness);
  if(deformation<10){
  wall.shapeColor=color("green");
  stroke("white");
  textSize(20);
  fill ("white");
  text ("That's a really safe wall! :D",100,100);  
  }
  if(deformation>10 ){
  wall.shapeColor=color("red");
  stroke("white");
  textSize(20);
  fill ("white");
  text ("The wall is too unsafe to use. D:",100,100);  
  }
  }

  drawSprites();
}
