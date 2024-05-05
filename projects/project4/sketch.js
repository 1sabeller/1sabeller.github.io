let world;
let sensor;

// mouse click control
let mouseCooldown = false;
let table;
let sofa;
let tree;
let wardrobe;
let bed;
let circles = [];
//objectOrient variables
let people = [];
let peopleX = [20,40,-20,-40];
let peopleZ = [20,40,-20,-40];
let stars = [];
let open = false;
let openSound;

function preload(){
  inventory = loadImage("images/inventory.png");
  openSound = loadSound("open.mp3");
}
function setup(){

  let canvasName = createCanvas(400,300).id();

 world = new World('VRScene');
 // disable WASD navigation
world.camera.cameraEl.removeAttribute('wasd-controls');

 // set a background color (RGB)
 world.setBackground(11,108,163,255);
 world.setFlying(false);
 // have the user floating above the world
 world.setUserPosition(-9.5,5,10);
 let sky = new Sky({
       asset: 'sky'
    });
    world.add(sky);
 //create floor
 let floor = new Plane({
   x: 0,
   y: 0,
   z: 0,
   width: 100,
   height: 100,
   rotationX: -90,
   asset: 'ground',
   repeatX: 100,
   repeatY: 100
 });
 world.add(floor);
 //set container for the house
 container = new Container3D({x:0, y:0.1, z:0});
 people
 world.add(container);
 let inside = new Plane({
   x:0,
   y:0,
   z:0,
   width:31,
   height:31,
   rotationX:-90,
   asset:'woodFloor',
   repeatX:32,
   repeatY:32
 })
 container.addChild(inside);
 for(let i = -15;i<17;i++){
   for(let j = 0;j<10;j++){
     var wall = new Box({
       x:-15,
       y:j,
       z:i,
       width:1,
       depth:1,
       height:1,
       red:238,green:238,blue:238
     });
     //wall.tag.object3D.userData.solid = true;
     container.addChild(wall);
   }
 }
 for(let i = -15;i<17;i++){
   if( i != -10 && i != -11 && i != -9 && i!=-8){
     for(let j = 0;j<10;j++){
       var wall = new Box({
         x:16,
         y:j,
         z:i,
         width:1,
         depth:1,
         height:1,
         red:238,green:238,blue:238,
       });
       //wall.tag.object3D.userData.solid = true;
       container.addChild(wall);
     }
   }

 }

 var door = new Box({
   x:16,y:4.5,z:-9.5,
   width:1,height:10,depth:4,
   asset:'door',
   clickFunction: function(theBox){
     if(open == false){
       theBox.setRotation(0,60,0);
       theBox.setZ(-11);
       theBox.setX(18);
       open = true;
       openSound.play();
     }else if(open == true){
       theBox.setZ(-9.5);
       theBox.setX(16);
       theBox.setRotation(0,0,0);
       open = false;
       openSound.play();
     }
   }
 });
 container.addChild(door);

 for(let i = -15;i<10;i++){
   for(let j = 0; j < 5; j++){
     var wall = new Box({
       x:i,
       y:j,
       z:16,
       opacity:0.1,
       rotationY:-90,
       width:1,
       depth:1,
       height:1,
       red:238,green:238,blue:238,
     });
    // wall.tag.object3D.userData.solid = true;
     container.addChild(wall);
   }
 }
 for(let i = 5;i<17;i++){
   for(let j = 0; j < 10; j++){
     var wall = new Box({
       x:i,
       y:j,
       z:16,
       rotationY:-90,
       width:1,
       depth:1,
       height:1,
       red:238,green:238,blue:238,
     });
    // wall.tag.object3D.userData.solid = true;
     container.addChild(wall);
   }
 }
 for(let i = -15;i<17;i++){
   for(let j = 0; j < 10; j++){
     var wall = new Box({
       x:i,
       y:j,
       z:-15,
       rotationY:-90,
       width:1,
       depth:1,
       height:1,
       red:238,green:238,blue:238
     });
     //wall.tag.object3D.userData.solid = true;
     container.addChild(wall);
   }
 }
 for(let i = -15; i < 17; i ++){
   for (let j = -15; j < 17; j ++){
     var wall = new Box({
       x:j,
       y:10,
       z:i,
       rotationX:-90,
       width:1,
       height:1,
       depth:1,
       red:238,green:238,blue:238
     });
     //wall.tag.object3D.userData.solid = true;
      container.addChild(wall);
   }
 }
 for(let i = -15; i < 1; i++){
   for(let j = 0; j <10; j++){
     var wall = new Box({
       x:i, y:j,z:0,width:1,height:1,depth:1,red:238,green:238,blue:238
     });
     //wall.tag.object3D.userData.solid = true;
     container.addChild(wall);
   }
 }
 for(let i = 0; i < 16; i ++){
   for (let j = 0; j < 10; j++){
     var wall = new Box({
       x:5,y:j,z:i,width:1,height:1,depth:1,red:238,green:238,blue:238,rotationY:-90
     });
     //wall.tag.object3D.userData.solid = true;
     container.addChild(wall);
   }
 }


  table = new GLTF({
  		asset: 'table',
  		x: 8,
  		y: 0,
  		z: 9.5,
      rotationY:-90,
     scaleX:0.1,
 		scaleY:0.1,
 		scaleZ:0.1,
  	});
    //table.tag.object3D.userData.solid = true;
	container.addChild(table);
  // breakfast = new GLTF({
  //     asset: 'breakfast',
  //     x: 8,
  //     y: 4,
  //     z: 9.5,
  //    scaleX:3,
  //   scaleY:3,
  //   scaleZ:3,
  //   });
  // container.addChild(breakfast);
 sofa = new GLTF({
   asset:'sofa', x:-6,y:1,z:-12.5,scaleX:5,scaleY:4,scaleZ:5
 });
 // sofa.tag.object3D.userData.solid = true;
 container.addChild(sofa);
 tree = new GLTF({
   asset:'tree',x:-12,y:1,z:-12.5,scaleX:3,scaleY:3,scaleZ:3
 });
 //tree.tag.object3D.userData.solid = true;
 container.addChild(tree);
wardrobe = new GLTF({
  asset:'wardrobe',x:-14.5,y:0,z:0.5,
  scaleX:0.03,scaleY:0.03,scaleZ:0.03,
  rotationY:-90
});
container.addChild(wardrobe);
bed = new GLTF({
  asset:'bed',x:-9.5,y:0,z:10,
  scaleX:0.04,scaleY:0.04,scaleZ:0.04,
  rotationY:180
});
container.addChild(bed);
let torus = new Torus({
      x:-5,
      y:9,
      z:10,
      rotationX:90,
      radius:4,
      red:245,
      green:245,
      blue:244
   });
  container.addChild(torus);
 //dynamic textures
 let tv = new Plane({
		x: -6, y: 3, z: -0.55,
		width: 10, height: 5,
		side: 'double',
    rotationY:180,
		asset: canvasName,
		dynamicTexture: true,
		dynamicTextureWidth: 400,
		dynamicTextureHeight: 300
	});
  //tv.tag.object3D.userData.solid = true;
	container.addChild(tv);
  for(let j = 0 ; j < 50; j++){
    let temp = new tvCircles();
    circles.push(temp);
  }
  //create people
  for(var k = 0; k <15; k ++){
    var temp = new Person(random(peopleX),0,random(peopleZ));
    people.push(temp);
  }
  //create stars
  for(var i = 0; i <30; i++){
    var temp = new Star(random(-50,50),random(20,50),random(-50,50));
    stars.push(temp);

  }
  //sensor = new Sensor();

}
function draw(){
  if (mouseIsPressed) {
		world.moveUserForward(0.05);
	}

  //container.spinY(1);
  //tv drawing
  background(68,68,65);
  for(let i = 0; i < circles.length; i ++){
    circles[i].display();
    circles[i].move();
    if(circles[i].x < 0){
      circles[i].x = 0;
      circles[i].xSpeed *=-1;
    }else if (circles[i].x > width){
      circles[i].x = width;
      circles[i].xSpeed *=-1;
    }
    if(circles[i].y < 0){
      circles[i].y = 0;
      circles[i].ySpeed *=-1;
    }else if (circles[i].y > height){
      circles[i].y = height;
      circles[i].ySpeed *=-1;
    }
  }
  fill(153,153,146);
  stroke(255);
  strokeWeight(5);
  textSize(40);
  textAlign(CENTER);
  text("WELCOME HOME",width/2,height/2);





  // draw all people
	for (var i = 0; i < people.length; i++) {
		people[i].move();
	}


}
class Star{
  constructor(x,y,z){
    this.s = new Octahedron({
      x:x,y:y,z:z,
      red: random(255), green:random(255), blue:random(255),
    });
    world.add(this.s);

  }

}
class Person{
  constructor(x,y,z){
    // construct a new Box that lives at this position
		this.head = new Sphere({
			x:x, y:y+4, z:z,
			red: random(255), green:random(255), blue:random(255),
			radius: random(0.5,1),
		});
    this.body = new Cylinder({
      x:x,y:y,z:z,
      asset:'clothes',
      width:random(1),height:random(5,8),depth:random(1),
    })
    world.add(this.head);
    world.add(this.body);
    // keep track of an offset in Perlin noise space
		this.xOffset = random(1000);
		this.zOffset = random(2000, 3000);

  }
  move(){
    var yMovement = 0;
    var xMovement = map( noise(this.xOffset), 0, 1, -0.05, 0.05);
		var zMovement = map( noise(this.zOffset), 0, 1, -0.05, 0.05);
    this.xOffset += 0.01;
		this.zOffset += 0.01;
    this.head.nudge(xMovement, yMovement, zMovement);
    this.body.nudge(xMovement, yMovement, zMovement);

  }
}
class tvCircles{
  constructor(){
    this.x = random(width);
    this.y = random(height);
    this.xSpeed = random(-2,2);
    this.ySpeed = random(-2,2);
  }
  display(){
    fill(238, 238, 227,200);
    noStroke();
    ellipse(this.x,this.y,20,20);
  }
  move(){
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
}
