// Lab 6
// Jake Kingdon
// March 22nd, 2023.
// I created a sketch in which two sprites, a bowling ball and a bowling pin are drawn using functions. The bowling pin sprite spawns 
// randomly and the bowling ball moves to the pin to "collect" it. When the bowling ball interacts with the bowling pin, I made it so the
// bowling ball turns red.

let pinX, pinY;
let ballX = 100,
ballY = 200,
ballSize = 50;
let ballSpeed = 5;
let ballColor = "black";
let pinVisible = true;

// Calling the bowling pin and bowling ball functions.
function setup() {
  createCanvas(400, 400);
  pinX = random(100, 300);
  pinY = random(100, 300);
}

function draw() {
  background(220);
  if (pinVisible) {
    drawPin(pinX, pinY, 40, 80);
  }
  drawBowlingBall(ballX, ballY, ballSize, ballColor);
}

// Draw the bowling ball. 
function drawBowlingBall(x, y, size, color) {
  fill(color);
  ellipse(x, y, size);
}

// Draw the pin.
function drawPin(x, y, width, height) {
  fill("white");
  rectMode(CENTER);
  rect(x, y, width, height);
  fill("red");
  rect(x, y - height / 2, width / 2, height / 2);
}

// Make the bowling ball move towards bowling pin.
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    let dx = pinX - ballX;
    let dy = pinY - ballY;
    let distToPin = sqrt(dx * dx + dy * dy);
    if (distToPin <= ballSize / 2 + 40) {
      // collision detected
      ballColor = "red";
      pinVisible = false;
    } else {
      // Move bowling ball towards pin.
      let angle = atan2(dy, dx);
      let velX = cos(angle) * ballSpeed;
      let velY = sin(angle) * ballSpeed;
      ballX += velX;
      ballY += velY;
    }
  }
}
