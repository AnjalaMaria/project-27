class bob{
	constructor(x,y,r) {

		var options={
			isStatic:true,
			restitution:0.3,
			friction:0,
			density:1.2
		}

		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);

	}
	display(){
			
    var bobpos=this.body.position;		

    push();
    translate(bobpos.x, bobpos.y);
    rectMode(CENTER);
    fill("magenta");
	ellipseMode(CENTER);
	ellipse(this.image, 0,0,this.r, this.r);
	pop();
			
	}

}