
class vector
{
    constructor(x, y, colour)
    {
        this.x = x;
        this.y = y;
        this.colour = colour
    }

    mag(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }

    slope(){
        return this.y/this.x;
    }

    dotProduct(other){
        return this.x*other.x + this.y*other.y;
    }

    unitVector()
    {
        let newx = this.x/this.mag();
        let newy = this.y/this.mag();
        let newvec = new vector(newx, newy, this.colour);
        return newvec;
    }

    draw()
    {
        strokeWeight(8);
        stroke(this.colour[0], this.colour[1], this.colour[2]);
        line(0,0,this.x, this.y);
    }

    scalarProduct(mag)
    {
        this.x = this.x*mag;
        this.y = this.y*mag;
    }
}

function setup()
{
    var mouse = {
        x: undefined, y:undefined
    }

    window.addEventListener('mousemove', function(event){
        mouse.x = event.x;
        mouse.y = event.y;
        // console.log(mouse);
        // console.log(mouse);
    
    // console.log(mouse.x, mouse.y);

    createCanvas(900, 500);
    background(0);
    A = new vector(mouse.x, mouse.y, [0,150, 150]);
    A.draw();   
    B = new vector(800, 200, [100, 0, 150]);
    B.draw();
    let mag = A.dotProduct(B)/B.mag();
    let projection = B.unitVector();

    projection.scalarProduct(mag);
    projection.colour = [255, 0, 0];
    projection.draw();
    console.log(mouse);
    strokeWeight(1);
    stroke(100, 10, 200);
    line(A.x, A.y, projection.x, projection.y);
    // console.log(projection.x, " ",projection.y)
    })
}

setup();



