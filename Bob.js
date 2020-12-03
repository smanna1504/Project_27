class Bob{
    constructor(x){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            densiy:1.2
        }
    
        this.body=Matter.Bodies.circle(x,350,25,options);
        this.radius=25;
        World.add(world,this.body);
    }
    
    display(){
       var posX=this.body.position.x;
      var posY=this.body.position.y;
    stroke('blue');
    strokeWeight(2);
      fill('lightblue');
        ellipseMode(RADIUS);
        ellipse(posX,posY,this.radius);
    }
    
    
    
    };