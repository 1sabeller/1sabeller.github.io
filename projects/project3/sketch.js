let stage = 0;
let font1;
//local storage for highest POINTS
let currentPointsAndCoins = 0;
//video object
let capture;
let compareFrame;
let mergedFrame;
//motion varibles
let moveUp = 0;
let moveDown = 0;
let angryBirdY = 200;
//threshold
let threshold = 20;
//images
let bg;
let birdRed;
let ground;
let startButton;
let oUp;
let oDown;
let gcoin,scoin;
let leftArrow,rightArrow;
let gameOver;
let scoreBoard;
let bronze,silver,gold,platium;
let newScore;
let okButton;
//arrays
let obstacle = [];
let coinArr = [];
let currentCoin = [];
//points
let points = 0;
let coinGain = 0;
//levels
let level1 =true;
let level2 = false;
let level3 = false;
let newS = false;
//hovers
let hover_start = false;
let hover_previous = false;
let hover_next = false;
let hover_ok = false;
//color tracking
let r = 0;
let g = 0;
let b = 0;
function preload(){
  font1 = loadFont("font2.ttf");
  bg = loadImage("images/bg.png");
  birdRed = loadImage("images/bird.png");
  startButton = loadImage('images/start.png');
  ground = loadImage('images/ground.png');
  oUp = loadImage("images/up.png");
  oDown = loadImage("images/down.png");
  scoin = loadImage('images/scoin.png');
  gcoin = loadImage("images/gcoin.png");
  leftArrow = loadImage("images/leftArrow.png");
  rightArrow = loadImage("images/rightArrow.png");
  gameOver = loadImage("images/gameOver.png");
  scoreBoard = loadImage("images/scoreBoard.png");
  bronze = loadImage("images/bronze.png");
  silver = loadImage("images/silver.png");
  gold = loadImage("images/gold.png");
  platium = loadImage("images/platium.png");
  newScore = loadImage("images/newScore.png");
  okButton = loadImage("images/ok.png");
}
function setup(){
  pixelDensity(1);
  let cnv = createCanvas(900,504);
  cnv.parent("#canvas_container");
  cnv.style("display","block");
  cnv.style("margin","auto");

  //load webcam
  capture = createCapture({
    video:{
      mandatory:{
        minWidth :900,
        minHeight : 504,
        maxWidth : 900,
        minWidth : 504,
      }
    }
  });
  capture.hide();
  compareFrame = createGraphics(900,504);
  compareFrame.pixelDensity(1);
  mergedFrame = createGraphics(900,504);
  mergedFrame.pixelDensity(1);

  //draw Obstacles
  for(let i = 0 ; i < 1000; i ++){
    let o = new Obstacles(800+i*300);
    obstacle.push(o);
  }
  coinArr.push(scoin);
  coinArr.push(gcoin);
  timer = millis();
  for(let j = 0; j <1000;j++){
    let c = new Coins(900+j*400);
    currentCoin.push(c);
  }
  currentPointsAndCoins = window.localStorage.getItem("highest");
  if(currentPointsAndCoins == null){
    window.localStorage.setItem("highest",0);
    currentPointsAndCoins= 0;
  }else{
      if(points+coinGain > currentPointsAndCoins){
        currentPointsAndCoins = int(currentPointsAndCoins);
      }

  }
}
function draw(){
  if(stage == 0){
    startPage();
  }else if (stage == 1){
    gameStart();
  }else if (stage == 2){
    gameover();
  }else if(stage == 3){
    instruction();
  }else if (stage == 4){
    colorChoice();
  }
}
function colorChoice(){
  imageMode(CENTER);
  capture.loadPixels();
  if (capture.pixels.length > 0) {

    let bestMatch = 1000;
    let bestLocation = -1;

    for (let i = 0; i < capture.pixels.length; i += 4) {
      let match = dist(r, g, b, capture.pixels[i], capture.pixels[i + 1], capture.pixels[i + 2]);
      if (match < bestMatch) {
        bestMatch = match;
        bestLocation = i;
      }
    }
    noTint();
    image(capture, width/2, height/2);

    let xPos = (bestLocation / 4) % 900;
    let yPos = (bestLocation / 4) / 900;
    stroke(255);
    strokeWeight(5);
    noFill();
    rect(xPos, yPos, 25, 25);
    fill(r,g,b);
    textAlign(CENTER);
    textFont(font1);
    textSize(40);
    text("YOUR BIRD's COLOR: RGB( "+r+", "+g+", "+b+" )",width/2,height/6*5+20);
    textSize(30);
    fill(0);
    text("PRESS 'ENTER' TO GO BACK",width/2,height/6*5+60);
  }
}
function startPage(){
  background(0);
  hover_ok = false;
  imageMode(CORNER);
  noTint();
  image(bg,0,0);
  textFont(font1);
  textSize(80);
  textAlign(CENTER);
  stroke(255);
  strokeWeight(5);
  fill(r,g,b);
  text("Fapply Bird",width/2,height/3);
  tint(r,g,b,150);
  textSize(20);
  text("Your", width/2-40,height/3*2+120);
  image(birdRed,width/2-10,height/3*2+100,birdRed.width*2,birdRed.height*2);
  text("Bird", width/2+50,height/3*2+120);
  //start button
  if(mouseX>width/2-60 && mouseX<width/2+20 && mouseY>height/3*2-50 && mouseY<height/3*2+100){
    tint(220,100);
    hover_start = true;
    image(startButton,width/2-60,height/3*2,startButton.width/3,startButton.height/3);
  }else {
    noTint();
    image(startButton,width/2-60,height/3*2,startButton.width/3,startButton.height/3);
    hover_start = false;
  }
  //left arrow
  if(mouseX>width/2-120 && mouseX<width/2-80 && mouseY>height/2-40 && mouseY<height/2){
    tint(220,100);
    image(leftArrow,width/2-100,height/2-20,leftArrow.width*1.5,leftArrow.height*1.5);
    hover_previous = true;
  }else{
    noTint();
    image(leftArrow,width/2-100,height/2-20,leftArrow.width*1.5,leftArrow.height*1.5);
    hover_previous = false;
  }
  //right arrow
  if(mouseX>width/2+80 && mouseX<width/2+120 && mouseY>height/2-40 && mouseY<height/2){
    tint(220,100);
    image(rightArrow,width/2+100,height/2-20,leftArrow.width*1.5,leftArrow.height*1.5);
    hover_next = true;
  }else{
    noTint();
    image(rightArrow,width/2+100,height/2-20,leftArrow.width*1.5,leftArrow.height*1.5);
    hover_next= false;
  }
  if(level1 == true){
    textSize(40);
    text("LEVEL 1",width/2,height/2);
  }else if (level2 == true){
    textSize(40);
    text("LEVEL 2",width/2,height/2);
  }else if (level3 == true){
    textSize(40);
    text("LEVEL 3",width/2,height/2);
  }
}
function gameStart(){
  noTint();
  imageMode(CORNER);
  capture.loadPixels();
  compareFrame.loadPixels();
  mergedFrame.loadPixels();
  noTint();
  if(capture.pixels.length>0 && compareFrame.pixels.length>0){
    moveUp = 0;
    moveDown = 0;

    for(let x =0; x < 900; x++){
      for(let y = 0; y < 504; y ++){
        let location = int((x + y * 900) * 4);
        //up side
        if (x < 50 && dist(capture.pixels[location], capture.pixels[location + 1], capture.pixels[location + 2], compareFrame.pixels[location], compareFrame.pixels[location + 1], compareFrame.pixels[location + 2]) > threshold) {
         moveUp += 1;
         mergedFrame.pixels[location] = 0;
         mergedFrame.pixels[location + 1] = 255;
         mergedFrame.pixels[location + 2] = 0;
         mergedFrame.pixels[location + 3] = 255;
       }
       //down side
       else if (x > 850 && dist(capture.pixels[location], capture.pixels[location + 1], capture.pixels[location + 2], compareFrame.pixels[location], compareFrame.pixels[location + 1], compareFrame.pixels[location + 2]) > threshold) {
          moveDown += 1;
          mergedFrame.pixels[location] = 0;
          mergedFrame.pixels[location + 1] = 255;
          mergedFrame.pixels[location + 2] = 0;
          mergedFrame.pixels[location + 3] = 255;
        } else {
          mergedFrame.pixels[location] = capture.pixels[location];
          mergedFrame.pixels[location + 1] = capture.pixels[location + 2];
          mergedFrame.pixels[location + 2] = capture.pixels[location + 2];
          mergedFrame.pixels[location + 3] = 255;
        }
      }
    }
  }
  mergedFrame.updatePixels();
  image(mergedFrame, 0, 0);

  if(moveUp>1000){
    angryBirdY -=10;
    if(angryBirdY < 10){
      angryBirdY =10;
    }
  }else if (moveDown >1000){
    angryBirdY +=10;
    if(angryBirdY > height-80){
      stage = 2;
    }
  }
  //instruction rectangles
  stroke(254, 152, 0);
  strokeWeight(5);
  fill(0,0);
  line(50,0,50,height);
  line(850,0,850,height);
  fill(254, 152, 0)
  stroke(0);
  textFont(font1);
  strokeWeight(2);
  textSize(28);
  text("UP",10,20);
  text("DOWN",855,20);
  //draw bird
  tint(r,g,b,100);
  image(birdRed,50,angryBirdY,birdRed.width*2,birdRed.height*2);
  noTint();
  for(let k = 0; k < obstacle.length;k++){
    obstacle[k].display();
    obstacle[k].move();
    obstacle[k].detectBird();
    if(obstacle[k].x < 50){
      obstacle.splice(0,1);
      points++;
    }
  }
  for(let j = 0; j < currentCoin.length; j++){
    currentCoin[j].display();
    currentCoin[j].move();
    currentCoin[j].detectBird();
    if(currentCoin[j].x<50){
      currentCoin.splice(0,1);
    }
  }

  //draw groudnlevel
  image(ground,0,height-100,ground.width*6,ground.height*2.5);
  text("POINTS: "+points,width/2,50);
  text("COINS: " + coinGain,width/2,70);
  //line(obstacle[0].x,obstacle[0].uy,60,angryBirdY);
  // console.log(obstacle[0].uy);
  // console.log(angryBirdY);
  // console.log(angryBirdY);
  compareFrame.image(capture, 0, 0, 900, 504);
}
class Obstacles{
  constructor(x){
    this.x = x;
    if(level1 == true){
      this.uy = random(215,400);
      this.ly = random(-150,0);
    }else if(level2 == true){
      this.uy = random(215,350);
      this.ly = random(-125,0);
    }else if (level3 == true){
      this.uy = random(215,300);
      this.ly = random(-100,0);
    }
  }
  display(){
    image(oUp,this.x,this.uy,oUp.width*1.2,oUp.height*1.2);
    image(oDown,this.x,this.ly,oDown.width*1.2,oDown.height*1.2)
  }
  move(){
    //continuously move left
    if(level1 == true){
      this.x -=5;
    }else if(level2 == true){
      this.x -=6;
    }else if (level3 == true){
      this.x -=7;
    }
  }
  detectBird(){
    if(this.x<60 && angryBirdY-30<oDown.height+this.ly){
      stage = 2;
    }else if(this.x<60 && angryBirdY+20>this.uy){
      stage = 2;
    }
  }
}
class Coins{
  constructor(x){
    this.x = x
    this.y = random(100,300);
    this.coin = int(random(0,2));
  }
  display(){
    image(coinArr[this.coin],this.x,this.y,coinArr[this.coin].width*1.2,coinArr[this.coin].height*1.2);
  }
  move(){
    this.x -=5;
  }
  detectBird(){
    if(dist(this.x,this.y,60,angryBirdY)<40){
      currentCoin.splice(0,1);
      if(this.coin == 0){
        coinGain ++;
      }else if (this.coin == 1){
        coinGain +=2;
      }
    }
  }
}
function gameover(){

  background(0);
  noTint();
  image(bg,width/2,height/2);
  if(points+coinGain > currentPointsAndCoins){
    localStorage.setItem('highest',points+coinGain);
    newS = true;
  }else {
    localStorage.setItem("highest",currentPointsAndCoins);
    newS = false;
  }
  imageMode(CENTER);
  image(gameOver,width/2,height/3,gameOver.width*3,gameOver.height*3);
  push();
  translate(width/2,height/2)
  rotate(radians(90));
  image(birdRed,0,0,birdRed.width*2,birdRed.height*2);
  pop();
  image(scoreBoard,width/2,height/3*2,scoreBoard.width*2,scoreBoard.height*2);
  textFont(font1);
  textSize(30);
  fill(255);
  stroke(0);
  strokeWeight(1);
  textAlign(CENTER);
  text(points+coinGain,width/2+70,height/3*2-5);
  if(points+coinGain>=10 && points+coinGain<20){
    image(bronze,width/2-65,height/3*2+10,bronze.width*2,bronze.height*2);
  }else if (points+coinGain>=20 && points+coinGain<30){
    image(silver,width/2-65,height/3*2+10,bronze.width*2,bronze.height*2);
  }else if (points+coinGain>=30 && points+coinGain<40){
    image(gold,width/2-65,height/3*2+10,bronze.width*2,bronze.height*2);
  }else if (points+coinGain>=40){
    image(platium,width/2-65,height/3*2+10,bronze.width*2,bronze.height*2);
  }
  text(currentPointsAndCoins,width/2+70,height/3*2+40);
  if(newS == true){
    image(newScore,width/2+40,height/3*2+5,newScore.width*1.5,newScore.height*1.5);
  }
  //okButton
  if(mouseX>width/2-60 && mouseX<width/2+20 && mouseY>height/3*2+50 && mouseY<height/3*2+150){
    tint(220,100);
    hover_ok = true;
    image(okButton,width/2,height/3*2+100,startButton.width/4,startButton.height/4);
  }else {
    noTint();
    image(okButton,width/2,height/3*2+100,startButton.width/4,startButton.height/4);
    hover_ok = false;
  }

}
function instruction(){
  background(0);
  noTint();
  imageMode(CENTER);
  image(bg,width/2,height/2);
  textSize(60);
  textFont(font1);
  fill(255);
  stroke(0,200);
  strokeWeight(5);
  textAlign(CENTER);
  text("INSTRUCTIONS",width/2,height/5);
  textSize(30);
  text("MOVE",width/4,height/3);
  text("REWARDS",width/4,height/3+130);
  text("WARNING!!",width/4*3,height/3);
  text("METALS",width/4*3,height/3+130);
  textAlign(LEFT);
  textSize(20);
  strokeWeight(2);
  text("MOVE UP: Wave Your RIGHT Hand Inside the Rectangle",width/10,height/3+40);
  text("MOVE DOWN: Wave Your LEFT Hand Inside the Rectangle",width/10,height/3+80);
  text("POINTS", width/10,height/3+170);
  text(" : Pass Through",width/10+70,height/3+170);
  text(" Column Obstacle",width/10+200,height/3+170);
  text("COINS", width/10,height/3+210);
  text(": Gain",width/10+80,height/3+210);
  image(scoin,width/10+160,height/3+205);
  text("COINS", width/10,height/3+250);
  text(": Gain",width/10+80,height/3+250);
  image(gcoin,width/10+160,height/3+245);
  text("Don't Touch : ", width/2+120,height/3+40);
  image(oUp,width/2+250,height/3+40,oUp.width/3,oUp.height/3);
  image(oDown,width/2+280,height/3+40,oUp.width/3,oUp.height/3);
  image(platium,width/2+120,height/3+165);
  text(": POINTS + COINS",width/2+140,height/3+170);
  image(gold,width/2+120,height/3+205);
  text(": POINTS + COINS",width/2+140,height/3+210);
  image(silver,width/2+120,height/3+245);
  text(": POINTS + COINS",width/2+140,height/3+250);
  image(bronze,width/2+120,height/3+285);
  text(": POINTS + COINS",width/2+140,height/3+290);
  fill(255,0,0);
  text(" + 1", width/10+35,height/3+170);
  text(" 1", width/10+180,height/3+170);
  text(" + 1", width/10+35,height/3+210);
  text(" 1", width/10+125,height/3+210);
  text(" + 2", width/10+35,height/3+250);
  text(" 1", width/10+125,height/3+250);
  text(" More Than 40", width/2+270,height/3+170);
  text(" More Than 30", width/2+270,height/3+210);
  text(" More Than 20", width/2+270,height/3+250);
  text(" More Than 10", width/2+270,height/3+290);
  if(mouseX>width/2-20 && mouseX<width/2+20 && mouseY>height-40 && mouseY<height){
    tint(220,100);
    image(okButton,width/2,height-20,okButton.width*1.5,okButton.height*1.5);
    hover_ok = true;
  }else{
    image(okButton,width/2,height-20,okButton.width*1.5,okButton.height*1.5);
    hover_ok = false;
  }

}
function mouseClicked(){
  if(hover_start == true){
    stage = 1;
    hover_start = false;
  }
  if(hover_next){
    if(level1 == true){
      level2 = true;
      level1 = false;
    }else if (level2 == true){
      level3 = true;
      level2 = false;
    }else if (level3 == true){
      level1 = true;
      level3 = false;
    }
  }
  if(hover_previous == true){
    if(level1 ==true){
      level3 = true;
      level1 = false;
    }else if (level2 == true){
      level1 = true;
      level2 = false;
    }else if (level3 == true){
      level2 = true;
      level3 = false;
    }
  }
  if(hover_ok == true){
    stage = 0;
    points = 0;
    coinGain = 0;
    angryBirdY = 200;
    moveUp = 0;
    moveDown = 0;
    hover_ok = false;
  }

}
function changeToIns(){
  stage = 3;
}
function changeToCol(){
  stage = 4;
}
function mousePressed() {
  if(stage == 4){
    r = red(get(mouseX,mouseY));
    g = green(get(mouseX,mouseY));
    b = blue(get(mouseX,mouseY));
  }
}
function keyPressed(){
  if(stage == 4 && keyCode == 13){
    stage = 0;
  }
}
