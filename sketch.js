var fairy,fairyImage ,fairy1Image, fairy2Image;
var star,starss,starImage,starnightImage;


function preload()
{
   //preload the images here

   fairyImage=loadImage("images/fairy.png");
   fairy1Image=loadImage("images/fairy1.png");
   fairy2Image=loadImage("images/fairy2.png");
   starImage=loadImage("images/star.png");
   starnightImage=loadImage("images/starnight.png");
}

function setup() {
  createCanvas(800, 750);

  starss=createSprite(400,375,50,50);
  starss.addImage(starnightImage);
  starss.scale=0.5;

  star=createSprite(750,50,50,50);
  star.addImage(starImage);
  star.scale=0.2;

  fairy=createSprite(280,590,50,50);
  fairy.addImage(fairyImage);
  fairy.scale=0.2;
   
 
}


function draw() {
  background("black");
     

  if(star.velocityY == 0 && star.y <= 540){
   
      if(keyDown("left_arrow")){
        
        if(fairy.x >= 100){
          fairy.x=fairy.x-15;
        }
      }
      
      if(keyDown("right_arrow")){
        
        if( fairy.x <= 700){
          fairy.x=fairy.x+15;
        }
      }
      
 }  
  
  if(fairy.x > 650 && fairy.x < 700){
    
        if(keyDown("down_arrow")){
        star.velocityY=5;
        
        
    } 
} 

  if(star.y > 540){
    star.velocityY= 0;
 }

  

  drawSprites();
}
