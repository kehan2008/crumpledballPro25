class Paper{
  constructor(x,y,radius){
    var options= {
      isStatic:false,
      restitution:0.3,
      friction:0,
      density:1.2,
    }  
    this.x = x
    this.y = y
    this.r = radius
    this.image = loadImage("paper.png");
    this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options);
    World.add(world,this.body);
  }

  display(){
    var paperpos = this.body.position;
    var angle = this.body.angle;    
    push()
    translate(paperpos.x, paperpos.y,);    
    //strokeWeight(4);
    fill(255)
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.r, this.r);
    pop()
  }   

}