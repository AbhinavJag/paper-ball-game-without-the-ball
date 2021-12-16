var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;
var ball
var groundObg,left_side,right_side;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    
	var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

 
	//Create the Bodies Here.
	groundObj=new Ground(10/2,670,1580,10);
	left_side=new Ground(710,615,10,100);
	right_side=new Ground(510,615,10,100);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("blue");
  
  drawSprites();
  groundObj.display()
  left_side.display()
  right_side.display()

  
}
function keypressed(){
	if(keycode === UP_ARROW){

	}
}



