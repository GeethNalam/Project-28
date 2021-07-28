
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var paper, ground;
var dustbin, can1, can2, can3;

function preload(){
	//dustbinImg = loadImage("dustbingreen.png");
	//paperImg = loadImage("paper.png");
}

function setup() {
	createCanvas(1000,350);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,330,1000,15);

	paper = new Paper(190,200,10);
	
	can1 = new Dustbin(870,318,80,12);

	can2 = new Dustbin(836,285,12,80);
	can3 = new Dustbin(916,285,12,80);
	
	launcher = new Launcher(paper.body,{x:190, y:170});

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("light grey");
  
 
 paper.display();
 ground.display();
 can1.display();
 can2.display();
 can3.display();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paper.body,paper.body.position,{x:18,y:-18})

}


}
function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}

function keyPressed(){
    if(keyCode===32)
    launcher.attach(paper.body);
}

