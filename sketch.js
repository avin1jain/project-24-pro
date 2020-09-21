
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var   box2,  box1, box3, paper1,table
var engine, world;

function preload()
{
	

}

function setup() {
	engine = Engine.create();
	world = engine.world;
	createCanvas(1200, 400);
	rectMode(CENTER);
	


	box1 = new Box(750, 305, 20, 100);
	box2 = new Box(850,305,20,100);
	box3 = new Box(800,350,120,20);
	paper1= new paperball(200,345,30);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

    table= createSprite(200,350,120,15)

	ground = Bodies.rectangle(width/2, 350, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  paper1.display();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
 Matter.Body.applyForce(paper1.body,paper1.body.position ,{ x:30,y:-30})
}
}



