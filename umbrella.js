class Umbrella{
    constructor(x,y){
        this.body = Bodies.circle(x,y,100,{isStatic: true});
        World.add(world,this.body);
    }
     display(){
        var pos = this.umbrella.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}
