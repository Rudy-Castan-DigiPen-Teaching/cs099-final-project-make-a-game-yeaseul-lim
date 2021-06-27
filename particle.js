// Name       : Yeaseul Lim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class particle
{
    constructor(start_x,start_y,random_speed){
        this.position = new Vec2(start_x,start_y);
        this.velocity = new Vec2(1,0);
        const speed = random_speed;
        const direction = random(TWO_PI);
        this.velocity.setLength(speed);
        this.velocity.setAngle(direction);
    }
    update(){
        this.position.addTo(this.velocity);
    }
    draw(img,width=14,height=22){
        image(img,this.position.x-8,this.position.y-8,width,height);
    }
}
