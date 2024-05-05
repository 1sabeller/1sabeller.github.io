let blockImg;
let font1;
//variables for startPage
let hover_start = false;
let stage = 0;
//variables for game;
let row;
let col;
let dy = 0;
let tileSize = 25;
// create array to register each space
let board = [];
let rows = [];
// create varaibles to generate random shapes
let shape;
//create rules of blocks
let block = [
  //shape "O"
  [2,3,4,5],
  //shape "J"
  [3,5,7,6],
  //shape "L"
  [2,3,5,7],
  //shape "T"
  [3,5,4,7],
  //shape "S"
  [3,5,4,6],
  //shape "Z"
  [2,4,5,7],
  //shape "I"
  [0,2,4,6]
];
//create an array to track each tiles
let current = [];
//sound
let bgSound;

function preload(){
  blockImg = loadImage("blocks/block3.png");
  font1  = loadFont("pixel.ttf");
  bgSound = loadSound('bgSound.mp3');
}
function setup(){
  createCanvas(412,600);
  row = int(height/tileSize);
  col = int(width/tileSize);
  shape = int(random(7));
  //shape = 2;
  for(let i = 0; i < row; i++){
    board[i] = new Array(col);
    for(let k = 0; k < col; k++){
      //use 0 to represent empty space
      board[i][k] = 0;
    }
  }
  current.push(new Tiles(shape));
}
function draw(){
  background(213, 231, 247,180);
  console.log(stage);
  if(stage == 0){
    startPage();
  } else if (stage == 1){
    gameStart();
  }else if (stage == 2){
    gameOver();
  }
}

function startPage(){
  textAlign(CENTER);
  textFont(font1);
  textSize(30);
  noStroke();
  text("START",width/2,height/2);
  //check if hover
  if(mouseX>width/2-30 && mouseX<width/2+30 && mouseY > height/2-30 && mouseY<height/2+30){
    hover_start = true;
    stroke(240, 200, 8);
    strokeWeight(5);
    text("START",width/2,height/2);
  }else{
    hover_start = false;
  }

}

function gameStart(){
  noStroke();
  //console.log(shape);
  fill(240, 200, 8,70);
  rect(0,height-25,width,25);

  if(current[current.length-1].hit == true){
    shape = int(random(7));
    //shape = 2;
    //window.parent.shape = shape;
    current.push(new Tiles(shape));
  }
  // for(let k = 0; k < row; k ++){
  //   for(let j = 0; j < col; j++){
  //     text(board[k][j],j*tileSize,k*tileSize);
  //   }
  // }
  checkStack();
  if(checkOver()){
    stage = 2;
  }
  for(let i in current){
    current[i].getMinCol();
    current[i].getMaxCol();
    current[i].getMinRow();
    current[i].getMaxRow();
    current[i].checkSides();
    // console.log(current[i].col);
    //console.log("COL:",current[i].tile[1].x + current[i].col);
    // console.log("ROW:",current[i].tile[1]);
    //current[i].detectTiles();
    if(current[i].hit == false){
      if(frameCount%20==0){
        current[i].move();
      }
    }
    if(current[i].detectFloor()){
      current[i].hit = true;
      //console.log(current[i].tile[1]);
      for(let t = 0 ; t<current[i].tile.length; t++){
        let addR = current[i].tile[t].y+current[i].row;
        let addCol = current[i].tile[t].x+current[i].col;
        for(let r = 0; r < row; r++){
          for(let c = 0; c < col; c++){
            if(r == addR && c == addCol){
              board[r][c] = 2;
            }
          }
        }
      }
    }
    current[i].display();
    //console.log(current[i].minCol+current[i].col);
    //console.log("Col",current[i].col);

  }
  clearFloor();
  //console.log(current.length);
}

