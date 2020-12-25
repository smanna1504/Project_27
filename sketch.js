
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

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
var bobDiameter=5;
rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*10*2, 0);
 rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*5*2, 0);
  rope3=new Rope(bobObject3.body,roof.body,0, 0);
   rope4=new Rope(bobObject4.body,roof.body,bobDiameter*5*2, 0) ;
   rope5=new Rope(bobObject5.body,roof.body,bobDiameter*10*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(Infinity);
  text("PRESS THE UP-ARROW KEY TO START",290,50);
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
 rope2.display(); 
 rope3.display(); 
 rope4.display(); 
 rope5.display();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
        Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:100,y:-100});

	}
}

