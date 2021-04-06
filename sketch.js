var canvas;
var music;
var surface1;
var surface2;
var surface3;
var surface4;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(85,550,170,50);
    surface1.shapeColor = "Orange";
    
    surface2 = createSprite(285,550,170,50);
    surface2.shapeColor = "Red";

    surface3 = createSprite(485,550,170,50);
    surface3.shapeColor = "Black";

    surface4 = createSprite(685,550,170,50);
    surface4.shapeColor = "Brown";
    //create box sprite and give velocity
    ball = createSprite(random(10,790),100,40,40);
    ball.shapeColor = "White";
    ball.velocityX = 4;
    ball.velocityY = 9;
}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(ball) && ball.bounceOff(surface1)){
        music.play();
        ball.shapeColor = "Orange";
    
    }
    if(ball.isTouching(surface2)){
        music.stop();
        ball.velocityX = 0;
        ball.velocityY = 0;
    }
    if(surface3.isTouching(ball) && ball.bounceOff(surface3)){
        music.play();
        ball.shapeColor = "Black";
    
    }
    if(surface4.isTouching(ball) && ball.bounceOff(surface4)){
        music.play();
        ball.shapeColor = "Brown";
    
    }



    drawSprites();
}
