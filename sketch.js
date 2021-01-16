const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground1,box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100)
    ground1=new Ground(200, height,400,30);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log("Box2----->"+box2.body.angle);
    console.log("Box1------>"+box1.body.angle);
    box2.display();
    box1.display();
    ground1.display();

   
}