let stage =0;
let pstage = 0;
let purchaseStage = 0;
let money = 500;
let moneyBoard;
let myRec;
//font
let font1,font2;
//sound
let bgSound;
let selectSound;
let clickSound;
let cowSound;
let purchaseSound;
let chickenSound ;
let pickSound;
//colors
let eyeHSB,eSlider;
let hairR,hrSlider;
let pantHSB,pSlider;
//images
let bg,bg1,pierreMap,pierreHitMap;
let title;
let newButton;
let cursor1;
let panel;
let boy, girl;
let left,right;
let scheme,skin;
let eyes;
let cat1,cat2,cat3,dog1,dog2,dog3;
let hair1,hair2,hair3;
let shirt1,shirt2,shirt3,pant1,pant2,pant3;
let okButton,backButton,closeButton;
let inventory;
let home;
let carpet1;
let chair1;
let pCurrent;
let pFront0,pLeft0,pRight0,pBack0;
let pfront = [];
let pleft = [];
let pright= [];
let pback = [];
let tv;
let table1;
let gift;
let tilesetArtwork;
let box;
let livestock;
let chicken,cow;
let exit;
let cDes,cPri;
let cowDes;
let ground;
let shopList;
let cauliSeed,potatoSeed,parsnipSeed,beanSeed;
let bin, binOpen;
//choices
let cat01 = true;
let cat02 = false;
let cat03 = false;
let dog01 = false;
let dog02 = false;
let dog03 = false;
let skin1 = true;
let skin2 = false;
let skin3 = false;
let hair01 = true;
let hair02 = false;
let hair03 = false;
let shirt01 = true;
let shirt02 = false;
let shirt03 = false;
let pant01 = true;
let pant02 = false;
let pant03 = false;
let choseBoy = false;
let choseGirl = false;
//hover
let hover_new = false;
let hover_endIns = false
let hover_nextAnimal = false;
let hover_previousAnimal = false;
let hover_previousSkin = false;
let hover_nextSkin = false;
let hover_previousHair = false;
let hover_nextHair = false;
let hover_previousShirt = false;
let hover_nextShirt = false;
let hover_previousPant = false;
let hover_nextPant = false;
let hover_boy = false;
let hover_girl = false;
let hover_ok = false;
let hover_back = false;
let hover_nextPage = false;
let hover_previousPage = false;
let hover_close = false;
let hover_chair = false;
let hover_carpet = false;
let hover_tv = false;
let hover_table = false;
let hover_exit = false;
let hover_chicken = false;
let hover_cow = false;
let hover_bin = false;
//input
let nameInput, farmInput,favouriteInput;
let name = '';
let farmName = '';
let favourite = '';
//introcution
let page = 0;
let envelop1,envelops;
//inventory
let invent = [];
let inventoryDisplay;
let in1 = true;
let in2 = false;
let in3 = false;
let in4 = false;
let in5 = false;
let in6 = false;
let in7 = false;
let in8 = false;
let in9 = false;
let in0 = false;
let inm = false;
let ine = false;
//tools
let pail,hoe,waterCan,pickaxe,scythe;
let pailYes = false;
let hoeYes = false;
let waterCanYes = false;
let pickaxeYes = false;
let scytheYes = false;
let cauliSeedYes = false;
let potatoSeedYes = false;
let parsnipSeedYes = false;
let beanSeedYes = false;
//home
let decoration = [];
let carpets = [];
let carpetMove = false;
let chairs=[];
let chairMove = false;
let tvs = [];
let tvMove = false;
let tables = [];
let tableMove = false;
//player Variables
let players;
let newcarpet;
let newchair;
let newtv;
let newtable;
let frameUp = false;
let frame = 0;
let frameTotal = 3;
let currentDir=[];
//beach farm Variables
let theWorld;
let theRanch;
let thePlayerInShop;
let thePlayerInP;
let thePlayer;
let levelHitMap;

//marnie ranch variabel
let clickMarnie = false;
let hover_Marnie = false;
let hover_supply = false;
let supply = false;
let hover_purchase = false;
let purchase = true;
let hover_leave = false;
let leave = false;
//pierre shop variables
let hover_pierre = false;
let hover_parsnip = false;
let hover_bean = false;
let hover_cauli = false;
let hover_potato = false;
let parsnipNB = 0;
let beanNB = 0;
let cauliNB = 0;
let potatoNB = 0;
let hover_finish = false;

// farm map
let farmLand = [];
let cauliflowerStage = [];
let potatoStage = [];
let parsnipStage=[];
let beanStage=[];
let matureCauliNB = 0;
let maturePotatoNB = 0;
let matureParsnipNB = 0;
let matureBeanNB = 0;
let growRate = 0;
let cropArr = [];
//prices
//cauli --> 175, potato -->80 , bean-->40, parsnip --> 35

//animal Variables
let chickArr = [];
let cowArr = [];
let chickImg,chickImg1,chickCurrent;
let cowImg, cowImg1,cowCurrent;
let loveImg;
let eggArr = [];
let eggImg,milkImg;
let eggSpeed = 360;
let eggNB = 0;
let getMilk = false;
let milkNB = 0;

