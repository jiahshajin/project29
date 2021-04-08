var ground
 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var engine, world;
var ground1;
var block2;
var block3;
var block4;
var block5;
var block6;
var block7;
var block8;
var block9;
var block10;
var block11;
var block12;
var block13;
var block14;
var block15;
var block16;
var block17;
var block18;
var block19;
var block20;
var block21;
var block22;
var block23;
var block24;
var block25;
var block26;
var slingshot;
var ball;
 
function preload() {
    
}



function setup() {
    createCanvas(1300,600);
     rectMode(CENTER)
      
    createSprite(630,161,30,40)

    
   engine = Engine.create();
    world = engine.world;
    
   
   Engine.run(engine);

    
   ground= new Ground( 630,310,250,10);
   ground1= new Ground(1000,224,210,10) ;
     
  block2= new Block(600,201,30,40);
  block3=new Block(630,201,30,40)
  block4= new Block(661,201,30,40)

   
   block5= new Block1(570,242,30,40)
   block6 = new Block1(600,242,30,40)
   block7= new Block1(631,242,30,40)
   block8 = new Block1(662,242,30,40)
   block9 = new Block1(693,242,30,40)
   block10 = new Block2(540,283,30,40)
   block11 = new Block2(570,283,30,40)

   block12= new Block2(600,283,30,40)
   block13= new Block2(631,283,30,40)
   block14= new Block2(661,283,30,40)
   block15= new Block2(691,283,30,40)

   block16= new Block2(722,283,30,40)
   block17= new Block1(990,118,30,40) 
   block18=new Block(959,158,30,40)
   block19=new Block(990,157,30,40)
   block20=new Block(1020,157,30,40)
   block21=new Block2(930,197,30,40)
   block22=new Block2(961,197,30,40)
   block23=new Block2(990,197,30,40)
   block24=new Block2(1020,197,30,40)
   block25=new Block2(1050,197,30,40)
  // block26=new Block2(822,197,30,40)
 ball=new Polygon(50,50,50,50)
   

  slingshot= new SlingShot(ball.polygon,{x:100,y:200});
    
  
}

function draw() {
  background(55,43,43);  
  drawSprites();

 ground.display()
 ground1.display()
 
 block2.display()
 block3.display()
 block4.display()
 block5.display()
 block6.display()
 block7.display()
 block8.display()
 block9.display()
 block10.display()
 block11.display()
 block12.display()
 block13.display()
 block14.display()
 block15.display()
 block16.display()
 block17.display()
 block18.display()
 block19.display()
 block20.display()
 block21.display()
 block22.display()
 block23.display()
 block24.display()
 block25.display()
 block26.display()

 slingshot.display()
 ball.display()



}