class Vec2{

    // constructor(x=0,y=0)	
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
    
    // add(v2)	
    // Returns a new vector that is the sum of this vector and vector v2. Mathematically equivalent to v̄1 + v̄2. Note that this vector's x and y is left unchanged.
    add(another_vector){
        const new_x = this.x + another_vector.x;
        const new_y = this.y + another_vector.y;
        return new Vec2 (new_x,new_y);
    }
    
    // addTo(v2)	
    // Modifies this vector by adding the vector v2 into itself. It is logically like doing v1 = v1 + v2;
    addTo(another_vector){
        this.x+= another_vector.x;
        this.y+= another_vector.y;
    }
    
    // subtract(v2)	
    // Returns a new vector that is the difference of this vector and vector v2. Mathematically equivalent to v̄1 - v̄2. Note that this vector's x and y is left unchanged.
    subtract(another_vector){
        const new_x = this.x-another_vector.x;
        const new_y = this.y-another_vector.y;
        return new Vec2(new_x,new_y);
    }
    
    // subtractFrom(v2)	
    // Modifies this vector by subtracting the vector v2 from itself. It is logically like doing v1 = v1 - v2;
    subtractFrom(another_vector){
        this.x-= another_vector.x;
        this.y-= another_vector.y;
    }	
    
    // multiply(scalar)	
    // Returns a new vector that is the scaled version of this vector. Mathematically equivalent to sv̄= (sx,sy). Note that this vector's x and y is left unchanged.
    multiply(scalar){
        const new_x = this.x * scalar;
        const new_y = this.y * scalar;
        return new Vec2(new_x,new_y);
    }	
    
    // multiplyBy(scalar)	
    // Modifies this vector by scaling it's x and y components. It is logically like doing v = s*v;
    multiplyBy(scalar){
        this.x*=scalar;
        this.y*=scalar;
    }
    
    // divide(scalar)	
    // Returns a new vector that is the scaled version of this vector. Mathematically equivalent to v̄/s = (x/s, y/s). Note that this vector's x and y is left unchanged.
    divide(scalar){
        const new_x = this.x / scalar;
        const new_y = this.y / scalar;
        return new Vec2(new_x,new_y);
    }
    
    // divideBy(scalar)	
    // Modifies this vector by scaling it's x and y components. It is logically like doing v = v/s;
    divideBy(scalar){
        this.x/=scalar;
        this.y/=scalar;
    }	
    
    }