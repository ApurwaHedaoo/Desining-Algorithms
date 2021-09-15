var apurwa
var anushka

function setup() {
  createCanvas(800,800);
  apurwa = createSprite(400,400,80,80)
  apurwa.shapeColor="pink"
  anushka = createSprite(200,200,100,100)
  anushka.shapeColor = "cyan"
  
}

function draw() {
  background("purple");  
  apurwa.x = World.mouseX
  apurwa.y = World.mouseY
  if(apurwa.x-anushka.x < apurwa.width/2+anushka.width/2&&
    anushka.x-apurwa.x < apurwa.width/2+anushka.width/2&&
    apurwa.y-anushka.y < apurwa.height/2+anushka.height/2&&
    anushka.y-apurwa.y < apurwa.height/2+anushka.height/2){
      apurwa.shapeColor="yellow"
      anushka.shapeColor="yellow"
    }
    else{
      apurwa.shapeColor="pink"
      anushka.shapeColor="cyan"
    }
  drawSprites();
}