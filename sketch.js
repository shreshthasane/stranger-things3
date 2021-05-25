const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var backgroundImg;
var eleven;
var mike;
var dustin;
var jonathan;
var demogorgan;
var drbrenner;
var hopper;
var lucas;
//var nancy;
var will;

function preload(){
backgroundImg = loadImage("background.png");

}

function setup(){
    var canvas = createCanvas(displayWidth - 20, displayHeight - 30);

    engine = Engine.create();
    world = engine.world;
    eleven = new Eleven(displayWidth/2 - 100, displayHeight/2 + 200, 500, 500);
    mike = new Mike(displayWidth/2 - 200, displayHeight/2 + 200, 500, 500);
    dustin = new Dustin(displayWidth/2 + 70, displayHeight/2 + 200, 500, 500);
    jonathan = new Jonathan(displayWidth/2 - 480, displayHeight/2 + 200, 500, 500);
    hopper = new Hopper(displayWidth/2 - 350, displayHeight/2 + 180, 500, 500);
    demogorgan = new Demogorgan(displayWidth/2, displayHeight/2 - 200, 500, 500);
    lucas = new Lucas(displayWidth/2 + 200, displayHeight/2 + 200, 500, 500);
    will = new Will(displayWidth/2 + 350, displayHeight/2 + 200, 500, 500);


    
    

    


    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    eleven.display();
    mike.display();
    dustin.display();
    jonathan.display();
    hopper.display();
    demogorgan.display();
    lucas.display();
    will.display();
}