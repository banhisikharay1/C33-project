const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgoundImg;
var snow, snow2;
var engine;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
}

function setup() {
  createCanvas(1200,655);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  snow = new Snow( 600, -1, 50,50);
  
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}