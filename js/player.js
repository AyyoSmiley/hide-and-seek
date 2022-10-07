class Player{
    constructor(x,y,width,height){
        var options = {
            restitution: 0.5,
            density: 1
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill(0,0,0);
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    
    }
}