function setup() {
  createCanvas(windowWidth,windowHeight)
  background(51, 10, 0)
}

function draw() {
  
  fill(255,100,255,100)
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