function preload(){
  // myRec = new p5.SpeechRec();
  pickSound = loadSound('sound/pickUpItem.mp3');
  cowSound = loadSound('sound/cow_moo1.mp3')
  chickenSound = loadSound("sound/chicken_bawk1.mp3");
  purchaseSound = loadSound("sound/purchaseClick.mp3");
  clickSound = loadSound("sound/mouseClick.mp3");
  selectSound = loadSound("sound/bigSelect.mp3");
  bgSound = loadSound("sound/stardew_valley_theme.mp3");
  font1 = loadFont("font/stardew-valley.ttf");
  font2 = loadFont("font/envelop.ttf");
  bg = loadImage("images/bg.jpg");
  bg1 = loadImage("images/bg1.png");
  title = loadImage("images/title.png");
  newButton = loadImage("images/new.png");
  okButton = loadImage('images/ok.png');
  backButton = loadImage('images/backButton.png');
  closeButton = loadImage("images/closeButton.png");
  cursor1 = loadImage("images/cursor.png");
  panel = loadImage("images/panel.png");
  boy = loadImage("images/boy.png");
  girl = loadImage("images/girl.png");
  left = loadImage("images/left.png");
  right = loadImage("images/right.png");
  scheme = loadImage("images/scheme.png");
  skin = loadImage('images/skin.png');
  eyes = loadImage("images/eye.png");
  cat1 = loadImage("images/cat1.png");
  cat2 = loadImage("images/cat2.png");
  cat3 = loadImage("images/cat3.png");
  dog1 = loadImage("images/dog1.png");
  dog2 = loadImage("images/dog2.png");
  dog3 = loadImage("images/dog3.png");
  hair1 = loadImage('images/hair1.png');
  hair2 = loadImage('images/hair2.png');
  hair3 = loadImage('images/hair3.png');
  shirt1 = loadImage('images/shirt1.png');
  shirt2 = loadImage('images/shirt2.png');
  shirt3 = loadImage('images/shirt3.png');
  pant1 = loadImage('images/pant1.png');
  pant2 = loadImage('images/pant2.png');
  pant3 = loadImage('images/pant3.png');
  inventory = loadImage('images/inventory.png');
  envelop1 = loadImage('images/envelop1.png');
  envelops = loadImage('images/envelop.png');
  pail = loadImage('images/pail.png');
  hoe = loadImage('images/hoe.png');
  pickaxe = loadImage('images/pickaxe.png');
  waterCan = loadImage('images/water_can.png');
  scythe = loadImage("images/scythe.png");
  home = loadImage("images/home.png");
  carpet1 = loadImage('images/carpet1.png');
  chair1 = loadImage('images/chair1.png');
  pFront0 = loadImage('images/front0.png');
  pFront1 = loadImage('images/front1.png');
  pFront2 = loadImage('images/front2.png');
  pLeft0 = loadImage('images/left0.png');
  pLeft1 = loadImage('images/left1.png');
  pLeft2 = loadImage('images/left2.png');
  pBack0 = loadImage('images/back0.png');
  pBack1 = loadImage('images/back1.png');
  pBack2 = loadImage('images/back2.png');
  pRight0 = loadImage("images/right0.png");
  pRight1 = loadImage("images/rigth1.png");
  pRight2 = loadImage("images/rigth2.png");
  tv = loadImage('images/tv.png');
  table1 = loadImage('images/table1.png');
  gift = loadImage("images/gift.png");
  levelHitMap = loadImage("images/level_hitmap.png");
  box = loadImage('images/box.png');
  livestock = loadImage('images/livestock.png');
  chicken = loadImage('images/chicken.png');
  cow = loadImage("images/cow.png");
  exit = loadImage("images/exit.png");
  cDes = loadImage("images/chickenDes.png");
  cPri = loadImage("images/chickenPrice.png");
  cowDes = loadImage("images/cowDes.png");
  ground = loadImage("images/ground.png");
  shopList = loadImage("images/shopList.png");
  cauliSeed = loadImage("images/cauli.png");
  potatoSeed = loadImage("images/potato.png");
  beanSeed = loadImage("images/bean.png");
  parsnipSeed = loadImage('images/parsnip.png');
  pierreMap = loadImage("images/pierreMap.png");
  pierreHitMap = loadImage("images/pierreHitMap.png");
  for(let i =1; i < 7; i++){
    cauliflowerStage[i-1] = loadImage("images/Cauliflower_Stage_"+i+".png");
  }
  for(let i =1; i < 7; i++){
    potatoStage[i-1] = loadImage("images/Potato_Stage_"+i+".png");
  }
  for(let i =1; i < 7; i++){
    parsnipStage[i-1] = loadImage("images/Parsnip_Stage_"+i+".png");
  }
  for(let i =1; i < 7; i++){
    beanStage[i-1] = loadImage("images/Bean_Stage_"+i+".png");
  }
  chickImg = loadImage("images/chick.png");
  chickImg1 = loadImage("images/chick1.png");
  cowImg = loadImage("images/cowImg.png");
  cowImg1 = loadImage('images/cowImg1.png');
  bin = loadImage("images/bin.png");
  binOpen = loadImage("images/binOpen.png");
  loveImg = loadImage("images/loveImg.png");
  eggImg = loadImage("images/largeEgg.png");
  milkImg = loadImage("images/Milk.png");
  moneyBoard = loadImage("images/moneyBoard.png");
  //beachfarm = loadImage('images/farmMap.png');
}
function setup(){
  let cnv = createCanvas(960,540);
  cnv.parent('#canvas_container');

  cnv.style("display","block");
  cnv.style("margin","auto");
  bgSound.setVolume(0.2);
  bgSound.loop();
   myRec = new p5.SpeechRec();
  myRec.continuous = true;
  myRec.interimResults = true;
  myRec.onResult = parseResult;
  //bgSound.loop();
  // myRec.onResult = animalShop;
  //myRec.onResult = buy;
  myRec.start();
  noCursor();
  colorMode(HSB, 360,100,100,100);
  //eSlider
  eSlider = createSlider(0,255,100);
  eSlider.position(width/2+300,height/2+190);
  eSlider.size(70,3);
  //hSlider
  hrSlider = createSlider(0,255,100);
  hrSlider.position(width/2+300,height/2+230);
  hrSlider.size(70,3);
  //pSlider
  pSlider = createSlider(0,255,100);
  pSlider.position(width/2+300,height/2 +270);
  pSlider.size(70,3);
  //input text
  nameInput = createInput("","text");
  nameInput.position(width/2+250,height/2);
  nameInput.size(100,15);
  nameInput.style("background-color","#DDA059");
  nameInput.style('border-radius',"3px");
  nameInput.style("font-family","stardewText");
  farmInput = createInput("","text");
  farmInput.position(width/2+250,height/2+40);
  farmInput.size(100,15);
  farmInput.style("background-color","#DDA059");
  farmInput.style('border-radius',"3px");
  farmInput.style("font-family","stardewText");
  favouriteInput = createInput("","text");
  favouriteInput.position(width/2+250,height/2+80);
  favouriteInput.size(100,15)
  favouriteInput.style("background-color","#DDA059");
  favouriteInput.style('border-radius',"3px");
  favouriteInput.style("font-family","stardewText");

  for(let i = 0; i < 10; i ++){
    farmLand[i] = new Array(5);
    for(let k = 0; k < farmLand[i].length; k++){
      farmLand[i][k] = 0;
    }
  }

  invent.push(pail);
  invent.push(hoe);
  invent.push(waterCan);
  invent.push(pickaxe);
  invent.push(scythe);

  pfront.push(pFront0);
  pfront.push(pFront1);
  pfront.push(pFront2);
  pright.push(pRight0);
  pright.push(pRight1);
  pright.push(pRight2);
  pleft.push(pLeft0);
  pleft.push(pLeft1);
  pleft.push(pLeft2);
  pback.push(pBack0);
  pback.push(pBack1);
  pback.push(pBack2);


  inventoryDisplay = new Inventories();
  newcarpet = new Carpet(530,380,1);
  newchair = new Chair(430,200,1);
  newtv = new Television(345,220,1);
  newtable = new Tabled(475,210,1);

  decoration.push(new Array(chairs));
  decoration.push(new Array(carpets));
  decoration.push(new Array(tvs));
  pCurrent = pFront0;
  players = new Player();
  theWorld = new FarmMap();
  theRanch = new MarnieRanchMap();
  thePlayer = new Player1(theWorld);
  thePlayerInShop = new Player2(theRanch);
  thePlayerInP = new Player3();

}
function draw(){
  //bgSound.play();
  console.log(stage);
  background(220);
  imageMode(CENTER);
  if(stage == 0){
    startPage();
    pstage = 0;
  } else if (stage == 1){
    createCharacter();
    pstage = 1;
  } else if (stage == 2){
    introduction();
    pstage = 2;
  }else if (stage == 3){
    homeMap();
    pstage = 3;
  }else if (stage == 4){
    farm();
    pstage = 4;
  }else if (stage == 5){
    animalShop();
    pstage = 5
  }else if (stage == 6){
    shop();
    pstage = 6;
  }else if (stage == 7){
    instruction();
  }
  noTint();
  image(cursor1,mouseX,mouseY,30,30);
  // parseResult()
}
function changeToIns(){
  stage = 7;
}
//instruction pages
function instruction(){
  textAlign(LEFT);
  eSlider.style("display","none");
  hrSlider.style("display","none");
  pSlider.style("display","none");
  nameInput.style("display","none");
  farmInput.style("display",'none');
  favouriteInput.style("display","none");
  background(220);
  imageMode(CENTER);
  noTint();
  image(bg,width/2,height/2,960,540);
  image(envelops,width/2,height/2,envelop1.width/2,envelop1.height/2);
  fill(26,85,42);
  noStroke();
  textFont(font2);
  textSize(20);
  text("MOVEMENT",200,120);
  text("!!SPEAK DIRECTLY!!",200,310);
  text("CROP PRICES", 390,120);
  image(cauliflowerStage[5],400,150,cauliflowerStage[5].width/1.5,cauliflowerStage[5].height/1.5);
  text(" = 175",450,150);
  text("speed: 240",450,170);
  image(potatoStage[5],400,200,potatoStage[5].width/1.5,potatoStage[5].height/1.5);
  text(" = 80",450,200);
  text("speed: 120",450,220);
  image(beanStage[5],400,250,beanStage[5].width/1.5,beanStage[5].height/1.5);
  text(" = 40",450,250);
  text("speed: 200",450,270);
  image(parsnipStage[5],400,300,parsnipStage[5].width/1.5,parsnipStage[5].height/1.5);
  text(" = 35",450,300);
  text("speed: 80",450,320);
  text("ANIMAL PRODUCTS",390,360);
  image(eggImg,410,380,eggImg.width/1.5,eggImg.height/1.5);
  text(" = 95",450,380);
  image(milkImg,410,440,milkImg.width/1.5,milkImg.height/1.5);
  text(" = 125", 450,440);
  text("HOW TO PLANT?", 640,120);

  textSize(15);
  text("W: MOVE LEFT",200,150);
  text("D: MOVE RIGHT", 200, 180);
  text("S: MOVE DOWN", 200,210);
  text("A: MOVE LEFT", 200,240);
  text("INVENTORY: NUMBER KEYS",200,270);
  text("MORE CHICKENS,QUICKER EGGS", 380,410);
  text("USING PAIL TO GET MILK ", 420,460);
  text("STEP 1: USING HOE + CLICKING LAND", 600,150);
  image(hoe,700,180);
  text("STEP 2: USING WATER CAN + CLICKING LAND", 580,230);
  image(waterCan,700,260);
  text("STEP 3:CHOOSING SEEDS IN INVENTORY", 600,310);
  image(cauliSeed,630,340);
  image(potatoSeed,680,340);
  image(beanSeed,730,340);
  image(parsnipSeed,780,340);
  text("STEP 4: WAITING IT TO GROW", 600,390);
  text("STEP 5: SELLING WITH THE BIN",600,410);
  image(bin, 700,440,bin.width/2.5,bin.height/2.5);
  text("In Pierre's Shop,", 160,330);
  text("You can say",160,350);
  text("'Cauliflower', 'Potato', 'Parsnip', 'Bean'",160,370);
  text("To choose the seeds to buy!",160,390);
  text("Say Finish to Choose Close", 160,410);
  if(mouseX>750 && mouseX<850 && mouseY>450 && mouseY<550){
    hover_endIns = true;
    tint(240,20,100);
    image(backButton,800,500,backButton.width/4,backButton.height/4);
  }else{
    hover_endIns = false;
    noTint();
    image(backButton,800,500,backButton.width/4,backButton.height/4);
  }



}
//startPage function
function startPage(){
  eSlider.style("display","none");
  hrSlider.style("display","none");
  pSlider.style("display","none");
  nameInput.style("display","none");
  farmInput.style("display",'none');
  favouriteInput.style("display","none");
  background(220);
  imageMode(CENTER);
  noTint();
  image(bg,width/2,height/2,960,540);
  image(title,width/3,height/3);
  image(newButton,width/3*2+100,height/3,96,73);
  //check click newButton
  if(mouseX>width/3*2+50 && mouseX<width/3*2+150 && mouseY>height/3-50 && mouseY<height/3+50){
    tint(240,20,100);
    image(newButton,width/3*2+100,height/3,96,73);
    hover_new = true;
  }else{
    hover_new = false;
  }

}
//createCharacter function
function createCharacter(){
  hover_new = false;
  imageMode(CENTER);
  noTint();
  image(bg1,width/2,height/2,960,540);
  image(panel,width/2,height/2,484,486);
  eSlider.style("display","");
  hrSlider.style("display","");
  pSlider.style("display","");
  nameInput.style("display","");
  farmInput.style("display",'');
  favouriteInput.style("display","");

  //right side info
  fill(0,100,100);
  textAlign(LEFT);
  noStroke();
  textFont(font1);
  textSize(20);
  text("Name", width/2-50,height/2-180);
  text("Farm",width/2-50,height/2-150);
  text("Name",width/2-50,height/2-135);
  fill(26,85,42);
  text("Farm",width/2+150,height/2-142.5);
  fill(0,100,100);
  text("Favorite",width/2-50,height/2-105);
  text("Thing",width/2-50,height/2-90);
  fill(26,85,42);
  text("Animal",width/2-50,height/2-60);
  image(left,width/2+70,height/2-60,30,27.3);
  image(right,width/2+170,height/2-60,30,27.3);
  text("Preference",width/2-50,height/2-45);
  text("Eye Color",width/2-50,height/2-5);
  eyeHSB = eSlider.value();
  text(eyeHSB,width/2+150,height/2-5);
  text("Hair Color",width/2-50,height/2+35);
  hairR = hrSlider.value();
  text(hairR,width/2+150,height/2+35);
  text("Pants Color",width/2-50,height/2+75);
  pantHSB = pSlider.value();
  text(pantHSB, width/2 + 150,height/2+75);
  image(okButton,width/2+180,height/3*2+100,okButton.width/1.5,okButton.height/1.5);
  name = nameInput.value();
  farmName = farmInput.value();
  favourite = favouriteInput.value();
  image(backButton,width/2+400,height/3*2+150,backButton.width/5,backButton.height/5);
  //check click animals
  if(mouseX>width/2+50 && mouseX<width/2+90 && mouseY>height/2-70 && mouseY<height/2-50){
    hover_previousAnimal = true;
    tint(240,20,100);
    image(left,width/2+70,height/2-60,30,27.3);
  }else{
    hover_previousAnimal = false;
  }
  if(mouseX>width/2+150 && mouseX<width/2+190 && mouseY>height/2-70 && mouseY<height/2-50){
    hover_nextAnimal = true;
    tint(240,20,100);
    image(right,width/2+170,height/2-60,30,27.3);
  }else{
    hover_nextAnimal = false;
  }
  noTint();
  if(cat01 == true){
    image(cat1,width/2+120,height/2-60,42,32);
  }else if (cat02 == true){
    image(cat2,width/2+120,height/2-60,42,37);
  }else if(cat03==true){
    image(cat3,width/2+120,height/2-60,42,32);
  }else if (dog01 == true){
    image(dog1,width/2+120,height/2-60,48,42);
  }else if (dog02 == true){
    image(dog2,width/2+120,height/2-60,35,48);
  }else if (dog03 == true){
    image(dog3,width/2+120,height/2-60,48,41.5);
  }

  //left side info
  noTint();
  image(boy,width/2-150,height/2-60,30,30);
  image(girl,width/2-100,height/2-60,20.5,32.5);
  textAlign(CENTER);
  image(left,width/2-170,height/2-8,30,27.3);
  text("Skin",width/2-125,height/2-5);
  image(right,width/2-80,height/2-8,30,27.3);
  image(left,width/2-170,height/2+32,30,27.3);
  text("Hair",width/2-125,height/2+35);
  image(right,width/2-80,height/2+32,30,27.3);
  image(left,width/2-170,height/2+72,30,27.3);
  text("Shirt",width/2-125,height/2+75);
  image(right,width/2-80,height/2+72,30,27.3);
  image(left,width/2-170,height/2+112,30,27.3);
  text("Pants",width/2-125,height/2+115);
  image(right,width/2-80,height/2+112,30,27.3);
  image(left,width/2-170,height/2+152,30,27.3);
  text("Acc.",width/2-125,height/2+155);
  image(right,width/2-80,height/2+155,30,27.3);
  image(scheme,width/2-125,height/2-140,96.6,120.6);
  image(left,width/2-159,height/2-92,30,27.3);
  image(right,width/2-90,height/2-92,30,27.3);


  //check skin color
  if(mouseX>width/2-190 && mouseX<width/2-150 && mouseY>height/2-18 && mouseY<height/2+8){
    tint(240,20,100);
    image(left,width/2-170,height/2-8,30,27.3);
    hover_previousSkin = true;
  }else{
    hover_previousSkin = false;
  }
  if(mouseX>width/2-100 && mouseX<width/2-60 && mouseY>height/2-18 && mouseY<height/2+8){
    tint(240,20,100);
    image(right,width/2-80,height/2-8,30,27.3);
    hover_nextSkin = true;
  }else{
    hover_nextSkin = false;
  }
  if(skin1==true){
    text("1",width/2-125,height/2+10);
    noTint();
    image(skin,width/2-125,height/2-147,skin.width/3.2,skin.height/3.2);
  }else if(skin2 == true){
    tint(221, 160, 89,200);
    image(skin,width/2-125,height/2-147,skin.width/3.2,skin.height/3.2);
    text("2",width/2-125,height/2+10);
  }else if(skin3==true){
    tint(107, 55, 16,200);
    image(skin,width/2-125,height/2-147,skin.width/3.2,skin.height/3.2);
    text("3",width/2-125,height/2+10);
  }

  //check hair
  if(mouseX>width/2-190 && mouseX<width/2-150 && mouseY>height/2+22 && mouseY<height/2+42){
    tint(240,20,100);
    image(left,width/2-170,height/2+32,30,27.3);
    hover_previousHair = true;
  }else{
    hover_previousHair = false;
  }
  if(mouseX>width/2-100 && mouseX<width/2-60 && mouseY>height/2+22 && mouseY<height/2+42){
    tint(240,20,100);;
    image(right,width/2-80,height/2+32,30,27.3);
    hover_nextHair = true;
  }else{
    hover_nextHair = false;
  }
  if(hair01==true){
    tint(hairR,255,255);
    image(hair1,width/2-128,height/2-162,hair1.width/4.5,hair1.height/4.5);
    text("1",width/2-125,height/2+50);
  }else if(hair02 == true){
    tint(hairR,255,255);
    image(hair2,width/2-128,height/2-155,hair2.width/4.5,hair2.height/4.5);
    text("2",width/2-125,height/2+50);
  }else if(hair03==true){
    tint(hairR,255,255);
    image(hair3,width/2-125,height/2-157,hair3.width/4.2,hair3.height/4.2);
    text("3",width/2-125,height/2+50);
  }

  //check pants
  if(mouseX>width/2-190 && mouseX<width/2-150 && mouseY>height/2+102 && mouseY<height/2+122){
    tint(240,20,100);
    image(left,width/2-170,height/2+112,30,27.3);
    hover_previousPant= true;
  }else{
    hover_previousPant= false;
  }
  if(mouseX>width/2-100 && mouseX<width/2-60 && mouseY>height/2+102 && mouseY<height/2+122){
    tint(240,20,100);
    image(right,width/2-80,height/2+112,30,27.3);
    hover_nextPant = true;
  }else{
    hover_nextPant = false;
  }
  if(pant01==true){
    tint(pantHSB,255,255);
    image(pant1,width/2-125,height/2-120,pant1.width/1.8,pant1.height/1.8);
    text("1",width/2-125,height/2+130);
  }else if(pant02 == true){
    tint(pantHSB,255,255);
    image(pant2,width/2-130,height/2-120,pant2.width/1.7,pant2.height/1.7);
    text("2",width/2-125,height/2+130);
  }else if(pant03==true){
    tint(pantHSB,255,255);
    image(pant3,width/2-125,height/2-120,pant3.width/1.9,pant3.height/1.9);
    text("3",width/2-125,height/2+130);
  }

  //check shirt
  if(mouseX>width/2-190 && mouseX<width/2-150 && mouseY>height/2+62 && mouseY<height/2+82){
    tint(240,20,100);
    image(left,width/2-170,height/2+72,30,27.3);
    hover_previousShirt = true;
  }else{
    hover_previousShirt = false;
  }
  if(mouseX>width/2-100 && mouseX<width/2-60 && mouseY>height/2+62 && mouseY<height/2+82){
    tint(240,20,100);
    image(right,width/2-80,height/2+72,30,27.3);
    hover_nextShirt = true;
  }else{
    hover_nextShirt = false;
  }
  if(shirt01==true){
    noTint();
    image(shirt1,width/2-125,height/2-139,shirt1.width/3.4,shirt1.height/3.4);
    text("1",width/2-125,height/2+90);
  }else if(shirt02 == true){
    noTint();
    image(shirt2,width/2-125,height/2-135,shirt2.width/1.7,shirt2.height/1.7);
    text("2",width/2-125,height/2+90);
  }else if(shirt03==true){
    noTint();
    image(shirt3,width/2-125,height/2-135,shirt3.width*1.2,shirt3.height*1.2);
    text("3",width/2-125,height/2+90);
  }

  //check sexuality
  if(mouseX>width/2-200 && mouseX<width/2-100 && mouseY>height/2-100 && mouseY<height/2-10){
    noFill();
    rectMode(CENTER);
    stroke(0,100,100);
    strokeWeight(3);
    rect(width/2-150, height/2-60,35,35,5);
    hover_boy = true;
  }else{
    hover_boy = false;
  }
  if(choseBoy == true){
    noFill();
    stroke(0,100,100);
    strokeWeight(3);
    rect(width/2-150, height/2-60,35,35,5);
  }

  //draw eyes
  tint(eyeHSB,255,255);
  image(eyes,width/2-125,height/2-151,eyes.width*1.1,eyes.height*1.2);

  //check if it is okay to move to next stage
  if(mouseX>width/2+130 && mouseX<width/2+230 && mouseY>height/3*2+50 && mouseY<height/3*2+150){
    tint(240,20,100);
    image(okButton,width/2+180,height/3*2+100,okButton.width/1.5,okButton.height/1.5);
    hover_ok = true;
  }else {
    hover_ok = false;
  }
  //check if go backButton
  if(mouseX>width/2+350 && mouseX<width/2+450 && mouseY>height/3*2+100 && mouseY<height/3*2+200){
    tint(240,20,100);
    image(backButton,width/2+400,height/3*2+150,backButton.width/5,backButton.height/5);
    hover_back = true;
  }else{
    hover_back = false;
  }

}
function introduction(){
  hover_new = false;
  hover_ok = false;
  eSlider.style("display","none");
  hrSlider.style("display","none");
  pSlider.style("display","none");
  nameInput.style("display","none");
  farmInput.style("display",'none');
  favouriteInput.style("display","none");
  background(0,0,0);
  if(page == 0){
    image(envelops,width/2,height/2,envelop1.width/2,envelop1.height/2);
    textFont(font2);
    fill(19,59,53);
    textSize(35);
    textStyle(BOLD);
    noStroke();
    textAlign(LEFT);
    text("Dear "+name+",",width/2-320,height/3-72);
    text("If you're reading this, you must be in dire need of", width/2-320,height/3-20);
    text("a change.",width/2-320,height/3+15);
    text("The same thing happened to me, long ago. I'd lost", width/2-320,height/3+65);
    text("sight of what mattered most in life... real", width/2-320,height/3+100);
    text("connections with oterh people and nature. So I", width/2-320,height/3+135);
    text("dropped everything and moved to the place I truely",width/2-320,height/3+170);
    text("belong.",width/2-320,height/3+205);
    image(right, width/2+300,height/3*2+60,right.width/3,right.height/3);
  } else if (page == 1){
    image(envelops,width/2,height/2,envelop1.width/2,envelop1.height/2);
    textFont(font2);
    fill(19,59,53);
    textSize(35);
    textStyle(BOLD);
    noStroke();
    textAlign(LEFT);
    text("I've enclosed the deed to that place... my pride and",width/2-320,height/3-72);
    text("joy: " + farmName + " Farm. It's located in Stardew Valley, on",width/2-320,height/3-37);
    text("the southern coast. It's the perfect place to start",width/2-320,height/3-2);
    text("your new life.",width/2-320,height/3+33);
    text("This was my most precious gift of all, and now it's", width/2-320,height/3+88);
    text("yours. I know you'll honor the family name, my boy.",width/2-320,height/3+123);
    text("Good luck.",width/2-320,height/3+158);
    text("Love, Grandpa",width/2-320,height/3+208);
    image(left,width/2-300,height/3*2+60,left.width/3,right.height/3);
    image(right, width/2+300,height/3*2+60,right.width/3,right.height/3);
  }else if (page == 2){
    image(envelops,width/2,height/2,envelop1.width/2,envelop1.height/2);
    textFont(font2);
    fill(19,59,53);
    textSize(35);
    textStyle(BOLD);
    noStroke();
    textAlign(LEFT);
    text("P.S. If Lewis is still alive say hi to the old guy for", width/2-320,height/3-72);
    text("me, will ya?",width/2-320,height/3-37);
    image(left,width/2-300,height/3*2+60,left.width/3,right.height/3);
    image(closeButton,width/2+360,height/3-100,closeButton.width/2,closeButton.height/2);
  }


  //check if click next
  if(mouseX>width/2+250 && mouseX<width/2+350 && mouseY>height/3*2+10 && mouseY<height/3*2+110){
    tint(240,20,100);
    image(right, width/2+300,height/3*2+60,right.width/3,right.height/3);
    hover_nextPage = true;
  }else {
    hover_nextPage = false
  }
  //check if click back
  if(mouseX>width/2-350 && mouseX<width/2-250 && mouseY>height/3*2+10 && mouseY<height/3*2+110){
    tint(240,20,100);
    image(left,width/2-300,height/3*2+60,left.width/3,right.height/3);
    hover_previousPage = true;
  }else{
    hover_previousPage = false;
  }
  //check if click closeButton
  if(mouseX>width/2+310 && mouseX,width/2+410 && mouseY>height/3-150 && mouseY<height/3-50){
    tint(240,20,100);
    image(closeButton,width/2+360,height/3-100,closeButton.width/2,closeButton.height/2);
    hover_close = true;
  }else{
    hover_close = false;
  }


}
//game PAGE
function homeMap(){
  hover_close = false;
  hover_ok =false;
  hover_new = false;

  eSlider.style("display","none");
  hrSlider.style("display","none");
  pSlider.style("display","none");
  nameInput.style("display","none");
  farmInput.style("display",'none');
  favouriteInput.style("display","none");
  background(0);
  imageMode(CENTER);
  rectMode(CORNER);
  noTint();
  image(home,width/2,height/2);
  carpets.push(newcarpet);
  for(let k = 0; k < carpets.length; k++){
    if(carpetMove == true){
      carpets[k].move();
    }else if (carpetMove == false){
      carpets[k].update();
    }
    carpets[k].display();
  }
  tvs.push(newtv);
  for(let j = 0; j < tvs.length; j++){
    if(tvMove == true){
      tvs[j].move();
    }else if (tvMove == false){
      tvs[j].update();
    }
    tvs[j].display();
  }
  tables.push(newtable);
  for(let t = 0; t < tables.length; t++){
    if(tableMove == true){
      tables[t].move();
    }else if (tableMove == false){
      tables[t].update();
    }
    tables[t].display();
  }
  chairs.push(newchair);
  for(let i = 0 ; i <chairs.length;i++){
    if(chairMove == true){
      chairs[i].move();
    }else if(chairMove == false){
      chairs[i].update();
    }
    chairs[i].display();
    //console.log(chairs[i].x);
  }
  //draw player
  players.move();
  players.display();
  //draw inventory
  inventoryDisplay.display();
  inventoryDisplay.checkTool();
  inventoryDisplay.checkNB();
  //console.log(invent.length);


}

