const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7
var ground


function setup(){
    var canvas = createCanvas(1350,640);
    engine = Engine.create();
    world = engine.world;

    
   ground = new Ground(680,620)
 
   obstacle2 = new Obstacle(733,410,250,25)
   obstacle3 = new Obstacle(270,363,250,25)
   obstacle4 = new Obstacle(1008,194,130,25)
   obstacle5 = new Obstacle(700,600,250,25)
   obstacle6 = new Obstacle(1130,100,140,25)
   obstacle7 = new Obstacle(900,700,250,150)
   
   //new obstacles created below
   obstacle8 = new Obstacle(740,100,25,150)
   obstacle9 = new Obstacle(845,358,25, 130)
   obstacle10 = new Obstacle(1060, 130,25,150)
   obstacle11= new Obstacle(970, 390, 25,150)
   obstacle12= new Obstacle(803, 165, 150,25)
   obstacle13= new Obstacle(1033, 460, 150,25)
   obstacle14= new Obstacle(180, 105, 150,25)
   obstacle15= new Obstacle(415, 103, 150,25)
   obstacle16= new Obstacle(515, 215, 150,25)
   obstacle17= new Obstacle(1200, 240, 25,120)
   obstacle18= new Obstacle(1253, 290, 130,25)

   obstacle19= new Obstacle(578,170, 25, 70)
   obstacle20= new Obstacle(700,548, 25, 130)
   obstacle21= new Obstacle(260,300, 25, 130)
   obstacle22= new Obstacle(100,100, 25, 130)

   obstacle23= new Obstacle(250,560,100,25)
   obstacle24= new Obstacle(290,523,25,100)
   obstacle25= new Obstacle(345,484,130,25)

   obstacle26= new Obstacle(569,315,160,25)
   obstacle27= new Obstacle(1200,530, 100,25)
   obstacle28= new Obstacle(1163,575, 25, 100)
}
function draw(){
    background("lightBlue");

    textSize(13);
    fill("black")
    text(mouseX+","+mouseY, mouseX, mouseY)

    Engine.update(engine);
    
    obstacle2.display();
    obstacle3.display();
    obstacle4.display();
    obstacle5.display();
    obstacle6.display();
    obstacle7.display();

    obstacle8.display();
    obstacle9.display();
    obstacle10.display();
    obstacle11.display();

    obstacle12.display();
    obstacle13.display();
    obstacle14.display();
    obstacle15.display();
    obstacle16.display();
    obstacle17.display();
    obstacle18.display();

    obstacle19.display();
    obstacle20.display();
    obstacle21.display();
    obstacle22.display();

    obstacle23.display();
    obstacle24.display();
    obstacle25.display();
    obstacle26.display();
    obstacle27.display();
    obstacle28.display();

    ground.display();
}