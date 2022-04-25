var canvas;

function preload(){
  choice1 = loadImage('assets/choice1.png');
}
function setup() {
  createCanvas(400, 400);


function draw() {
  switch (gameState) {
    case 'title':
      titleScreen();
      break;
  }
  background(255);
  click1.draw();
  click2.draw();
  click3.draw();
  click4.draw();
  click5.draw();
}


function titleScreen() {
  background('black');
  stroke(255);
  fill(255);
  textSize(100);
  textAlign(CENTER);
  text('Wolf', width*0.5, height*0.33);
  textSize(35);
  text('Press "W" To Start Game', width*0.5, height*0.66);
  image(choice1, mouseX, mouseY);
}
}
