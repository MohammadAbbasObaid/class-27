
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof,paperO1,paperO2,paperO3,paperO4,paperO5paperO1;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(350,100,300,30);
	World.add(world,roof);

	paperO1=new Paper(250,300);
	paperO2=new Paper(300,300);
	paperO3=new Paper(350,300);
	paperO4=new Paper(400,300);
	paperO5=new Paper(450,300);

	rope1=new Rope(paperO1.body,roof.body,-100,0)
	World.add(world,rope1)

	rope2=new Rope(paperO2.body,roof.body,-50,0)
	World.add(world,rope2)

	rope3=new Rope(paperO3.body,roof.body,0,0)
	World.add(world,rope3)

	rope4=new Rope(paperO4.body,roof.body,+50,0)
	World.add(world,rope4)

	rope5=new Rope(paperO5.body,roof.body,+100,0)
	World.add(world,rope5)




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof.display();
  paperO1.display();
  paperO2.display();
  paperO3.display();
  paperO4.display();
  paperO5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

 drawSprite()
 }

function  keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperO1.body,paperO1.body.position,{x:-730,y:0})
	}
}


  

