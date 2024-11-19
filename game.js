function setup() {
  createCanvas(600, 600);
}
//position variables
let characterX = 250;
let characterY = 50;
//game logic variables
let velocityY = 0.2;
let acceleration = 0.2;
// game state variable
let gameState = false;
// automatic slides
let state = "start";

// function to reset the game
function resetGame() {
  characterY = 100;
  velocityY = 0.2;
  gameState = true;
}
// function that draws the background
function gameBackground() {
  background(10, 24, 66);
}
//function clouds
function cloud(x, y, s) {
  fill(191, 230, 245);
  ellipse(x + 200 * s, y + 200 * s, 100 * s, 80 * s);
  ellipse(x + 270 * s, y + 200 * s, 100 * s, 80 * s);
  ellipse(x + 300 * s, y + 240 * s, 100 * s, 80 * s);
  ellipse(x + 260 * s, y + 270 * s, 100 * s, 80 * s);
  ellipse(x + 200 * s, y + 270 * s, 100 * s, 80 * s);
  ellipse(x + 160 * s, y + 240 * s, 100 * s, 80 * s);
  ellipse(x + 220 * s, y + 260 * s, 100 * s, 80 * s);
}
// function that drwas the rainbow with the cloud
function rainbow(x, y, s) {
  noStroke();
  fill(255, 0, 0);
  rect(x + 40 * s, y + 400 * s, 20 * s, 70 * s);
  fill(255, 127, 0);
  rect(x + 60 * s, y + 400 * s, 20 * s, 70 * s);
  fill(255, 255, 0);
  rect(x + 80 * s, y + 400 * s, 20 * s, 70 * s);
  fill(0, 255, 0);
  rect(x + 100 * s, y + 400 * s, 20 * s, 70 * s);
  fill(0, 100, 255);
  rect(x + 120 * s, y + 400 * s, 20 * s, 70 * s);
  fill(139, 0, 255);
  rect(x + 140 * s, y + 400 * s, 20 * s, 70 * s);
  fill(255, 255, 255);
  ellipse(x + 135 * s, y + 480 * s, 80 * s, 30);
  ellipse(x + 70 * s, y + 480 * s, 80 * s, 30);
  ellipse(x + 50 * s, y + 500 * s, 80 * s, 30);
  ellipse(x + 70 * s, y + 510 * s, 80 * s, 30);
  ellipse(x + 130 * s, y + 510 * s, 80 * s, 30);
  ellipse(x + 155 * s, y + 500 * s, 80 * s, 30);
  ellipse(x + 135 * s, y + 500 * s, 80 * s, 30);
}
// function that draws the character
function character(x, y, s) {
  noStroke();
  //body
  fill(255, 255, 255);
  rect(x + 25 * s, y + 200 * s, 150 * s, 210 * s, 50 * s);
  //feet
  fill(255, 255, 255);
  ellipse(x + 23 * s, y + 350 * s, 70 * s, 120 * s);
  ellipse(x + 177 * s, y + 350 * s, 70 * s, 120 * s);
  fill(255, 182, 193);
  ellipse(x + 20 * s, y + 380 * s, 90 * s);
  ellipse(x + 180 * s, y + 380 * s, 90 * s);
  //face
  fill(255, 255, 255);
  ellipse(x + 100 * s, y + 150 * s, 200 * s, 220 * s);
  //arms
  stroke(0, 0, 0);
  fill(255, 255, 255);
  rect(x + 40 * s, y + 269 * s, 50 * s, 60 * s, 30 * s);
  rect(x + 110 * s, y + 269 * s, 50 * s, 60 * s, 30 * s);
  noStroke();
  ellipse(x + 65 * s, y + 270 * s, 50 * s);
  ellipse(x + 135 * s, y + 270 * s, 50 * s);
  fill(255, 182, 193);
  ellipse(x + 65 * s, y + 320 * s, 50 * s, 20 * s);
  ellipse(x + 135 * s, y + 320 * s, 50 * s, 20 * s);
  //eyes
  fill(0, 0, 0);
  ellipse(x + 70 * s, y + 130 * s, 40 * s);
  ellipse(x + 130 * s, y + 130 * s, 40 * s);
  fill(255, 255, 255);
  ellipse(x + 70 * s, y + 130 * s, 10 * s);
  ellipse(x + 130 * s, y + 130 * s, 10 * s);
  ellipse(x + 77 * s, y + 120 * s, 15 * s);
  ellipse(x + 137 * s, y + 120 * s, 15 * s);
  //horn
  fill(253, 253, 150);
  triangle(
    x + 50 * s,
    y + 50 * s,
    x + 63 * s,
    y - 20 * s,
    x + 100 * s,
    y + 59 * s
  );
  //ears left
  push();
  translate(x + 30 * s, y + 60 * s);
  rotate(0.7);
  fill(255, 255, 255);
  ellipse(0 * s, 0 * s, 80 * s, [40] * s);
  pop();
  //ear right
  push();
  translate(x + 170 * s, y + 60 * s);
  rotate(-0.7);
  fill(255, 255, 255);
  ellipse(0 * s, 0 * s, 80 * s, [40] * s);
  pop();
  //hair
  fill(255, 182, 193);
  ellipse(x + 100 * s, y + 70 * s, 60 * s);
  ellipse(x + 60 * s, y + 75 * s, 60 * s);
  ellipse(x + 20 * s, y + 95 * s, 60 * s);
  ellipse(x + 130 * s, y + 60 * s, 30 * s);
  ellipse(x + 100 * s, y + 48 * s, 100 * s, 30 * s);
  ellipse(x + 60 * s, y + 65 * s, 100 * s, 30 * s);
  //nose
  fill(255, 182, 193);
  ellipse(x + 100 * s, y + 230 * s, 110 * s, 80 * s);
  fill(0, 0, 0);
  push();
  translate(x + 85 * s, y + 220 * s);
  rotate(3.14);
  stroke(0 * s, 0 * s, 0 * s);
  strokeWeight(3 * s);
  noFill();
  arc(0 * s, 0 * s, 10 * s, 10 * s, 0 * s, PI * s);
  pop();
  push();
  translate(x + 115 * s, y + 220 * s);
  rotate(3.14);
  stroke(0 * s, 0 * s, 0 * s);
  strokeWeight(3);
  noFill();
  arc(0 * s, 0 * s, 10 * s, 10 * s, 0 * s, PI * s);
  pop();
}
// function that draws the landingCloud
function landingCloud(x, y, s) {
  fill(245, 162, 173);
  ellipse(x + 200 * s, y + 200 * s, 100 * s, 80 * s);
  ellipse(x + 270 * s, y + 200 * s, 100 * s, 80 * s);
  ellipse(x + 300 * s, y + 240 * s, 100 * s, 80 * s);
  ellipse(x + 260 * s, y + 270 * s, 100 * s, 80 * s);
  ellipse(x + 200 * s, y + 270 * s, 100 * s, 80 * s);
  ellipse(x + 160 * s, y + 240 * s, 100 * s, 80 * s);
  ellipse(x + 220 * s, y + 260 * s, 100 * s, 80 * s);
}
// different screens
function startScreen() {
  background(10, 24, 66);
  //stars
  fill(255, 255, 204);
  ellipse(350, 50, 100);
  fill(10, 24, 66);
  ellipse(310, 0, 80, 100);
  ellipse(388, 0, 80, 100);
  ellipse(310, 90, 80, 100);
  ellipse(388, 90, 80, 100);
  fill(255, 255, 204);
  ellipse(78, 500, 100);
  fill(10, 24, 66);
  ellipse(40, 460, 80, 100);
  ellipse(118, 460, 80, 100);
  ellipse(40, 540, 80, 100);
  ellipse(118, 540, 80, 100);
  fill(255, 255, 204);
  ellipse(490, 510, 130);
  fill(10, 24, 66);
  ellipse(440, 455, 100);
  ellipse(540, 455, 100);
  ellipse(440, 550, 100);
  ellipse(540, 550, 100);
  ellipse(490, 570, 40);
  ellipse(490, 440, 40);

  //cloud
  fill(245, 162, 173);
  noStroke();
  ellipse(340, 400, 200, 180);
  ellipse(460, 320, 200, 180);
  ellipse(420, 220, 200, 180);
  ellipse(260, 200, 200, 180);
  ellipse(200, 370, 200, 180);
  ellipse(150, 280, 200, 180);
  ellipse(300, 300, 300, 180);
  //Text
  fill(255, 255, 255);
  textSize(60);
  text("START GAME", 110, 315);
  fill(255, 255, 255);
  textSize(15);
  text(
    "Make the unicorn land on the cotton-candy coloured cloud softly.",
    110,
    350
  );

  //moon
  fill(255, 255, 204);
  ellipse(100, 100, 100);
  fill(10, 24, 66);
  ellipse(150, 100, 100);
  fill(245, 245, 175);
  ellipse(95, 135, 15);
  ellipse(76, 125, 7);
  ellipse(90, 90, 15);
}
function gameScreen() {
  background(10, 24, 66);
  gameBackground();
  cloud(-80, -60, 0.5);
  cloud(90, 0, 0.5);
  cloud(260, -60, 0.5);
  cloud(90, 0, 0.5);
  cloud(450, 0, 0.5);
  cloud(-120, 120, 0.5);
  cloud(330, 120, 0.5);
  cloud(90, 190, 0.5);
  cloud(500, 190, 0.5);
  cloud(90, 190, 0.5);
  cloud(-150, 280, 0.5);
  cloud(300, 260, 0.5);
  cloud(80, 340, 0.5);
  cloud(420, 400, 0.5);
  cloud(-90, 430, 0.5);
  landingCloud(-50, 260, 1.5);
  // making the rainbow appear when pressing the spacebar
  if (keyIsDown(32)) {
    rainbow(characterX, characterY, 0.4);
  }
}
function resultScreen() {
  background(10, 24, 66);
  fill(245, 162, 173);
  noStroke();
  ellipse(340, 400, 200, 180);
  ellipse(460, 320, 200, 180);
  ellipse(420, 220, 200, 180);
  ellipse(260, 200, 200, 180);
  ellipse(200, 370, 200, 180);
  ellipse(150, 280, 200, 180);
  ellipse(300, 300, 300, 180);
  fill(255, 255, 255);
  textSize(60);
  text("YOU DID IT :)", 110, 315);
  textSize(15);
  text("click to restart", 250, 350);
}
function gameoverScreen() {
  background(128, 128, 128);
  fill(64, 64, 64);
  noStroke();
  ellipse(340, 400, 200, 180);
  ellipse(460, 320, 200, 180);
  ellipse(420, 220, 200, 180);
  ellipse(260, 200, 200, 180);
  ellipse(200, 370, 200, 180);
  ellipse(150, 280, 200, 180);
  ellipse(300, 300, 300, 180);
  fill(255, 255, 255);
  textSize(60);
  text("GAME OVER :(", 110, 315);
  textSize(15);
  text("click to restart", 250, 350);
}

