var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;


var divisionHeight = 300, divisions = [],plinkos = [],particle = []

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 790, 800, 10)
  for (var k = 0; k <= width; k = k + 80) {
    divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
  }
  for (var j = 75; j <= width; j = j + 50) {

    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,175));
  }

   for (var j = 75; j <=width; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,275));
  }

   for (var j = 50; j <=width-10; j=j+50) 
  {
  
     plinkos.push(new Plinko(j,375));
  }
}


function draw() {
  background(0);
  Engine.update(engine)
  ground.display()

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display()
  }
  for (var k = 0; k < plinkos.length; k++) {
    plinkos[k].display()
  }

  if(frameCount%60===0){
    particle.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }
  for (var k = 0; k < particle.length; k++) {
    particle[k].display()
  }
}