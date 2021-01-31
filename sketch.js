
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
	//box1 = new Box(550,320,10,100);
	//box2 = new Box(750,320,10,100);
	//box3 = new Box(560,320,180,10);
	ground = new Ground(600,670,1200,20);
	
	//container
	boxPosition=width/2 +100
 	boxY=610;
 	boxLeftBody = new Box(boxPosition+20,boxY,20,100); 	
	boxBottomBody = new Box(boxPosition+100, boxY+60-20, 180,20); 	
	boxRightBody = new Box(boxPosition+200-20 , boxY, 20,100);
	 
    var ball_options ={
        restitution: 1.0, 
        isStatic: false
    }

   	paper = new Paper(150,500,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  
  boxBottomBody.display();
  boxLeftBody.display();
  boxRightBody.display();
  
  paper.display();

  
  drawSprites();
 
}
function keyPressed()
{
	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:55,y:-55});
	}
}