function draw() {
  if (state === "start") {
    startScreen();
  } else if (state === "game") {
    gameScreen();
    character(characterX, characterY, 0.4);
  } else if (state === "result") {
    resultScreen();
  } else if (state === "gameover") {
    gameoverScreen();
  }

  if (gameState === true) {
    characterY = characterY + velocityY;
    velocityY = velocityY + acceleration;

    //decrasing the velocity
    if (mouseIsPressed) {
      velocityY = velocityY - 0.7;
    }
    //Key Movement controls
    if (keyIsDown(32)) {
      velocityY = velocityY - 0.7;
    }
    //arrow right movement
    if (keyIsDown(39)) {
      characterX = characterX + 5;
    }
    //arrow left movement
    if (keyIsDown(37)) {
      characterX = characterX - 5;
    }
  }
  // platform landing
  if (characterY >= 400 && characterY <= 500 && gameState === true) {
    if (characterX <= 120 || characterX >= 400) {
      gameState = false;
      console.log("GAME OVER :( you did not land on the cloud!");
      state = "gameover";
    } else if (velocityY >= 5) {
      gameState = false;
      console.log("GAME OVER :( you were to fast!");
      state = "gameover";
    } else {
      gameState = false;
      console.log("YOU DID IT! :)");
      state = "result";
    }
  }
} 

function mouseClicked() {
  if (state === "start") {
    characterX = 250;
    characterY = 50;
    velocityY = 0.2;
    state = "game";
    gameState = true;
  } else if (state === "result" || state === "gameover") {
    resetGame();
    state = "start";
    gameState = false;
  }
}
   