
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     bob1=new bob(160,500,80)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  bob1.display();
  drawSprites();
 
}



