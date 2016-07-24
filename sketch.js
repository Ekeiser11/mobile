function setup() {
  createCanvas(windowWidth,windowHeight)
  background(0)
  smooth();
  ellipseMode(CENTER);
  frameRate(20)
}

function draw() {
  stroke(191, 191, 191,10);
  fill(242, 242, 242,5);
  
  push();
  translate(width/2,height/2);
  rotate(map(sin(0.001*frameCount),-1, 1, 0, TWO_PI));
  ellipse(0,0,720,random(720));
  pop();
  
  
  fill(13, 13, 13,100)
  noStroke()
  
  for (var i=0;i<touches.length;i++) {
    
    var x = touches[i].x
    var y = touches[i].y
    var w = 100
    var h = 100
    ellipse(x,y,w,h)
    
  }
  
}

function touchMoved() {
  return false
}