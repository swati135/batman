var dropObj, drops = [];
var umbrellaObj;
var bruce, man, zeus, thunder;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	bruce = loadImage("Untitled.png")	
	zeus  = loadImage("thunder_PNG37.png");
}

function setup() {
	createCanvas(800, 700);

	man = createSprite(420,525)
	man.addImage(bruce);
	thunder = createSprite(400,-50);
	thunder.addImage(zeus);

	engine = Engine.create();
	world = engine.world;
	umbrellaObj = new Umbrella(400,400);
	for(var i = 0; i < 256; i++ ){
		dropObj = new Drop(random(0,800), random(0,500));
		drops.push(dropObj);
	}
	//Create the Bodies Here.
 	Engine.run(engine);
 
}


function draw(){
  rectMode(CENTER);
  background(0);
  for(i = 0; i < 256; i++){
	drops[i].display();
  }
  drawSprites();
}