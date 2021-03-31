class Iron{
	constructor(x,y,r)
	{
	// assign options to the iron rod
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);
    var options = {
        'reduction' :0.8,
		'friction' :3,
		'density' :30,
    }
	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
            //draw the ellipse here to display the iron rod
            

			pop()
	}

}