function farm(){
  hover_close = false;
  hover_ok =false;
  hover_new = false;
  eSlider.style("display","none");
  hrSlider.style("display","none");
  pSlider.style("display","none");
  nameInput.style("display","none");
  farmInput.style("display",'none');
  favouriteInput.style("display","none");
  theWorld.displayWorld();
  theWorld.displayBin();
  // theWorld.displayFarm();
  // theWorld.hoeLand();
  thePlayer.move();
  //bgSound.play();
  if(mouseIsPressed == true){
    theWorld.changeLand();
    // let c = new Cows(random(1000,1380),random(-50,-300));
    // cowArr.push(c);
  }
  if(chickArr.length>0){
    theWorld.laying();
  }
  //console.log(eggArr);
  //console.log(cropArr);
  console.log(theWorld.offsetX,theWorld.offsetY);

  theWorld.addAndDisplayLand();

  //console.log(theWorld.offsetX,theWorld.offsetY);
  theWorld.chickenMove();
  theWorld.eggDisplay();
  thePlayer.display();
  //theWorld.changeLand();
  inventoryDisplay.display();
  inventoryDisplay.checkTool();
  inventoryDisplay.checkNB();
  if(theWorld.offsetY<-1030 && theWorld.offsetX < -580 && theWorld.offsetX > -720 && pCurrent == pFront0){
    stage = 5;
    theRanch.offsetX = 0;
    theRanch.offsetY = 0;
  }
  //console.log(theWorld.offsetY);
  if(theWorld.offsetY > 905 && theWorld.offsetY<965 && theWorld.offsetX< -560 && pCurrent == pRight0){
    stage = 6;
    thePlayerInP.x = 200;
    thePlayerInP.y = 450;
  }
  if(theWorld.offsetX>-235 && theWorld.offsetX<-205 && theWorld.offsetY > 980 && pCurrent == pBack0){
    stage = 3;
  }
  console.log(theWorld.offsetX,theWorld.offsetY);
  image(moneyBoard,width-moneyBoard.width/2/1.2,30,moneyBoard.width/1.2,moneyBoard.height/1.2);
  textAlign(RIGHT);
  textSize(35);
  stroke(0,82,71);
  strokeWeight(2);
  fill(0,82,71);
  textFont(font1);
  text(money,width-25,35);
  //925,950 - 790
  //450 970

}
function animalShop(){
  background(0);
  hover_ok =false;
  hover_new = false;
  hover_close = false;
  eSlider.style("display","none");
  hrSlider.style("display","none");
  pSlider.style("display","none");
  nameInput.style("display","none");
  farmInput.style("display",'none');
  favouriteInput.style("display","none");
  theRanch.displayWorld();
  thePlayerInShop.move();
  thePlayerInShop.display();
  inventoryDisplay.display();
  inventoryDisplay.checkTool();
  if(theRanch.offsetX > 0 && theRanch.offsetX < 40 && theRanch.offsetY < -20){
    stage = 4;
    theWorld.offsetX = -640;
    theWorld.offsetY = -1030;
    //heWorld.offsetX -835
  }
  //console.log(theRanch.offsetY);
  //console.log(theRanch.offsetY);
  if(theRanch.offsetX < 70 && theRanch.offsetX>35 && theRanch.offsetY>25 && theRanch.offsetY < 60){
    if(mouseX>450 && mouseX<500 && mouseY>350 && mouseY<450){
      hover_Marnie = true;
    }else{
      hover_Marnie = false;
    }
  }
  if(purchaseStage ==1){
    image(box,width/2+50,height-100);
    textFont(font2);
    fill(19,59,53);
    textSize(35);
    textStyle(BOLD);
    textAlign(LEFT);
    if(mouseY>390 && mouseY < 420 || myRec.resultString == "supplies"){
      hover_supply = true;
      fill(19,59,27);
      noStroke();
      text("Supplies Shop",100,height-120);
      fill(19,59,53);
      text("Purchase Animals",100,height-80);
      text("Leave",100,height-40);
      noFill();
      stroke(356,93,84);
      rect(100,height-150,width-200,50);
    }else{
      hover_supply = false;
      noStroke();
      text("Supplies Shop",100,height-120);
    }
    if(mouseY>420 && mouseY<450 || myRec.resultString == "purchase"){
      hover_purchase = true;
      fill(19,59,27);
      noStroke();
      text("Purchase Animals",100,height-80);
      fill(19,59,53);
      text("Supplies Shop",100,height-120);
      text("Leave",100,height-40);
      noFill();
      stroke(356,93,84);
      rect(100,height-110,width-200,50);
    }else{
      hover_purchase = false;
      noStroke();
      text("Purchase Animals",100,height-80);
    }
    if(mouseY>450 && mouseY<490|| myRec.resultString == "leave"){
      hover_leave = true;
      fill(19,59,27);
      noStroke();
      text("Leave",100,height-40);
      fill(19,59,53);
      text("Supplies Shop",100,height-120);
      text("Purchase Animals",100,height-80);
      noFill();
      stroke(356,93,84);
      rect(100,height-70,width-200,50);
    }else{
      hover_leave = false;
      noStroke();
      text("Leave",100,height-40);
    }
  }
  console.log(myRec.resultString );
  if(purchaseStage == 3){
    image(livestock,width/2,height/2);
    if(mouseX>width/2-50 && mouseX<width/2+50 && mouseY>height/2+30 && mouseY<height/2+130){
      hover_cow=true;
      tint(240,20,100);
      image(cow,width/2,height/2+80);
      noTint();
      image(cowDes,width/2+50,height/2+130,cowDes.width/1.3,cowDes.height/1.3);
    }else{
      hover_cow = false;
      noTint();
      image(cow,width/2,height/2+80);
    }
    if(mouseX>width/2-50 && mouseX<width/2+50 && mouseY>height/2-50 && mouseY<height/2+50){
      hover_chicken = true;
      tint(240,20,100);
      image(chicken,width/2,height/2);
      noTint();
      image(cDes,width/2+50,height/2+50,cDes.width/1.3,cDes.height/1.3);
      image(cPri,width/2+70,height/2+200,cPri.width/1.3,cPri.height/1.3);
    }else{
      hover_chicken = false;
      noTint();
      image(chicken,width/2,height/2);
    }
    if(mouseX>width/2+150 && mouseX<width/2+250 && mouseY>height/2+50 && mouseY<height/2+150){
      hover_exit = true;
      tint(240,20,100);
      image(exit,width/2+200,height/2+100);
    }else{
      hover_exit = false;
      noTint();
      image(exit,width/2+200,height/2+100);
    }
  }

  image(moneyBoard,width-moneyBoard.width/2/1.2,30,moneyBoard.width/1.2,moneyBoard.height/1.2);
  textAlign(RIGHT);
  textSize(35);
  stroke(0,82,71);
  strokeWeight(2);
  fill(0,82,71);
  textFont(font1);
  text(money,width-25,35);
  //console.log(thePlayer.world);
}
function shop(){
  hover_new = false;
  hover_close = false;
  hover_ok =false;
  background(0);
  image(pierreHitMap,width/2,height/2,pierreMap.width/2,pierreMap.height/2);
  image(pierreMap,width/2,height/2,pierreMap.width/2,pierreMap.height/2);
  eSlider.style("display","none");
  hrSlider.style("display","none");
  pSlider.style("display","none");
  nameInput.style("display","none");
  farmInput.style("display",'none');
  favouriteInput.style("display","none");
  thePlayerInP.move();
  thePlayerInP.display();
  inventoryDisplay.display();
  inventoryDisplay.checkTool();
  inventoryDisplay.checkNB();
  // let t = myRec.resultString;


  //60-100 240-280

  if(thePlayerInP.x>100 && thePlayerInP.x<145 && thePlayerInP.y>165 && thePlayerInP.y <200){
    //console.log(mouseY);
    //200-240 380-430
    if(mouseX>120 && mouseX<160 && mouseY>120 && mouseY<160){
      hover_pierre = true;
    }else{
      hover_pierre = false;
    }
  }
  if(thePlayerInP.y>450 && thePlayerInP.x>180 && thePlayerInP.x<210){
    stage = 4;
    theWorld.offsetX = -525;
    theWorld.offsetY = 955;
  }
  if(purchaseStage == 1){
    imageMode(CENTER);
    image(shopList,width/2,height/2-70,shopList.width/4,shopList.height/4);
    //choose parsnip
    if(myRec.resultString == "parsnip"){
      hover_parsnip = true;
      noStroke();
      fill(38,100,29,50);
      rect(220,94,520,50);
    }else{
      hover_bean = false;
    }

    console.log(myRec.resultString);

    //choose bean
    if( myRec.resultString == "bean"){
      hover_bean = true;
      noStroke();
      fill(38,100,29,50);
      rect(220,145,520,50);
    }else{
      hover_bean = false;
    }
    //choose cauliflower
    if( myRec.resultString == "cauliflower"){
      hover_cauli = true;
      fill(38,100,29,50);
      rect(220,200,520,50);
    }else{
      hover_cauli = false;
    }
    //choose potato
    if(myRec.resultString == "potato"){
      hover_potato = true;

      noStroke();
      fill(38,100,29,50);
      rect(220,255,520,50);
    }else{
      hover_potato = false;

    }
    //closeButton
    if(myRec.resultString == "finish"){
      tint(240,20,100);
      hover_finish = true;
      image(closeButton,width/2+280,height/3-70,closeButton.width/2,closeButton.height/2);
    }else{
      image(closeButton,width/2+280,height/3-70,closeButton.width/2,closeButton.height/2);
      hover_finsh = false;
    }


  }
  image(moneyBoard,width-moneyBoard.width/2/1.2,30,moneyBoard.width/1.2,moneyBoard.height/1.2);
  textAlign(RIGHT);
  textSize(35);
  stroke(0,82,71);
  strokeWeight(2);
  fill(0,82,71);
  textFont(font1);
  text(money,width-25,35);
}
function sell(){
  //cauli --> 175, potato -->80 , bean-->40, parsnip --> 35
  if(in6 == true){
    if(invent[5] == cauliflowerStage[5]){
      money+=175;
      matureCauliNB --;
    }else if (invent[5] == potatoStage[5]){
      maturePotatoNB--;
      money += 80;
    }else if (invent[5] == eggImg){
      eggNB --;
      money += 95;
    }else if(invent[5] == milkImg){
      milkNB--;
      money += 125;
    }else if (invent[5] == parsnipStage[5]){
      matureParsnipNB --;
      money+= 35;
    }else if(invent[5] == beanStage[5]){
      matureBeanNB --;
      money += 40;
    }
  }else if (in7 == true){
    if(invent[6] == cauliflowerStage[5]){
      money+=175;
      matureCauliNB --;
    }else if (invent[6] == potatoStage[5]){
      maturePotatoNB--;
      money += 80;
    }else if (invent[6] == eggImg){
      eggNB --;
      money += 95;
    }else if(invent[6] == milkImg){
      milkNB--;
      money += 125;
    }else if (invent[6] == parsnipStage[5]){
      matureParsnipNB --;
      money+= 35;
    }else if(invent[6] == beanStage[5]){
      matureBeanNB --;
      money += 40;
    }
  }else if (in8 == true){
    if(invent[7] == cauliflowerStage[5]){
      money+=175;
      matureCauliNB --;
    }else if (invent[7] == potatoStage[5]){
      maturePotatoNB--;
      money += 80;
    }else if (invent[7] == eggImg){
      eggNB --;
      money += 95;
    }else if(invent[7] == milkImg){
      milkNB--;
      money += 125;
    }else if (invent[7] == parsnipStage[5]){
      matureParsnipNB --;
      money+= 35;
    }else if(invent[7] == beanStage[5]){
      matureBeanNB --;
      money += 40;
    }
  }else if (in9 == true){
    if(invent[8] == cauliflowerStage[5]){
      money+=175;
      matureCauliNB --;
    }else if (invent[8] == potatoStage[5]){
      maturePotatoNB--;
      money += 80;
    }else if (invent[8] == eggImg){
      eggNB --;
      money += 95;
    }else if(invent[8] == milkImg){
      milkNB--;
      money += 125;
    }else if (invent[8] == parsnipStage[5]){
      matureParsnipNB --;
      money+= 35;
    }else if(invent[8] == beanStage[5]){
      matureBeanNB --;
      money += 40;
    }
  }else if (in0== true){
    if(invent[9] == cauliflowerStage[5]){
      money+=175;
      matureCauliNB --;
    }else if (invent[9] == potatoStage[5]){
      maturePotatoNB--;
      money += 80;
    }else if (invent[9] == eggImg){
      eggNB --;
      money += 95;
    }else if(invent[9] == milkImg){
      milkNB--;
      money += 125;
    }else if (invent[9] == parsnipStage[5]){
      matureParsnipNB --;
      money+= 35;
    }else if(invent[9] == beanStage[5]){
      matureBeanNB --;
      money += 40;
    }
  }else if (inm == true){
    if(invent[10] == cauliflowerStage[5]){
      money+=175;
      matureCauliNB --;
    }else if (invent[10] == potatoStage[5]){
      maturePotatoNB--;
      money += 80;
    }else if (invent[10] == eggImg){
      eggNB --;
      money += 95;
    }else if(invent[10] == milkImg){
      milkNB--;
      money += 125;
    }else if (invent[10] == parsnipStage[5]){
      matureParsnipNB --;
      money+= 35;
    }else if(invent[10] == beanStage[5]){
      matureBeanNB --;
      money += 40;
    }
  }else if (ine == true){
    if(invent[11] == cauliflowerStage[5]){
      money+=175;
      matureCauliNB --;
    }else if (invent[11] == potatoStage[5]){
      maturePotatoNB--;
      money += 80;
    }else if (invent[11] == eggImg){
      eggNB --;
      money += 95;
    }else if(invent[11] == milkImg){
      milkNB--;
      money += 125;
    }else if (invent[11] == parsnipStage[5]){
      matureParsnipNB --;
      money+= 35;
    }else if(invent[11] == beanStage[5]){
      matureBeanNB --;
      money += 40;
    }
  }

}
class Chicks{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.ySpeed = random(-1,1);
    this.xSpeed = random(-1,1);
    this.hover = false;
    this.loved = false;
    this.next = 0;
  }
  display(){
    //console.log(chickArr);
    if(this.xSpeed < 0){
      chickCurrent = chickImg;
    }else if(this.xSpeed > 0){
      chickCurrent = chickImg1;
    }
    //console.log(this.x,this.y);
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.x > 1380 || this.x < 1000){
      this.xSpeed *=-1;
      if(chickCurrent == chickImg){
        chickCurrent = chickImg1;
      }else if(chickCurrent == chickImg1){
        chickCurrent = chickImg;
      }
    }
    if(this.y > -50 || this.y < -300){
      this.ySpeed *=-1;
    }

    image(chickCurrent,this.x,this.y,chickImg.width/1.5,chickImg.height/1.5);
    for (let j = 0; j < eggArr.length; j++){
      //console.log("A");
      eggArr[j].display();
    }
  }
  love(){
    if(mouseX>this.x+theWorld.offsetX-20 && mouseX<this.x+theWorld.offsetX+20 && mouseY>this.y+theWorld.offsetY-20 && mouseY<this.y+theWorld.offsetY+20 ){
      if(mouseIsPressed == true){
        image(loveImg, this.x, this.y-20, loveImg.width/5, loveImg.height/5);
        this.loved = true;
        chickenSound.play();
      }
    }
  }


}
class EggLay{
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  display(){
    image(eggImg,this.x,this.y,eggImg.width/2,eggImg.height/2);
  }
  picking(){
    if(mouseX>this.x+theWorld.offsetX-20 && mouseX<this.x+theWorld.offsetX+20 && mouseY>this.y+theWorld.offsetY-20 && mouseY<this.y+theWorld.offsetY+20 ){
      if(mouseIsPressed == true){
        for(let i = 0; i < eggArr.length; i++){
          if(eggArr[i] == this){
            eggArr.splice(i,1);
            if(eggNB<1 && invent.length<12){
              invent.push(eggImg);
            }
            eggNB++;

          }
        }
        pickSound.play();
      }
    }
  }
}
class Cows{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.ySpeed = random(-1,1);
    this.xSpeed = random(-1,1);

  }
  display(){
    //console.log(chickArr);
    if(this.xSpeed < 0){
      cowCurrent = cowImg1;
    }else if(this.xSpeed > 0){
      cowCurrent = cowImg;
    }
    //console.log(this.x,this.y);
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.x > 1380 || this.x < 1000){
      this.xSpeed *=-1;
      if(cowCurrent == cowImg){
        cowCurrent = cowImg1;
      }else if(cowCurrent == cowImg1){
        cowCurrent = cowImg;
      }
    }
    if(this.y > -50 || this.y < -300){
      this.ySpeed *=-1;
    }

    image(cowCurrent,this.x,this.y,cowImg.width/1.5,cowImg.height/1.5);
  }
  love(){
    if(mouseX>this.x+theWorld.offsetX-20 && mouseX<this.x+theWorld.offsetX+20 && mouseY>this.y+theWorld.offsetY-20 && mouseY<this.y+theWorld.offsetY+20 ){
      if(mouseIsPressed == true){
        image(loveImg, this.x, this.y-20, loveImg.width/5, loveImg.height/5);
        this.loved = true;
      }
    }
  }
  milking(){
    if(mouseX>this.x+theWorld.offsetX-20 && mouseX<this.x+theWorld.offsetX+20 && mouseY>this.y+theWorld.offsetY-20 && mouseY<this.y+theWorld.offsetY+20 ){
      if(getMilk == true && mouseIsPressed == true){
        if(milkNB < 1 && invent.length < 12){
          invent.push(milkImg);
        }
        milkNB++;
        cowSound.play();
      }
    }
  }

}
class Carpet{
  constructor(x,y,num){
    this.x =x;
    this.y =y;
    this.num = num;
    this.offsetX = 0;
    this.offsetY = 0;
  }
  display(){
    if(this.num == 1){
      if(mouseX>this.x-50 && mouseX<this.x+50 && mouseY>this.y-50 && mouseY<this.y+50){
        hover_carpet = true;
        tint(240,20,100);
        image(carpet1,this.x,this.y,carpet1.width/2.3,carpet1.height/2.3);
      }else {
        hover_carpet = false;
        noTint();
        image(carpet1,this.x,this.y,carpet1.width/2.3,carpet1.height/2.3);
      }
    }
  }
  move(){
      this.x = mouseX;
      this.y = mouseY;

  }
  update(){
    this.x = this.offsetX+this.x;
    this.y = this.offsetY+this.y;
  }
}
class Television{
  constructor(x,y,num){
    this.x =x;
    this.y =y;
    this.num = num;
    this.offsetX = 0;
    this.offsetY = 0;
  }
  display(){
    if(this.num == 1){
      if(mouseX>this.x-50 && mouseX<this.x+50 && mouseY>this.y-50 && mouseY<this.y+50){
        hover_tv = true;
        tint(240,20,100);
        image(tv,this.x,this.y,tv.width/2.3,tv.height/2.3);
      }else {
        hover_tv = false;
        noTint();
        image(tv,this.x,this.y,tv.width/2.3,tv.height/2.3);
      }
    }
  }
  move(){
      this.x = mouseX;
      this.y = mouseY;

  }
  update(){
    this.x = this.offsetX+this.x;
    this.y = this.offsetY+this.y;
  }
}
class Player{
  constructor(){
    this.x = 600;
    this.y = 380;
      this.leftWall = width/2-home.width/2+pCurrent.width/2;
      this.rightWall = width/2+home.width/2-pCurrent.width/2;
      this.upWall = height/2-home.height/2+pCurrent.height/2+50;
      this.downWall = height/2+home.height/2-pCurrent.height/2-10;
  }
  display(){
    let limX = constrain(this.x,this.leftWall,this.rightWall);
    let limY = constrain(this.y,this.upWall,this.downWall);
    image(pCurrent,limX,limY,pCurrent.width/1.5,pCurrent.height/1.5);
  }
  move(){
    console.log(this.x);
    if(keyIsDown(65)){
      pCurrent = pLeft0;
      this.x-=5;
    }else if (keyIsDown(87)){
      pCurrent = pBack0;
      this.y-=5;
    }else if(keyIsDown(68)){
      pCurrent = pRight0;
      this.x+=5;
    }else if (keyIsDown(83)){
      pCurrent = pFront0;
      this.y+=5;
      if(this.x>390 && this.x<410){
        stage = 4;
        theWorld.offsetX = - 225;
        theWorld.offsetY = 970;
      }
    }
  }
}
class Chair{
  constructor(x,y,num){
    this.x = x;
    this.y = y;
    this.num = num;
    this.offsetX = 0;
    this.offsetY = 0;
  }
  display(){
    if(this.num == 1){
      if(mouseX>this.x-20 && mouseX<this.x+20 && mouseY>this.y-50 && mouseY<this.y+50){
        hover_chair = true;
        tint(240,20,100);
        image(chair1,this.x,this.y,chair1.width/2.3,chair1.height/2.3);
      }else{
        hover_chair = false;
        noTint();
        image(chair1,this.x,this.y,chair1.width/2.3,chair1.height/2.3);
      }
    }
  }
  move(){
      this.x = mouseX;
      this.y = mouseY;
  }
  update(){
    this.x = this.offsetX+this.x;
    this.y = this.offsetY+this.y;
  }
}
class Tabled{
  constructor(x,y,num){
    this.x = x;
    this.y = y;
    this.num = num;
    this.offsetX = 0;
    this.offsetY = 0;
  }
  display(){
    if(this.num == 1){
      if(mouseX>this.x-50 && mouseX<this.x+50 && mouseY>this.y-50 && mouseY<this.y+50){
        hover_table = true;
        tint(240,20,100);
        image(table1,this.x,this.y,table1.width/2.3,table1.height/2.3);
      }else{
        hover_table = false;
        noTint();
        image(table1,this.x,this.y,table1.width/2.3,table1.height/2.3);
      }
    }
  }
  move(){
      this.x = mouseX;
      this.y = mouseY;
  }
  update(){
    this.x = this.offsetX+this.x;
    this.y = this.offsetY+this.y;
  }
}
class Inventories{
  constructor(){
    this.x = width/2;
    this.y = 50;

    this.width = inventory.width/2.2;
    this.height = inventory.height/2.2;
    this.size = 48;
  }
  display(){
    console.log(matureParsnipNB);
    noTint();
    imageMode(CENTER);
    image(inventory,this.x,this.y,inventory.width/2.2,inventory.height/2.2);
    for(let i = 0; i < invent.length; i ++){
      image(invent[i],170+i*56,inventoryDisplay.y,inventoryDisplay.size,inventoryDisplay.size);
    }
  }
  checkNB(){
    //console.log(potatoNB);
    if(parsnipNB>1){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == parsnipSeed){
          fill(0,0,100);
          stroke(0,0,0);
          textFont(font2);
          strokeWeight(2);
          textSize(18);
          text(parsnipNB,185+i*56,inventoryDisplay.y+25);
        }
      }
    }else if (parsnipNB<0){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == parsnipSeed){
          invent.splice(i,1);
        }
      }
    }
    if(cauliNB>1){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == cauliSeed){
          fill(0,0,100);
          stroke(0,0,0);
          textFont(font2);
          strokeWeight(2);
          textSize(18);
          text(cauliNB,185+i*56,inventoryDisplay.y+25);
        }
      }
    }else if (cauliNB==0){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == cauliSeed){
          invent.splice(i,1);
        }
      }
    }
    if(beanNB>1){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == beanSeed){
          fill(0,0,100);
          stroke(0,0,0);
          textFont(font2);
          strokeWeight(2);
          textSize(18);
          text(beanNB,185+i*56,inventoryDisplay.y+25);
        }
      }
    }else if (beanNB==0){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == beanSeed){
          invent.splice(i,1);
        }
      }
    }
    if(potatoNB>1){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == potatoSeed){
          fill(0,0,100);
          stroke(0,0,0);
          textFont(font2);
          strokeWeight(2);
          textSize(18);
          text(potatoNB,185+i*56,inventoryDisplay.y+25);
        }
      }
    }else if (potatoNB==0){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] ==potatoSeed){
          invent.splice(i,1);
        }
      }
    }
    if(eggNB>1){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == eggImg){
          fill(0,0,100);
          stroke(0,0,0);
          textFont(font2);
          strokeWeight(2);
          textSize(18);
          text(eggNB,185+i*56,inventoryDisplay.y+25);
        }
      }
    }else if (eggNB==0){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == eggImg){
          invent.splice(i,1);
        }
      }
    }
    if(milkNB>1){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == milkImg){
          fill(0,0,100);
          stroke(0,0,0);
          textFont(font2);
          strokeWeight(2);
          textSize(18);
          text(milkNB,185+i*56,inventoryDisplay.y+25);
        }
      }
    }else if (milkNB==0){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == milkImg){
          invent.splice(i,1);
        }
      }
    }
    if(matureCauliNB>1){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == cauliflowerStage[5]){
          fill(0,0,100);
          stroke(0,0,0);
          textFont(font2);
          strokeWeight(2);
          textSize(18);
          text(matureCauliNB,185+i*56,inventoryDisplay.y+25);
        }
      }
    }else if (matureCauliNB==0){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == cauliflowerStage[5]){
          invent.splice(i,1);
        }
      }
    }
    if(maturePotatoNB>1){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == potatoStage[5]){
          fill(0,0,100);
          stroke(0,0,0);
          textFont(font2);
          strokeWeight(2);
          textSize(18);
          text(maturePotatoNB,185+i*56,inventoryDisplay.y+25);
        }
      }
    }else if (maturePotatoNB==0){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == potatoStage[5]){
          invent.splice(i,1);
        }
      }
    }
    if(matureParsnipNB>1){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == parsnipStage[5]){
          fill(0,0,100);
          stroke(0,0,0);
          textFont(font2);
          strokeWeight(2);
          textSize(18);
          text(matureParsnipNB,185+i*56,inventoryDisplay.y+25);
        }
      }
    }else if (matureParsnipNB==0){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == parsnipStage[5]){
          invent.splice(i,1);
        }
      }
    }
    if(matureBeanNB>1){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == beanStage[5]){
          fill(0,0,100);
          stroke(0,0,0);
          textFont(font2);
          strokeWeight(2);
          textSize(18);
          text(matureBeanNB,185+i*56,inventoryDisplay.y+25);
        }
      }
    }else if (matureBeanNB<0){
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == beanStage[5]){
          invent.splice(i,1);
        }
      }
    }

  }
  checkTool(){
    //check inventory
    if(in1==true){
      noFill();
      stroke(0,97,81);
      strokeWeight(3);
      rect(width/2-335,this.y-30,55,55);
      if(invent[0] == pail){
        getMilk = true;
      }
    }else if (in2 == true){
      noFill();
      stroke(0,97,81);
      strokeWeight(3);
      rect(width/2-280,this.y-30,55,55);
      if(invent[1] == hoe){
        hoeYes = true;
        waterCanYes = false;
        cauliSeedYes = false;
      }else if (invent[1] == waterCan){
        waterCanYes = true;
        hoeYes = false;
        cauliSeedYes = false;
      }
    }else if (in3 == true){
      noFill();
      stroke(0,97,81);
      strokeWeight(3);
      rect(width/2-225,this.y-30,55,55);
      if(invent[2]==waterCan){
        waterCanYes = true;

      }else if (invent[2] == hoe){
        hoeYes = true;

      }
    }else if (in4 == true){
      noFill();
      stroke(0,97,81);
      strokeWeight(3);
      rect(width/2-170,this.y-30,55,55);
    }else if (in5 == true){
      noFill();
      stroke(0,97,81);
      strokeWeight(3);
      rect(width/2-115,this.y-30,55,55);

    }else if (in6 == true){
      noFill();
      stroke(0,97,81);
      strokeWeight(3);
      rect(width/2-60,this.y-30,55,55);
      //console.log(cauliSeedYes, potatoSeedYes);
      if(invent[5]==cauliSeed){
        potatoSeedYes= false;
        cauliSeedYes = true;
        parsnipSeedYes = false;
        beanSeedYes = false;
        waterCanYes = false;
      }else if(invent[5] == potatoSeed){
        cauliSeedYes = false;
        potatoSeedYes = true;
        parsnipSeedYes = false;
        beanSeedYes = false;
        waterCanYes = false;
      }else if(invent[5] == parsnipSeed){
        cauliSeedYes = false;
        potatoSeedYes = false;
        parsnipSeedYes = true;
        beanSeedYes = false;
        waterCanYes = false;
      }else if(invent[5] == beanSeed){
        cauliSeedYes = false;
        potatoSeedYes = false;
        parsnipSeedYes = false;
        beanSeedYes = true;
        waterCanYes = false;
      }
    }else if (in7 == true){
      noFill();
      stroke(0,97,81);
      strokeWeight(3);
      rect(width/2-5,this.y-30,55,55);
      if(invent[6]==cauliSeed){
        potatoSeedYes= false;
        cauliSeedYes = true;
        parsnipSeedYes = false;
        beanSeedYes = false;
        waterCanYes = false;
      }else if(invent[6] == potatoSeed){
        cauliSeedYes = false;
        potatoSeedYes = true;
        parsnipSeedYes = false;
        beanSeedYes = false;
        waterCanYes = false;
      }else if(invent[6] == parsnipSeed){
        cauliSeedYes = false;
        potatoSeedYes = false;
        parsnipSeedYes = true;
        beanSeedYes = false;
        waterCanYes = false;
      }else if(invent[6] == beanSeed){
        cauliSeedYes = false;
        potatoSeedYes = false;
        parsnipSeedYes = false;
        beanSeedYes = true;
        waterCanYes = false;
      }
    }else if (in8 == true){
      noFill();
      stroke(0,97,81);
      strokeWeight(3);
      rect(width/2+50,this.y-30,55,55);
      if(invent[7]==cauliSeed){
        potatoSeedYes= false;
        cauliSeedYes = true;
        parsnipSeedYes = false;
        beanSeedYes = false;
        waterCanYes = false;
      }else if(invent[7] == potatoSeed){
        cauliSeedYes = false;
        potatoSeedYes = true;
        parsnipSeedYes = false;
        beanSeedYes = false;
        waterCanYes = false;
      }else if(invent[7] == parsnipSeed){
        cauliSeedYes = false;
        potatoSeedYes = false;
        parsnipSeedYes = true;
        beanSeedYes = false;
        waterCanYes = false;
      }else if(invent[7] == beanSeed){
        cauliSeedYes = false;
        potatoSeedYes = false;
        parsnipSeedYes = false;
        beanSeedYes = true;
        waterCanYes = false;
      }
    }else if (in9 == true){
      noFill();
      stroke(0,97,81);
      strokeWeight(3);
      rect(width/2+105,this.y-30,55,55);
      if(invent[8]==cauliSeed){
        potatoSeedYes= false;
        cauliSeedYes = true;
        parsnipSeedYes = false;
        beanSeedYes = false;
        waterCanYes = false;
      }else if(invent[8] == potatoSeed){
        cauliSeedYes = false;
        potatoSeedYes = true;
        parsnipSeedYes = false;
        beanSeedYes = false;
        waterCanYes = false;
      }else if(invent[8] == parsnipSeed){
        cauliSeedYes = false;
        potatoSeedYes = false;
        parsnipSeedYes = true;
        beanSeedYes = false;
        waterCanYes = false;
      }else if(invent[8] == beanSeed){
        cauliSeedYes = false;
        potatoSeedYes = false;
        parsnipSeedYes = false;
        beanSeedYes = true;
        waterCanYes = false;
      }
    }else if (in0 == true){
      noFill();
      stroke(0,97,81);
      strokeWeight(3);
      rect(width/2+160,this.y-30,55,55);
    }else if(inm == true){
      noFill();
      stroke(0,97,81);
      strokeWeight(3);
      rect(width/2+215,this.y-30,55,55);
    }else if(ine == true){
      noFill();
      stroke(0,97,81);
      strokeWeight(3);
      rect(width/2+270,this.y-30,55,55);
    }
  }
}
class Player1{
  constructor(world){
      this.x = width/2;
      this.y =height/2;
      this.world = world;
    this.speed = 5;
    this.playerMove = false;
  }
  display(){
    imageMode(CORNER);
    image(pCurrent,this.x,this.y,pCurrent.width/2,pCurrent.height/2);
    //ellipse(this.x,this.y,10,10);
  }
  computeSensors() {
   this.middleX = this.x*(1760/960) + pCurrent.width/2;
   this.middleY = this.y*(1760/540) + pCurrent.height/2;
   this.left = this.x*(1760/960) - 2;
   this.right = this.x*(1760/960) + pCurrent.width + 2;
   this.up = this.y*(1760/540) - 2;
   this.down = this.y*(1760/540) + pCurrent.height + 2;
 }
  move(){
    this.computeSensors();
    //colorMode(RGB,255);
    //console.log(p);
    //console.log(this.world.hitMap.height);
    // let p = this.world.hitMap.get(this.x*this.world.hitMap.width/width+this.world.offsetX,this.y*this.world.hitMap.height/height+this.world.offsetY);
    // console.log(p);

      if(keyIsDown(83)){
        // let p = red(this.world.hitMap.get(this.middleX-this.world.offsetX,this.down-this.world.offsetY));
        // if(p != 0){
          if(this.world.offsetY >= -1035){
            this.world.moveUp(this.speed);
          }else if (this.world.offsetY < -1035){
            this.y += this.speed;
          }
        //}
         pCurrent = pFront0;
      }
      if(keyIsDown(87)){
        // let p = red(this.world.hitMap.get(this.middleX-this.world.offsetX,this.up-this.world.offsetY));
        //if(p !=0){
          if(this.world.offsetY <= 1035){
            this.world.moveDown(this.speed);
          }else if (this.world.offsetY > 1035){
            this.y -= this.speed;
          }
        //}

        pCurrent = pBack0;
      }
      if(keyIsDown(68)){
        // let p = red(this.world.hitMap.get(this.right-this.world.offsetX,this.middleY-this.world.offsetY));
        // if(p!= 0){
          if(this.world.offsetX>= -830){
            this.world.moveLeft(this.speed);
          }else if (this.world.offsetX < -830){
            this.x += this.speed;
          }
      //  }


        pCurrent = pRight0;
      }
      if(keyIsDown(65)){
        // let p = red(this.world.hitMap.get(this.left-this.world.offsetX,this.middleY-this.world.offsetY));
        // if(p != 0){
          if(this.world.offsetX <= 830){
            this.world.moveRight(this.speed);
          }else if (this.world.offsetX > 830){
            this.x -= this.speed;
          }
        //}

        pCurrent = pLeft0;
      }

  }
}
class Player2{
  constructor(world){
    // if(stage == 4){
      // this.x = 250;
      // this.y = 250;
      // this.world = world;
    // }else if (stage == 5){
      this.world = world;
      this.x = width/2-10;
      this.y = 450;
    // }
    this.speed = 5;
    this.playerMove = false;
  }
  display(){
    imageMode(CORNER);
    image(pCurrent,this.x,this.y,pCurrent.width/2,pCurrent.height/2);
  }
  move(){
    if(stage == 5){
      if(keyIsDown(65)){
        this.world.moveRight(this.speed);
        pCurrent = pLeft0;
      }
      if(keyIsDown(68)){
        this.world.moveLeft(this.speed);
        pCurrent = pRight0;
      }
      if(keyIsDown(83)){
          this.world.moveUp(this.speed);
         pCurrent = pFront0;
      }
      if(keyIsDown(87)){
          this.world.moveDown(this.speed);
        pCurrent = pBack0;
      }
    }

  }
}
class Player3{
  constructor(){
    this.x = 200;
    this.y = 450;
    this.speed = 5;
  }
  display(){
    imageMode(CORNER);
    image(pCurrent,this.x,this.y,pCurrent.width/2,pCurrent.height/2);
    //ellipse(this.x,this.y,5,5);
  }
  computeSensors() {
   this.middleX = this.x + pCurrent.width/2;
   this.middleY = this.y + pCurrent.height/2;
   this.left = this.x - 2;
   this.right = this.x + pCurrent.width + 2;
   this.up = this.y - 2;
   this.down = this.y + pCurrent.height + 2;
 }
  move(){
    this.computeSensors();
    let p = pierreHitMap.get(mouseX,mouseY);
    //console.log(p);
      if(keyIsDown(65)){
        // colorMode(RGB,255);
        // if (p == 255) {
           this.x -= this.speed;
        // }
        pCurrent = pLeft0;
      }
      if(keyIsDown(68)){
        this.x+=this.speed;
        pCurrent = pRight0;
      }
      if(keyIsDown(83)){
          this.y+=this.speed
         pCurrent = pFront0;
      }
      if(keyIsDown(87)){
          this.y-=this.speed
        pCurrent = pBack0;
      }
  }
}
class Crops{
  constructor(x,y,plant){
    this.x = x;
    this.y = y;
    this.plant = plant;
    this.growthRate = 0;
    this.canPick = false;
    if(this.plant == "potato"){
      this.speed = 120;
    }else if (this.plant == "cauli"){
      this.speed = 240;
    }else if (this.plant == "bean"){
      this.speed = 200;
    }else if (this.plant == "parsnip"){
      this.speed = 80;
    }

  }
  display(){
    if(this.plant == "cauli"){
      tint(240,20,100);
       image(ground,this.x,this.y,48,48);
       noTint();
       image(cauliflowerStage[this.growthRate],this.x,this.y,48,48);
       //console.log(growRate);
     }
     else if (this.plant == "potato"){
       tint(240,20,100);
        image(ground,this.x,this.y,48,48);
        noTint();
        image(potatoStage[this.growthRate],this.x,this.y,48,48);
     }
     else if (this.plant == "parsnip"){
       tint(240,20,100);
        image(ground,this.x,this.y,48,48);
        noTint();
        image(parsnipStage[this.growthRate],this.x,this.y,48,48);
     }
     else if (this.plant == "bean"){
       tint(240,20,100);
        image(ground,this.x,this.y,48,48);
        noTint();
        image(beanStage[this.growthRate],this.x,this.y,48,48);
     }

   }
   update(){
     if(frameCount%this.speed == 0){
       this.growthRate++;
     }
     if(this.growthRate>5){
       this.growthRate = 5;
       this.canPick = true;
     }
     console.log(this.canPick);
   }
   harvest(){
     if(this.canPick == true){

       if(mouseX>this.x+theWorld.offsetX && mouseX<this.x+theWorld.offsetX+48 && mouseY>this.y+theWorld.offsetY && mouseY<this.y+theWorld.offsetY+48 && mouseIsPressed == true){
         if(this.plant == "cauli"){
           if(matureCauliNB < 1){
             invent.push(cauliflowerStage[5]);
           }
           matureCauliNB++;
           for(let k = 0; k < cropArr.length;k++){
             if(cropArr[k] == this){
               cropArr.splice(k,1);
               let col= (this.x+240)/48;
               let row = (this.y-151)/48;
               farmLand[col][row] = 0;
             }
           }
         }else if (this.plant == "potato"){
           if(maturePotatoNB < 1){
             invent.push(potatoStage[5]);
           }
           maturePotatoNB ++;
           for(let k = 0; k < cropArr.length;k++){
             if(cropArr[k] == this){
               cropArr.splice(k,1);
               let col= (this.x+240)/48;
               let row = (this.y-151)/48;
               farmLand[col][row] = 0;
             }
           }
         }
         else if (this.plant == "parsnip"){
           if(matureParsnipNB < 1){
             invent.push(parsnipStage[5]);
           }
           matureParsnipNB ++;
           for(let k = 0; k < cropArr.length;k++){
             if(cropArr[k] == this){
               cropArr.splice(k,1);
               let col= (this.x+240)/48;
               let row = (this.y-151)/48;
               farmLand[col][row] = 0;
             }
           }
         }
         else if (this.plant == "bean"){
           if(matureBeanNB < 1){
             invent.push(beanStage[5]);
           }
           matureBeanNB ++;
           for(let k = 0; k < cropArr.length;k++){
             if(cropArr[k] == this){
               cropArr.splice(k,1);
               let col= (this.x+240)/48;
               let row = (this.y-151)/48;
               farmLand[col][row] = 0;
             }
           }
         }
         pickSound.play();
       }
     }
   }


}

