
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
hammer1 = new Hammer(10,100)
stone1 = new Stone(700,100)
	Engine.run(engine);
 plane1 = new Plane(400,700,1000,20) 
 circle1 = new circle(600,200)
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer1.display()
  stone1.display()
  plane1.display()
  circle1.display()
  drawSprites();
 
}



