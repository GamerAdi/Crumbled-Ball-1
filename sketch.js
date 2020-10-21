
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	pap1= new Paper (200,200,30);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  pap1.display();
  drawSprites();
 
}



