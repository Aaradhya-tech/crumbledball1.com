
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, d1,d2,d3;
var ground;

function setup() {
	createCanvas(1100, 400);

	engine = Engine.create();
	world = engine.world;

  paper = new papers(20,20,45);
  ground = new Ground(1100/2,300,1100,10);
  d1 = new dustbin(850,290,200,20);
  d2 = new dustbin(740,250,20,100);
  d3 = new dustbin(940,250,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);



  paper.display();
  ground.display();
  d1.display();
  d2.display();
  d3.display();

  drawSprites();
 
}

function keyPressed(){
  
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-100})
}

}



