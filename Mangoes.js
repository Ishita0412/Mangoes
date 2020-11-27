class Mangoes{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
   
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("mango.png")
this.body=Bodies.circle(this.x,this.y,this.r,options);
World.add(world,this.body);

 }
 display(){
     var Mpos=this.body.position;
      
      image(this.image,this.body.position.x,this.body.position.y,50,50);
 }
}