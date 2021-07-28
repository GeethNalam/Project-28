class Paper{
  constructor(x,y,radius){
    var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.radius = radius
this.body = Bodies.circle(x,y,radius,options);
this.image = loadImage("paper.png")
    World.add(world,this.body);
   
    

    }

 display(){
     fill("yellow");
     ellipseMode(RADIUS);
     circle(this.body.position.x,this.body.position.y,this.radius)
 }




};