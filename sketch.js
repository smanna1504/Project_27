
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
roof=new Roof();
bobObject1=new Bob(300);
bobObject2=new Bob(350);
bobObject3=new Bob(400);
bobObject4=new Bob(450);
bobObject5=new Bob(500);
rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //console.log(windowWidth);
 // console.log(windowHeight);

  drawSprites();
roof.display();
bobObject1.display();
bobObject2.display();
 bobObject3.display();
 bobObject4.display();
 bobObject5.display();
 rope1.display();
}



