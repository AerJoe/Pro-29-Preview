const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var leftwall, rightwall
var ground
var link

var bridge
var bridge_con
var bridge_con1

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

bright_con1 = new Link(bridge, leftwall)
bridge_con = new Link(bridge, rightwall)
ground = new Base(0, height-10, width * 2, 20, "#795548", true)
leftWall = new Base(200, height/2 + 50, 600, 100, "#8d6e63", true)
bridge = new Bridge(20, {x: width/2 - 350, y: height/2})



}

function draw() {
  background(51);
  Engine.update(engine);
  leftwall.display()
  rightwall.display()
  //ground.display()
}