class FarmMap{
  constructor(){
    this.offsetX = 0;
    this.offsetY = 0;
    this.tileMap = loadImage("images/map.png");
    this.hitMap = loadImage('images/levelHitMap.png');
  }

  displayWorld(){
    push();
    translate(this.offsetX,this.offsetY);
    image(this.hitMap,width/2,height/2,this.tileMap.width*1.5,this.tileMap.height*1.5);
    image(this.tileMap,width/2,height/2,this.tileMap.width*1.5,this.tileMap.height*1.5);
    pop();
    //console.log(this.offsetX);
    // console.log(this.hitMap.height);
  }

  addAndDisplayLand(){
    for(let col = 0 ; col < 10; col++){
      for(let row = 0 ; row < 5; row ++){

        push();
        translate(this.offsetX,this.offsetY);
        if(farmLand[col][row] ==0){
          noFill();
          stroke(39,87,77);
          strokeWeight(2);
          //stroke(0);
          //console.log(farmLand[col]);
          rect(col*48-240,row*48+151,48,48);
        }else if (farmLand[col][row] == 1){
          imageMode(CORNER);
          noTint();
          image(ground,col*48-240,row*48+151,48,48);
        }else if (farmLand[col][row] == 2){
          imageMode(CORNER);
          tint(240,20,100);
          image(ground,col*48-240,row*48+151,48,48);
        }else if (farmLand[col][row] == 3){

          imageMode(CORNER);
          for(let i = 0; i < cropArr.length; i++){
            cropArr[i].update();
            cropArr[i].display();
            cropArr[i].harvest();
          }
        }
        pop();

      }
    }
  }
  changeLand(){
    for(let col = 0; col < 10; col++){
      for(let row = 0; row < 5; row++){
        if(dist(thePlayer.x,thePlayer.y,col*48-240+this.offsetX,row*48+151+this.offsetY)<20){
          if(hoeYes == true && farmLand[col][row] == 0){
            waterCanYes = false;
            cauliSeedYes = false;
            farmLand[col][row] = 1;
          }
          else if(waterCanYes == true ){
            if(farmLand[col][row] ==1){
              hoeYes = false;
              hoeYes = false;
              farmLand[col][row]=2;
            }
          }else if(cauliSeedYes== true){
            //waterCanYes = false;
            hoeYes = false;
            if(farmLand[col][row] == 2){

              farmLand[col][row]=3;
              let crop = new Crops(col*48-240,row*48+151,"cauli");
              cropArr.push(crop);
              cauliNB--;
            }
          }else if(potatoSeedYes== true){
            //waterCanYes = false;
            hoeYes = false;
            if(farmLand[col][row] == 2){
              farmLand[col][row]=3;
              let crop = new Crops(col*48-240,row*48+151,"potato");
              cropArr.push(crop);
              potatoNB--;
            }
          }
          else if(parsnipSeedYes== true){
            //waterCanYes = false;
            hoeYes = false;
            if(farmLand[col][row] == 2){
              farmLand[col][row]=3;
              let crop = new Crops(col*48-240,row*48+151,"parsnip");
              cropArr.push(crop);
              parsnipNB--;
            }
          }
          else if(beanSeedYes== true){
            //waterCanYes = false;
            hoeYes = false;
            if(farmLand[col][row] == 2){
              farmLand[col][row]=3;
              let crop = new Crops(col*48-240,row*48+151,"bean");
              cropArr.push(crop);
              beanNB--;
            }
          }
        }
      }
    }

  }
  chickenMove(){

    push();
    translate(this.offsetX,this.offsetY);
    for(let i = 0; i < chickArr.length; i++){
      chickArr[i].display();
      chickArr[i].love();

    }


    for(let k = 0; k < cowArr.length; k++){
      cowArr[k].display();
      cowArr[k].love();
      cowArr[k].milking();
    }
    pop();
    // console.log(chickArr[0].x);
  }
  displayBin(){
    push();
    translate(this.offsetX,this.offsetY);
    if(this.offsetX>-405 && this.offsetX < -305 && this.offsetY>880 && this.offsetY < 930){
      hover_bin = true;
      image(binOpen,850,-650,bin.width/1.5,bin.height/1.5);
    }else{
      image(bin,850,-650,bin.width/1.5,bin.height/1.5);
      hover_bin = false;
    }

    //console.log(this.offsetX,this.offsetY);
    pop();
  }
  laying(){
    if(frameCount%eggSpeed==0){
      let eg = new EggLay(random(1000,1380),random(-50,-300));
      eggArr.push(eg);
    }

  }
  eggDisplay(){
    push();
    translate(this.offsetX,this.offsetY);
    for(let i = 0; i < eggArr.length;i++){
      eggArr[i].display();
      eggArr[i].picking();
    }
    pop();
  }


