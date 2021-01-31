class Paper {
    constructor(x, y, r) {
      var options = {
          'isStatic':false,
          'density':1.2,
          'friction':0.5,
          'gravity':0.0
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x,this.y,this.r, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      strokeWeight(5)
      fill(0 ,255, 0);
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.r, this.r);
      pop();
    }
  };
  