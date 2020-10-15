const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;

function setup(){
  createCanvas(400,400)
  engine = Engine.create();
  world = engine.world;
  ground = Bodies.rectangle(200,390,400,10,{isStatic:true});
  World.add(world,ground);
  ball = Bodies.circle(200,200,25,{restitution:1});
  World.add(world,ball);
}
function draw(){
  background("white");
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  ellipse(ball.position.x,ball.position.y,50,50);
}