class Box {
 constructor(x, y, width, height) {
 var options = {
 'isStatic':true,
//'restitution':0.8, was there from first
 'friction':1.0,
         'density':2.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
   display(){
    var pos =this.body.position;
     var angle = this.body.angle;
      push();
    translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(5)
      stroke(97, 247, 10)
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
   }
  };
