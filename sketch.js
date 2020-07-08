const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preLoad(){
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


 ground1 = new ground(400,380,800,10);
 ground2 = new ground(0,380,800,10);
  side = new stick(680,340,15,50);
  side1 = new stick(600,340,15,50);
  side2 = new stick(610,380,70,10);

    paper1 = new paper(200,200,10);


}

function draw() {
  background("black");  
  Engine.update(engine);
  ground1.display();  
  ground2.display();
  paper1.display();
  side.display();   
  side1.display();
  side2.display();
  
  

  drawSprites();
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW ){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:5,y:-5});

  }

  if(keyCode === LEFT_ARROW ){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:-5,y:5});

  }

  if(keyCode === UP_ARROW ){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0,y:-5});

  }

  if(keyCode === DOWN_ARROW ){
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0,y:5});

  }

}

