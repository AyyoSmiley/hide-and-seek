const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hider, seeker;
var hiderImg, seekerImg;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12;

function preload(){
hiderImg = loadImage("/assets/hider.png");
seekerImg = loadImage("/assets/seeker.png");
}

function setup(){
  createCanvas(1400,1000)
  engine = Engine.create();
  world = engine.world;
  hider = createSprite(700,200,10,10)
  hider.addImage(hiderImg);
  hider.scale = 0.3;
  seeker = createSprite(700,800,10,10)
  seeker.addImage(seekerImg);
  seeker.scale = 0.3;
  wall1 = new Wall(120,500,5,500);
  wall2 = new Wall(243,750,250,5);
  wall3 = new Wall(370,798,5,100);
  wall4 = new Wall(618,850,500,5);
  wall5 = new Wall(865,798,5,100);
  wall6 = new Wall(990,750,250,5);
  wall7 = new Wall(1112,500,5,500);
  wall8 = new Wall(243,250,250,5);
  wall9 = new Wall(370,202,5,100);
  wall10 = new Wall(618,150,500,5);
  wall11 = new Wall(865,202,5,100);
  wall12 = new Wall(990,250,250,5);
  
  
}

function draw(){
  background("white")
  Engine.update(engine);
  textSize(20)
  text("x: "+ mouseX, 1000, 120)
  text("y: "+ mouseY, 1000, 200)
  wall1.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  wall11.display();
  wall12.display();
  

  drawSprites();
  
}