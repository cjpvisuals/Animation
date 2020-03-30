let bird_1 = { x:200, y:200, wing: -10, vwing:1}
let bird_2 = { x:300, y: 300, wing:20, vwing:-1}
let bird_3 = { x: 400, y:150, wing:15, vwing: 1}
let birds = [bird_1, bird_2, bird_3]

let ball = { x:200, y:30, speed:0}
var gravity=0.1

var col
function setup() {

    // create a canvas that fills the browser window and attach it to your HTML
    createCanvas(windowWidth, windowHeight).parent('p5')
    // the p5 variables "width" and "height" hold the dimensions of the canvas
    rectMode(CENTER)
}


var x= 1
function displayBall() {
  fill (179, 48, 0)
  ellipse(ball.x,ball.y,24,24)
}

function moveBall(){
  ball.y=ball.y + ball.speed
  ball.speed = ball.speed + gravity
}

function bounceBall() {
  if (ball.y >height) {
    ball.speed = ball.speed * -0.95
  }
}
function draw() {
    {background(0)
    displayBall()
    moveBall()
    bounceBall() }

background(255)
// Blue Sky
    {  beginShape()
      fill(74, 189, 255)
      vertex (0,0)
      vertex(0,450)
      vertex(1920,450)
      vertex(1920,0)
      strokeWeight(0)
      endShape(CLOSE)
    }

    // Sunset
    { col = map(mouseY, 0, 500, 255, 0);
      background(0, col/2, col);
        fill(235, 171, 52);
        ellipse(1300,mouseY,300,300);
        fill(0, 140, 219);
  }



// Blue Ocean
{ beginShape()
  fill(41, 119, 163)
  vertex(0,450)
  vertex(1920,450)
  vertex(1920,1000)
  vertex(0,1000)
  strokeWeight(0)
  endShape(CLOSE)
}

// Funk Sand

{ beginShape()
fill( 224, 169, 49)
vertex(0,750)
vertex(0,1000)
vertex(1920,0)
vertex(1920,750)
strokeWeight(0)
endShape(CLOSE)
}

// clouds
{fill (255,255,255)
  ellipse(x+50,50,60,50);
  ellipse(x+80,40,60,50);
  ellipse(x+130,50,60,50);
  ellipse(x+70,70,60,50);
  ellipse(x+110,65,60,50)

  x=x+1
}

{fill (255,255,255)
  ellipse(x+250,200,210,200);
  ellipse(x+230,190,210,200);
  ellipse(x+280,200,240,200);
  ellipse(x+220,220,210,200);
  ellipse(x+260,215,210,200)

  x=x+1
}


    for (let bird of birds) {

      // draw bird
      strokeWeight(5)
      line(bird.x,bird.y, bird.x-40, bird.y+bird.wing)
      line(bird.x,bird.y, bird.x+40, bird.y+bird.wing)

      //update bird
      bird.x = bird.x+1
      bird.y = bird.y+1
      bird.wing = bird.wing + bird.vwing

      // wing conditions

    if (bird.wing >= 20){
      bird.vwing = -bird.vwing
    }
    if (bird.wing <=-20) {
      bird.vwing = -bird.vwing
    }

      //wrap
      if (bird.x > width) {
        bird.x = 0
      }
      if (bird.x < 0){
        bird.x=width
      }
      if (bird.y > height) {
        bird.y=0
      }
      if (bird.y < 0) {
        bird.y = height
      }
}


}


// if the window is resized, resize the canvas to match
function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}
function mouseClicked() {
    print(int(mouseX), int(mouseY))
}

textSize(32)
text('Beach Day', 10,30)
fill(0,102,153)
