class Box1 {
  constructor(x, y){
    var options = {
      'restitution':0.8,
      'friction':1.0,
      'density':0.1
  }
  this.body = Bodies.rectangle(x,y,40,50,options);
  World.add(world, this.body);
  }
  display(){
    fill("lightblue")
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,40,50);
   
    
  }
};