function checkOver(){
  for(let c = 0 ; c < col; c++){
    if(board[0][c] == 2){
      return true;
    }
  }
}
function checkStack(){
  //check stack
  let stack = false;
  for(let i in current){
    for(let t = 0; t < current[i].tile.length;t++){
      let checkRow = current[i].tile[t].y + current[i].row + 1;
      let checkCol = current[i].tile[t].x + current[i].col;
      for(let r = 0 ; r < row ; r ++){
        for (let c = 0 ; c < col ; c++){
          if(board[r][c] == 2){
            if(checkRow == r && checkCol == c){
              current[i].hit = true;
              stack = true;
            }
          }
        }
      }
    }
    if(stack == true){
      for(let t = 0 ; t < current[i].tile.length; t++){
        let addR = current[i].tile[t].y+current[i].row;
        let addCol = current[i].tile[t].x+current[i].col;
        for(let r = 0 ; r < row; r++){
          for(let c = 0; c < col; c++){
            if(r == addR && c == addCol){
              board[r][c] = 2;
              stack = false;
            }
          }
        }
      }
    }
  }

}
function clearFloor(){
  let clearRow = 0;
  for(let r = 0 ; r < row; r++){
    let clearCount = 0;
    for(let c = 0; c < col; c++){
      if(board[r][c] == 2){
        clearCount+=1;
      }
      if(clearCount == col){
        //console.log("1");
        clearRow = r;
        for(let i in current){
          for (let t = current[i].tile.length - 1; t >= 0; t--){
            if(current[i].tile[t].y + current[i].row == r){
              current[i].tile.splice(t,1);
              //console.log(t);
            }
          }
        }
        window.parent.points+=1;
      }
    }
  }
  for(let c = 0 ; c < col; c++){
    board[clearRow][c] =0;
  }
  for(let i = current.length - 1 ; i >= 0 ; i--){
    if(current[i].tile.length == 0){
      current.splice(i,1);
    }
  }
}
class Blocks{
  constructor(){
    this.x = null;
    this.y = null;
  }
  display(col,row){
    image(blockImg,(col+this.x)*tileSize,(row+this.y)*tileSize,tileSize,tileSize);
  }
}
class Tiles{
  constructor(shape){
    //create the array that holds 4 blocks
    this.tile = [];
    for(let i = 0; i <4; i++){
      this.tile.push(new Blocks());
    }
    this.row = -4;
    this.col = int(random(0, col - 4));
    this.shape = shape;
    this.speed = 1;
    this.hit = false;
    this.left = false;
    this.right = false;
    this.minCol = 4;
    this.maxCol = 0;
    this.minRow = 4;
    this.maxRow = 0;
    this.canRotate = true;
    //compute x and y position of each blocks inside
    for(let k in this.tile){
      this.tile[k].x = block[this.shape][k]%2;
      this.tile[k].y = int(block[this.shape][k]/2);
    }
  }
  rotation(){
    let center = this.tile[1];
    for(let i = 0 ; i < this.tile.length; i++){
      let x = this.tile[i].y - center.y;
      let y = this.tile[i].x - center.x;
      if(center.x - this.maxRow + center.y + this.col >= 0 && center.x - this.minRow + center.y + this.col <= col - 1){
        //this.canRotate = true;
        this.tile[i].x = center.x - x;
        this.tile[i].y = center.y + y;
    }

    }
  }
  getMaxRow(){
    this.maxRow = 0;
    for(let i in this.tile){
      if(this.tile[i].y > this.maxRow){
        this.maxRow = this.tile[i].y;
      }
    }
  }
  getMinRow(){
    this.minRow = 0;
    for(let i in this.tile){
      if(this.tile[i].y < this.minRow){
        this.minRow = this.tile[i].y;
      }
    }
  }
  getMinCol(){
    this.minCol = 0;
    for(let i in this.tile){
      //the x position of the leftmost block
      if(this.tile[i].x < this.minCol){
        this.minCol = this.tile[i].x;
      }
    }
  }
  getMaxCol(){
    this.maxCol = 0;
    //the x position of the rightmost block
    for(let i in this.tile)
    {if(this.tile[i].x > this.maxCol){
      this.maxCol = this.tile[i].x;
    }}
  }
  checkSides(){
    for(let i in this.tile){
      let m = this.row + this.tile[i].y;
      let n1 = this.col + this.tile[i].x -1;
      let n2 = this.col + this.tile[i].x +1;
      //console.log(n);
      for(let r = 0; r < row; r++){
        for(let c = 0 ; c < col; c++){
          if(board[r][c] == 2){
            if(m == r && n1 == c){
              this.left = true;
            }else if(m == r && n2 == c){
              this.right = true;
            }
          }else{
            this.left = false;
            this.right = false;
          }

        }
      }
    }

  }
  //move the tiles
  move(){
    this.row += this.speed;
    //console.log(this.row);
  }

  //detect bottom
  detectFloor(){
    for(let i in this.tile){
      if(this.tile[i].y + this.row == row -2){
        return true;
      }
    }
  }
  //display the tiles
  display(){
    for(let i in this.tile){
      this.tile[i].display(this.col,this.row);
    }
  }

}
function keyPressed(){
  for (let i in current){
    if(current[i].hit == false){
      //check key press
      //move 1 column left when press "A"
      if(current[i].left == false && keyCode == 65){
        current[i].col-=1;
        bgSound.play();
        //set boundary
        if(current[i].minCol + current[i].col < 0){
          current[i].col = 0 - current[i].minCol;
          //console.log(current[i].col);
        }
      }else if (current[i].right == false && keyCode == 68){
        current[i].col += 1;
        bgSound.play();
        if(current[i].maxCol + current[i].col > col - 1){
          current[i].col = col - 1 - current[i].maxCol;
        }

      }else if (keyCode == 83){
        current[i].row += 1 ;
        bgSound.play();
        //set boundary
        if(current[i].maxRow+current[i].row>row-2){
          current[i].row = row - 2 - current[i].maxRow;
        }
      }else if(keyCode == 32){
        current[i].rotation();
      }
      else{
        current[i].speed = 1;
      }
    }

  }
}

function mouseClicked(){
  if(hover_start == true){
    stage = 1;
  }
}

function gameOver(){
  textAlign(CENTER);
  textFont(font1);
  textSize(25);
  noStroke();
  text("GAME OVER!!!", width/2, height/2);
}
function paused(){
  noLoop();
}
function resume(){
  loop();
}
