// first make a class/blueprint and give it a name
class Stone {
    //inside class make a constructor, and right the properties
    constructor(x,y){
        //creating rule which includes all of these properties(you can give any name e.g.options)
        var options = {
            density:2,
            friction:1.0,
            restitution:0.5
        }
        
        //before creating a variable name add "this."
        // you can give any name to the variable
        // dont forget to add the options that u created, here.
        this.body = Bodies.rectangle(x,y,50,50,options)
        //add the body to the world like this(again you couldve given any name to the body)
        World.add(world,this.body)

    }
    //now you have a made a body so far, and you have to add a rectangle on the same position as the body, so it is visible to us.
    display(){
        // assign the mouseX and mouseY to the x and y coordinates of the body
      var pos = this.body.position
     
      // capture the angle of the body
      var angle = this.body.angle
      //writ
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      fill("red")
      rect(0,0,50,50)
      pop()
    }
}