  moveRight(val) {
    this.offsetX += val;
  }
  moveLeft(val) {
    this.offsetX -= val;
  }
  moveUp(val) {
    this.offsetY -= val;
  }
  moveDown(val) {
      this.offsetY += val;
  }
}
class MarnieRanchMap{
  constructor(){
    this.offsetX = 0;
    this.offsetY = 0;
    this.tileMap = loadImage("images/marnieRanchMap.png");
  }

  displayWorld(){
    push();
    translate(this.offsetX,this.offsetY);
    image(this.tileMap,width/2,height/2);
    pop();
    //console.log(this.offsetX);
  }
  moveRight(val) {
    this.offsetX += val;
  }
  moveLeft(val) {
    this.offsetX -= val;
  }
  moveUp(val) {
    this.offsetY -= val;
  }
  moveDown(val) {
      this.offsetY += val;
  }
}
function parseResult() {
  console.log(myRec.resultString);
//		let mostrecentword = myRec.resultString.split(' ').pop();
}
//check click
function mouseClicked(){
  if(hover_new == true){
    stage = 1;
    selectSound.play();
  }
  if(hover_nextAnimal == true){
    if(cat01==true){
      cat02=true;
      cat01=false;
    }else if(cat02==true){
      cat02=false;
      cat03=true;
    }else if(cat03==true){
      dog01=true;
      cat03=false;
    }else if(dog01==true){
      dog02=true;
      dog01=false;
    }else if(dog02==true){
      dog03=true;
      dog02=false;
    }else if(dog03==true){
      cat01=true;
      dog03=false;
    }
      clickSound.play();
  }
  if(hover_previousAnimal == true){
    if(cat01==true){
      dog03=true;
      cat01=false;
    }else if(cat02==true){
      cat02=false;
      cat01=true;
    }else if(cat03==true){
      cat02=true;
      cat03=false;
    }else if(dog01==true){
      cat03=true;
      dog01=false;
    }else if(dog02==true){
      dog01=true;
      dog02=false;
    }else if(dog03==true){
      dog02=true;
      dog03=false;
    }
    clickSound.play();
  }
  if(hover_nextSkin == true){
    if(skin1== true){
      skin2=true;
      skin1=false;
    }else if(skin2==true){
      skin3=true;
      skin2=false;
    }else if(skin3==true){
      skin1=true;
      skin3=false;
    }
      clickSound.play();
  }
  if(hover_previousSkin == true){
    if(skin1== true){
      skin3=true;
      skin1=false;
    }else if(skin2==true){
      skin1=true;
      skin2=false;
    }else if(skin3==true){
      skin2=true;
      skin3=false;
    }
      clickSound.play();
  }
  if(hover_previousHair ==true){
    if(hair01 == true){
      hair03 = true;
      hair01=false;
    }else if (hair02==true){
      hair01 = true;
      hair02=false;
    }else if(hair03==true){
      hair02 = true;
      hair03=false;
    }
      clickSound.play();
  }
  if(hover_nextHair ==true){
    if(hair01 == true){
      hair02 = true;
      hair01=false;
    }else if (hair02==true){
      hair03 = true;
      hair02=false;
    }else if(hair03==true){
      hair01 = true;
      hair03=false;
    }
      clickSound.play();
  }
  if(hover_previousShirt ==true){
    if(shirt01 == true){
      shirt03 = true;
      shirt01=false;
    }else if (shirt02==true){
      shirt01 = true;
      shirt02=false;
    }else if(shirt03==true){
      shirt02 = true;
      shirt03=false;
    }
      clickSound.play();
  }
  if(hover_nextShirt ==true){
    if(shirt01 == true){
      shirt02 = true;
      shirt01=false;
    }else if (shirt02==true){
      shirt03 = true;
      shirt02=false;
    }else if(shirt03==true){
      shirt01 = true;
      shirt03=false;
    }
      clickSound.play();
  }
  if(hover_previousPant ==true){
    if(pant01 == true){
      pant03 = true;
      pant01=false;
    }else if (pant02==true){
      pant01 = true;
      pant02=false;
    }else if(pant03==true){
      pant02 = true;
      pant03=false;
    }
      clickSound.play();
  }
  if(hover_nextPant ==true){
    if(pant01 == true){
      pant02 = true;
      pant01=false;
    }else if (pant02==true){
      pant03 = true;
      pant02=false;
    }else if(pant03==true){
      pant01 = true;
      pant03=false;
    }
      clickSound.play();
  }
  if(hover_boy == true){
    choseBoy = true;
      clickSound.play();
  }
  if(hover_ok == true && name != "" && farmName != "" && favourite != "" && (choseBoy == true || choseGirl == true)){
    stage = 2;
    selectSound.play();
  }
  if(hover_back == true){
    stage = 0;
    hover_back = false;
    selectSound.play();
  }
  if(hover_nextPage == true){
    page ++;
      clickSound.play();
  }
  if(hover_previousPage == true){
    page--;
      clickSound.play();
  }
  if(hover_close == true){
    hover_close == false;
    stage = 3;
      clickSound.play();
  }
  if(hover_chair == true){
    if(chairMove == true){
      chairMove =false;
      for(let i = 0; i < invent.length;i++){
        if(invent[i] == chair1){
          invent.splice(i,1);
        }
      }
    }else if (chairMove == false && invent.length < 12){
      chairMove = true;
      invent.push(chair1);
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == chair1){
          if(i==0){
            in1 = true;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==1){
            in1 = false;
            in2 = true;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if(i==2){
            in1 = false;
            in2 = false;
            in3 = true;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==3){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = true;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==4){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = true;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==5){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = true;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==6){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = true;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==7){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = true;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==8){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = true;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==9){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = true;
            inm = false;
            ine = false;
          }else if (i==10){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = true;
            ine = false;
          }else if (i==11){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = true;
          }
        }
      }
    }
    hover_chair = false;
  }
  if(hover_table == true){
    if(tableMove == true){
      tableMove =false;
      for(let i = 0; i < invent.length;i++){
        if(invent[i] == table1){
          invent.splice(i,1);
        }
      }
    }else if (tableMove == false && invent.length < 12){
      tableMove = true;
      invent.push(table1);
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == table1){
          if(i==0){
            in1 = true;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==1){
            in1 = false;
            in2 = true;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if(i==2){
            in1 = false;
            in2 = false;
            in3 = true;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==3){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = true;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==4){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = true;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==5){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = true;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==6){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = true;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==7){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = true;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==8){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = true;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==9){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = true;
            inm = false;
            ine = false;
          }else if (i==10){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = true;
            ine = false;
          }else if (i==11){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = true;
          }
        }
      }
    }
    hover_table = false;
  }
  if(hover_carpet== true){
    if(carpetMove == true){
      carpetMove =false;
      for(let i = 0; i < invent.length;i++){
        if(invent[i] == carpet1){
          invent.splice(i,1);
        }
      }
    }else if (carpetMove == false && invent.length < 12){
      carpetMove = true;
      invent.push(carpet1);
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == carpet1){
          if(i==0){
            in1 = true;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==1){
            in1 = false;
            in2 = true;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if(i==2){
            in1 = false;
            in2 = false;
            in3 = true;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==3){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = true;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==4){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = true;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==5){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = true;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==6){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = true;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==7){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = true;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==8){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = true;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==9){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = true;
            inm = false;
            ine = false;
          }else if (i==10){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = true;
            ine = false;
          }else if (i==11){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = true;
          }
        }
      }
    }
    hover_carpet = false;
  }
  if(hover_tv== true){
    if(tvMove == true){
      tvMove =false;
      for(let i = 0; i < invent.length;i++){
        if(invent[i] == tv){
          invent.splice(i,1);
        }
      }
    }else if (tvMove == false && invent.length < 12){
      tvMove = true;
      invent.push(tv);
      for(let i = 0; i < invent.length; i ++){
        if(invent[i] == tv){
          if(i==0){
            in1 = true;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==1){
            in1 = false;
            in2 = true;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if(i==2){
            in1 = false;
            in2 = false;
            in3 = true;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==3){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = true;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==4){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = true;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==5){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = true;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==6){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = true;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==7){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = true;
            in9 = false;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==8){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = true;
            in0 = false;
            inm = false;
            ine = false;
          }else if (i==9){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = true;
            inm = false;
            ine = false;
          }else if (i==10){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = true;
            ine = false;
          }else if (i==11){
            in1 = false;
            in2 = false;
            in3 = false;
            in4 = false;
            in5 = false;
            in6 = false;
            in7 = false;
            in8 = false;
            in9 = false;
            in0 = false;
            inm = false;
            ine = true;
          }
        }
      }
    }
    hover_tv = false;
  }
  if(hover_Marnie == true){
    purchaseStage = 1;
    hoverMarnie = false;
  }
  if(hover_purchase == true){
    purchaseStage = 3;
    hover_purchase = false;
    selectSound.play();
  }
  if(hover_leave == true){
    purchaseStage = 0;
    hover_leave = false;
    selectSound.play();
  }
  if(hover_exit == true){
    purchaseStage = 1;
    hover_exit = false;
    selectSound.play();
  }
  if(hover_pierre == true){
    purchaseStage = 1;
    hover_pierre = false;
  }
  if(hover_cauli == true && money >= 80){
    if(cauliNB==0 && invent.length < 12){
      invent.push(cauliSeed);
    }
    cauliNB++;
    hover_cauli = false;
    money -= 80;
    purchaseSound.play();
  }
  if(hover_potato == true && money >= 50){
    if(potatoNB==0 && invent.length < 12){
      invent.push(potatoSeed);
    }
    potatoNB++;
    hover_potato = false;
    money -= 50;
    purchaseSound.play();
  }
  if(hover_parsnip == true && money >= 20){
    if(parsnipNB ==0 && invent.length < 12){
      invent.push(parsnipSeed);
    }
    parsnipNB++;
    hover_parsnip = false;
    money -= 20;
    purchaseSound.play();
  }
  if(hover_bean == true && money >= 60){
    if(beanNB==0 && invent.length < 12){
      invent.push(beanSeed);
    }
    beanNB++;
    hover_bean = false;
    money -=60;
    purchaseSound.play();
  }
  if(hover_finish == true){
    purchaseStage = 0;
    hover_finish = false;
    selectSound.play();
  }
  if(hover_chicken == true && money >= 800){
    let c = new Chicks(random(1000,1380),random(-50,-300));
    chickArr.push(c);
    money -= 800;
    eggSpeed -=10;
    if(eggSpeed < 120){
      eggSpeed = 120;
    }
    purchaseSound.play();
    hover_chicken = false;
  }
  if(hover_cow == true && money >= 1500){
    let cow = new Cows(random(1000,1380),random(-50,-300));
    cowArr.push(cow);
    money -= 1500;
    hover_cow = false;
    purchaseSound.play();
  }
  if(hover_bin == true){
    sell();
    purchaseSound.play();
  }
  if(hover_endIns == true){
    stage = pstage;
    hover_endIns = false;
    selectSound.play();
  }
  //theWorld.changeLand();
}
//check key press
function keyPressed(){
  //keys 1~0 && - && = associate with inventory
  if(keyCode == 49){
    in1 = true;
    in2 = false;
    in3 = false;
    in4 = false;
    in5 = false;
    in6 = false;
    in7 = false;
    in8 = false;
    in9 = false;
    in0 = false;
    inm = false;
    ine = false;
  }else if (keyCode == 50){
    in1 = false;
    in2 = true;
    in3 = false;
    in4 = false;
    in5 = false;
    in6 = false;
    in7 = false;
    in8 = false;
    in9 = false;
    in0 = false;
    inm = false;
    ine = false;
  }else if(keyCode == 51){
    in1 = false;
    in2 = false;
    in3 = true;
    in4 = false;
    in5 = false;
    in6 = false;
    in7 = false;
    in8 = false;
    in9 = false;
    in0 = false;
    inm = false;
    ine = false;
  }else if (keyCode == 52){
    in1 = false;
    in2 = false;
    in3 = false;
    in4 = true;
    in5 = false;
    in6 = false;
    in7 = false;
    in8 = false;
    in9 = false;
    in0 = false;
    inm = false;
    ine = false;
  }else if (keyCode == 53){
    in1 = false;
    in2 = false;
    in3 = false;
    in4 = false;
    in5 = true;
    in6 = false;
    in7 = false;
    in8 = false;
    in9 = false;
    in0 = false;
    inm = false;
    ine = false;
  }else if (keyCode == 54){
    in1 = false;
    in2 = false;
    in3 = false;
    in4 = false;
    in5 = false;
    in6 = true;
    in7 = false;
    in8 = false;
    in9 = false;
    in0 = false;
    inm = false;
    ine = false;
  }else if (keyCode == 55){
    in1 = false;
    in2 = false;
    in3 = false;
    in4 = false;
    in5 = false;
    in6 = false;
    in7 = true;
    in8 = false;
    in9 = false;
    in0 = false;
    inm = false;
    ine = false;
  }else if (keyCode == 56){
    in1 = false;
    in2 = false;
    in3 = false;
    in4 = false;
    in5 = false;
    in6 = false;
    in7 = false;
    in8 = true;
    in9 = false;
    in0 = false;
    inm = false;
    ine = false;
  }else if (keyCode == 57){
    in1 = false;
    in2 = false;
    in3 = false;
    in4 = false;
    in5 = false;
    in6 = false;
    in7 = false;
    in8 = false;
    in9 = true;
    in0 = false;
    inm = false;
    ine = false;
  }else if (keyCode == 48){
    in1 = false;
    in2 = false;
    in3 = false;
    in4 = false;
    in5 = false;
    in6 = false;
    in7 = false;
    in8 = false;
    in9 = false;
    in0 = true;
    inm = false;
    ine = false;
  }else if (keyCode == 189){
    in1 = false;
    in2 = false;
    in3 = false;
    in4 = false;
    in5 = false;
    in6 = false;
    in7 = false;
    in8 = false;
    in9 = false;
    in0 = false;
    inm = true;
    ine = false;
  }else if (keyCode == 187){
    in1 = false;
    in2 = false;
    in3 = false;
    in4 = false;
    in5 = false;
    in6 = false;
    in7 = false;
    in8 = false;
    in9 = false;
    in0 = false;
    inm = false;
    ine = true;
  }
}
