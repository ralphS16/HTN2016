flock=Boid[];
function setup() {
	//create canvas
	createCanvas(720, 400);
	
}

function draw() {
<<<<<<< HEAD
	//set background colour
  	background(0);
  	//fill colour
  	fill(0, 180, 180);
}

function rotate() {
	rotate(PI/3.0);
}

draw();
rotate();

function Boid() {

	get p1() {
		return createVector(this.pos.x - 6, this.pos.y - 10);
	}

	get p2() {
		return createVector(this.pos.x, this.pos.y + 10);
	}

	get p3() {
		return createVector(this.pos.x + 6, this.pos.y - 10);
	}

  
}

function Boid(int x,int y) {

  //create the position from mouse pointer position
  this.pos=p5.createVector(x,y);
  //assign a velocity between (0,5) to the boid
  this.vel=p5.createVector((Math.random()*5,(Math.random()*5);
  //assign random RGB value for the color of the boid
  this.color=p5.createVector((Math.random()*255,Math.random()*255,Math.random()*255);
  //assigne vision raduis for this boid from range (5,15)
  this.radius=(Math.random()*10+5);
  //an array to store friends
  this.f=[];

  //setter and getter for friends
  get friends(){
      return f;
  }
  set friends(){
    for(var b:flock){
      if(p5.Vector.dist(this.pos.x,this.pos.y,b.pos.x,b.pos.y)<this.radius){
        this.f.append(b);
      }
    }
  }
  //add this boid to the global flock variable
  flock.append(this);
>>>>>>> 3d40fb405a9b5602128701082f2a7d5f51a70b6c
}

Boid.prototype.draw = function () {
	fill(Math.random() * 255);
	triangle(30, 75, 36, 55, 42, 75);
};

Boid.prototype.attract = function () {

};

Boid.prototype.cohesion = function () {

};

Boid.prototype.separation = function () {

};

Boid.prototype.allignment = function () {

};

Boid.prototype.update = function () {
    //let he boid obey the three rules of the flock
    p5.Vector cohesionRuleVector=this.cohesion();
    p5.Vector seperationRuleVector=this.seperation();
    p5.Vector alignmentRuleVector=this.alignment();
};
