class Umbrella{
    constructor(x,y){
        this.body = Bodies.circle(x,y,100,{isStatic: true});
        World.add(world,this.body);
    }
}