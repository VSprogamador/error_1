var path,boy;
var pathImg,boyImg;
var MoedasCollection = 0;
var Moedas,MoedasGroup;
var MoedasG;

//Esttados de Jogo
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  endImg =loadAnimation("fimdeJogo.png");
  Moedas = loadAnimation("Moedas,png");
}
function setup(){

   createCanvas(windowWidth,windowHeight);

path=createSprite(width/2,20);
path.addImage(pathImg);
path.velocityY = 2;

boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;
  
Moedas=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);

     if(path.y > height ){
       path.y = height/2;
     }

    }else{
      if(cachorro.isTouching(boy)) {
        gameState=END;
      

        if (Moedas.isTouching(boy)) {
          cashG.destroyEach();
          MoedasCollection=MoedasCollection + 50;
        }

    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Moedas: "+ MoedasCollection,width-150,30);
  }

  function createMoedas() {
    if (World.frameCount % 60 == 0) {
    var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
    Moedas.addImage(Moedas.png);
    Moedas.scale=0.12;
    Mash.velocityY = 5;
    Moedas.lifetime = 200;
    Moedas.add(Moedas);
    }
  }

























