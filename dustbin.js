class Dustbin {
    constructor(x,y,width,height){
     var options ={
      isStatic: true,
      'restitution':0,
      'friction':1,
      'density':0.2
    }
    this.body=Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;

    world.add(world, this.body);
}
    display(){
        rectMode(CENTER);

        fill(225);

        rect(this.body.position.x, this.body.position.y, this.height, this.width)
    }
   
   }