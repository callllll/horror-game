var canvas;
let gameState = 'title';

function preload(){
  choice1 = loadImage('assets/choice1.png');
}
function setup() {
  createCanvas(1024, 768);
  start = new Clickable();
  start.locate(525, 250);
  start.color = '#d9d1a000';
  start.text = "";
  start.strokeWeight = 0;
  start.image = startImg;
  start.fitImage = true;
  start.width = 75;
  start.height = 30;
  start.onPress = function() {
    gameState = 'instruction';
  }

  function draw() {
    background(bg);
  
    //program wireframe
    switch (gameState) {
      case 'title':
        titleScreen();
        break;
      case 'scene1Screen':
        scene1Screen(); //function
        break;
      case 'scene2Screen':
        scene2Screen();
        break;
      case 'scene3Screen':
        scene3Screen();
        break;
      case 'scene3Screen':
        scene3Screen();
        break;
      case 'scene4Screen':
        scene4Screen();
        break;
    }
  }


function titleScreen() {
  background('black');
  stroke(255);
  fill(255);
  textSize(100);
  textAlign(CENTER);
  text('9:00PM', width*0.5, height*0.33);
  textSize(35);
  text('Press "W" To Start Game', width*0.5, height*0.66);
  image(choice1, mouseX, mouseY);
  start.draw();
}
}
