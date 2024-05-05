let font1;
let spacebar;
let blockImg;
let stage = 0;
function preload(){
  font1 = loadFont('pixel.ttf');
  blockImg = loadImage("blocks/block3.png");
  spacebar = loadImage("blocks/space.png");

}
function setup(){
  createCanvas(200,600);
  // cnv.parent("#canvas_container");
  // cnv.style("display","block");
  // cnv.style("margin","auto");
  background(213, 231, 247,180);

}
function draw(){
  // textFont(font1);
  // textSize(18);
  // textAlign(CENTER);
  // fill(240, 200, 8);
  // stroke(0);
  // strokeWeight(3);
  // text("Lines Cleared:",100,50);
  // text(window.parent.points,100,70);
  // console.log(window.parent.points);
  if(stage == 0){
    clear();
   instruction();
  }else if (stage == 1){
    clear()
    aboutUS();
  }

}
function changeStateToIns(){
  stage = 0;
}
function changeToAbout(){
  stage = 1;
}
function instruction(){
  background(213, 231, 247,180);
  textFont(font1);
  textSize(18);
  textAlign(CENTER);
  fill(240, 200, 8);
  stroke(0);
  strokeWeight(3);
  text("Lines Cleared:",100,50);
  text(window.parent.points,100,70);
  // instruction text
  fill(0);
  noStroke();
  textSize(15);
  text("Instruction",100,100);
  imageMode(CENTER);
  image(blockImg,100,140,25,25);
  image(blockImg,100,165,25,25);
  image(blockImg,75,165,25,25);
  image(blockImg,125,165,25,25);
  textSize(10);
  text("A",75,172);
  text("S",100,172);
  text("D",125,172);
  textSize(11);
  text("A: Left",100,200);
  text("D: Right",100,230);
  text("S: Down",100,260);
  image(spacebar,100,290,40,40);
  text("Spacebar: Rotate",100,330);
  textSize(15);
  text("RULES",100,380);
  textSize(10);
  text("1. The row will clear \nwhen it is full",100,410);
  text("2. If the tetris hits \nthe top, game ends",100,450);
  text("3. Cannot rotate \nat the leftmost \nand rightmost sides", 100,490);
  text("GLHF!",100,550);
}
function aboutUS(){
  background(213, 231, 247,180);
  textFont(font1);
  textSize(18);
  textAlign(CENTER);
  fill(240, 200, 8);
  stroke(0);
  strokeWeight(3);
  text("Lines Cleared:",100,50);
  text(window.parent.points,100,70);
  noStroke();
  fill(0);
  //text("ABOUT US", 100,100);
  textSize(19);
  text("***********", 100,110);
  text("ISABEL CHAI", 100,130);
  textSize(14);
  text("> Senior in NYU <", 100,170);
  text("> Major <\n  Media Culture \nand \nCommunication", 100,200);
  textSize(19);
  text("***********", 100,310);
  text("Crystal Wu", 100,330);
  textSize(14);
  text("> Senior in NYU <", 100,370);
  text("> Major <\n  Media Culture \nand \nCommunication", 100,400);
}
