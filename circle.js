class circle {
    //inside class make a constructor, and right the properties
    constructor(x,y){
        //creating rule which includes all of these properties(you can give any name e.g.options)
        var options = {
            density:1,
            friction:5,
            restitution:0.3
        }
        
        //before creating a variable name add "this."
        // you can give any name to the variable
        // dont forget to add the options that u created, here.
        this.body = Bodies.circle(x,y,50,options)
        //add the body to the world like this(again you couldve given any name to the body)
        World.add(world,this.body)

    }
    //now you have a made a body so far, and you have to add a rectangle on the same position as the body, so it is visible to us.
    display(){
        // assign the mouseX and mouseY to the x and y coordinates of the body
      var pos = this.body.position
     
      // capture the angle of the body
      var angle = this.body.angle
      //write/ displ
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      fill("green")
      ellipse(0,0,50)
      pop()
    }
}