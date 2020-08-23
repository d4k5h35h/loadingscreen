/*
  0.1 = loading screen
  0.2 = menu screen 
  0.3 = levels screen
  0.4 = upgrade screen
  1-10 = game screen
*/
var Van;
var up, left, right, melee, range;
var b1,loader;
var gameState = 0.1;
var particles = [];
var cnv;

function setup(){
  cnv = createCanvas(windowWidth, windowHeight);

    Van = createSprite(width / 2, height / 2, 50, 50);
    up = createSprite(width - 100, height - 150, 100, 100);
    left = createSprite(100, height - 150, 100, 100);
    right = createSprite(225, height - 150, 100, 100);
    melee = createSprite(width - 250, height - 150, 100, 100);
    range = createSprite(width - 100, height - 350, 100, 100);  
    loader = createSprite(width/2,height - 40,width / 2,50);
    b1 = createSprite(width / 2,height / 2,50,50);
 }

function draw(){
  background(0);
  if (gameState === 0.1){
    fire();
    b1.onMousePressed = function(){
      gameState = 1;
      b1.visible = false;
    }
  }
  if(gameState === 1){
    Van.visible = true;
    up.visible = true;
    melee.visible = true;
    left.visible = true;
    right.visible = true;
    range.visible = false;    
  }
  
  else if(gameState === 0.1 || gameState === 0.2|| gameState === 0.3|| gameState === 0.4){
  Van.visible = false;
  up.visible = false;
  melee.visible = false;
  left.visible = false;
  right.visible = false;
  range.visible = false;
  }
  if(gameState === 0.2){}
  if(gameState === 0.3){}
  if(gameState === 0.4){}
  
 console.log(gameState);
  drawSprites();
}


class Particle {
  constructor(x, y, vx, vy) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.alpha = 255;
    this.d = random(10, 30);
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 7.75;
  }
  finished() {
    return this.alpha < 0;
  }

  show() {
    noStroke();
    fill(random(180, 250), random(50, 200), 10, this.alpha);
    ellipse(this.x, this.y, this.d, this.d);
  }
}
function fire(){
  for (let i = 0; i < 5; i++) {
      let p = new Particle(width / 20, height / 2, random(5, 15), random(-5, 5));
      particles.push(p);
      let q = new Particle(width / 1.05, height / 2, random(-5, -15), random(5, -5));
      particles.push(q);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        particles.splice(i, 1);
      }
    }
  }