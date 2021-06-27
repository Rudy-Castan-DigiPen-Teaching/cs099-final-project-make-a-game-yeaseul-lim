// Name       : Yeaseul Lim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class Vec2{

    // constructor(x=0,y=0,this.z=0)	
    // x and y parameters will set the vector's this.x and this.y fields. The parameters are optional and default to zero.
    constructor(_x=0, _y=0, _z=0){
        this.x = _x;
        this.y = _y;
        this.z = _z;
    }

    // getAngle()
    // Returns the calculated angle of the vector utilizing atan2(). Note that this vector's x and y is left unchanged.
    getAngle(){
        const angle = atan2(this.y,this.x);
        return angle;
    }
    
    // setAngle(angle_in_radians)
    // Preserving the current length of the vector, make this vector point in a direction based off of angle_in_radians.
    setAngle(angle_in_radians){
        const length = this.getLength();
        this.x = cos(angle_in_radians)*length;
        this.y = sin(angle_in_radians)*length;
    }

    // getLength()
    // Returns the calculated length of the vector utilizing Pythagoreans Theorem. Note that this vector's x and y is left unchanged.
    getLength(){
    const length = sqrt(this.x*this.x + this.y*this.y);
    return length;
    }
    
    // setLength(length)	
    // Preserving the current direction of the vector, make this vector have a new length specified by the length parameter.
    setLength(length){
        const angle_in_radians = this.getAngle();
        this.x = cos(angle_in_radians)*length;
        this.y = sin(angle_in_radians)*length;
    }
    
    // addTo(v2)	
    // Modifies this vector by adding the vector v2 into itself. It is logically like doing v1 = v1 + v2;
    addTo(another_vector){
        this.x+= another_vector.x;
        this.y+= another_vector.y;
    }
    
    // subtractFrom(v2)	
    // Modifies this vector by subtracting the vector v2 from itself. It is logically like doing v1 = v1 - v2;
    subtractFrom(another_vector){
        this.x-= another_vector.x;
        this.y-= another_vector.y;
    }	

    check_particle_shot_collision(explosion)
    {
        for(let i = 0; i<explosion.length; i++)
        {
            if(dist(explosion[i].position.x,explosion[i].position.y, this.x,this.y)<=23)
            {
                explosion.splice(i,1);
                return true;
            }
        }
    }   

    check_particle_jet_shot_collision(explosion)
    {
        for(let i = 0; i<explosion.length; i++)
        {
            if(dist(explosion[i].position.x,explosion[i].position.y, this.x,this.y)<=18)
            {
                explosion.splice(i,1);
                return true;
            }
        }
    }   
    
    check_planet_shot_collision(planet_arr)
    {
        for(let i =0; i<planet_arr.length; i++)
        {
            if(planet_arr[i].z==1)
            {
                if(dist(this.x,this.y, planet_arr[i].x+40,planet_arr[i].y+40)<=55)
                {
                    return true;
                }
            }
        }
    }

    check_planet_jet_shot_collision(planet_arr)
    {
        for(let i =0; i<planet_arr.length; i++)
        {
            if(planet_arr[i].z==1)
            {
                if(dist(this.x,this.y, planet_arr[i].x+40,planet_arr[i].y+40)<=50)
                {
                    return true;
                }
            }
        }
    }

    check_bomb_shot_collision(bomb_arr)
    {
        for(let i =0; i<bomb_arr.length; i++)
        {
            if(bomb_arr[i].z==1)
            {
                if(dist(this.x,this.y, bomb_arr[i].x+40,bomb_arr[i].y+40)<=55)
                {
                    return true;
                }
            }
        }
    }

    check_bomb_jet_shot_collision(bomb_arr)
    {
        for(let i =0; i<bomb_arr.length; i++)
        {
            if(bomb_arr[i].z==1)
            {
                if(dist(this.x,this.y, bomb_arr[i].x+40,bomb_arr[i].y+40)<=50)
                {
                    return true;
                }
            }
        }
    }

}