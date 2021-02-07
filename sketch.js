var canvas;
var music;
var ball;
var surface1,surface2,surface3,surface4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    //create 4 different surfaces
    surface1=createSprite(150,550,100,10);
    surface1.shapeColor="green"
    surface2=createSprite(300,550,100,10);
    surface2.shapeColor="orange"
    surface3=createSprite(450,550,100,10);
    surface3.shapeColor="blue"
    surface4=createSprite(600,550,100,10);
    surface4.shapeColor="red"

    //create box sprite and give velocity
    ball=createSprite(200,200,20,20)
    ball.velocityX=-4;
    ball.velocityY=-4;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();
    ball.bounceOff(edges);
    
    //add condition to check if box touching surface and make it box
    if(ball.isTouching(surface1) && ball.bounceOff(surface1))
    {
     ball.shapeColor="green"
    
    }
    if(ball.isTouching(surface2) && ball.bounceOff(surface2))
    {
     ball.shapeColor="orange"
     ball.velocityX=0;
     ball.velocityY=0;
     ball.collide(surface2)
     music.stop()
    }
    if(ball.isTouching(surface3) && ball.bounceOff(surface3))
    {
     ball.shapeColor="blue"
     music.play()
    }
    if(ball.isTouching(surface4) && ball.bounceOff(surface4))
    {
     ball.shapeColor="red"

    }
    drawSprites()
}
