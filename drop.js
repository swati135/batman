class Drop{
    constructor(x,y){
        var options = {
            density: 0.2,
            friction: 0.1
        }
        this.body = Bodies.circle(x,y,5,options);
        World.add(world, this.body);
    }
    display(){
        fill("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y, 5, 5);
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x: random(0,800), y: random(0,500)})
        }
    }
}