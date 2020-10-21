class Paper {
    constructor(x, y, radius) {
      var options = {
          'restitution':.8,
          'friction':0.3,
          'density':1.0,
          'isStatic':false
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle=this.body.angle;
      push ();
      //rotate(angle);
      translate(pos.x,pos.y);
      //rectMode(CENTER);
      fill(255);
      circle(pos.x, pos.y, this.radius);
      pop();
    }
  };