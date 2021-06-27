// Name       : Yeaseul Lim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class planet_class
{
    constructor(num_particles,base_planet,setup_explosion_time,first_time)
    {
        this.explosion =[]; //explosion particle
        this.planet_arr=[]; //planet location
        this.total_planet=20;
        this.base_planet=base_planet;
        this.explosion_num=[]; //for random explosion
        this.planet_check_move=0;
        this.explosion_time=first_time;
        this.planet_location_arr=[]; ///whole location
        this.particle_arr=[]; //first location of particle
        this.check_planet_arr=0;
        this.num;
        this.new_base_planet=0;
        this.new_planet_time=0;
        this.check_add_planet_arr=0;
        this.player_speed_vec= new Vec2(3,0);
        this.num_particles=num_particles;
        this.setup_explosion_time = setup_explosion_time;
        this.check_num=0;

        //gauge
        this.planet_gauge_length=80;
    }

    create_planet_arr()
    {
        for(let i = 0; i < this.total_planet; i++)
        {
            let coordinate = 
            {
                x : random(-700,width-250),
                y : random(70,height-40-55),
                z : 0,
                length :this.planet_gauge_length,
                number : this.num_particles
            };
            this.planet_location_arr.push(coordinate);
        }
    }

    add_planet_arr()
    {
        var add_planet_arr = ((this.base_planet+this.new_base_planet)%this.total_planet);

        if(add_planet_arr==0)
        {
            if(this.check_add_planet_arr==0)
            {
                for(let i =0; i<this.total_planet; i++)
                {
                    let coordinate = 
                    {
                        x : random(-700,width-100),
                        y : random(70,height-40-55),
                        z : 0 ,
                        length :this.planet_gauge_length,
                        number :this.num_particles
                    };
                    this.planet_location_arr.push(coordinate);
                }
                this.check_add_planet_arr=1;
            }
        }
        if(add_planet_arr==2)
        {
            this.check_add_planet_arr=0;
        }
    }

    create_new_planet()
    {
        var planet_num=0;
        for(let i =0; i<this.planet_arr.length; i++)
        {
            if(this.planet_arr[i].z==1)
            {
                planet_num+=1;
            }
        }
        if(planet_num < this.base_planet-1)
        {
            this.new_planet_time += deltaTime/1000;
            if(this.new_planet_time > 0.3)
            {
                this.check_planet_arr=0;
                this.new_planet_time=0;
                this.new_base_planet+=1;
            }
        } 
    }

    make_planet_arr()
    {
        if(this.check_planet_arr==0)
        {
            if(this.new_base_planet==0)
            {
                for (let j = 0; j < this.base_planet; j++)
                {   
                    this.planet_arr.push(this.planet_location_arr[j]);
                    this.particle_arr.push(this.planet_location_arr[j]);
                }
            }else if(this.new_base_planet>0)
            {
                for (let j = this.base_planet+this.new_base_planet-1; j < this.base_planet + this.new_base_planet; j++)
                {   
                    this.planet_arr.push(this.planet_location_arr[j]);
                    this.particle_arr.push(this.planet_location_arr[j]);
                }
            }
            this.check_planet_arr=1;
        }
    }

    planet_image(img_planet)
    {
        if(this.planet_arr.length>0)
        {
            for (let j = 0; j < this.base_planet+this.new_base_planet; j++)
            {   
                if(this.planet_arr[j].z == 0)
                {
                    this.planet_arr[j].z = 1;
                }
                if(this.planet_arr[j].z == 1)
                {
                    image(img_planet, this.planet_arr[j].x,this.planet_arr[j].y);
                }
            }
        }
    }

    planet_gauge()
    {
        for (let j = 0; j < this.planet_arr.length; j++)
        {   
            if(this.planet_arr[j].z == 1)
            {
                push();
                noStroke();
                fill('red');
                rect(this.planet_arr[j].x,this.planet_arr[j].y-15,this.planet_arr[j].length,8);
                pop();
            }
        }
    }

    planet_shot_collision(shot_arr,jet_shot_arr)
    {
        if(shot_arr.length>0)
        {
            for(let i =0; i<this.planet_arr.length; i++)
            {
                for(let j =0; j<shot_arr.length; j++)
                {
                    if(this.planet_arr[i].z==1)
                    {
                        if(dist(this.planet_arr[i].x+40,this.planet_arr[i].y+40,shot_arr[j].x,shot_arr[j].y)<=55)
                        {
                            if(this.planet_arr[i].length>0)
                            {
                                this.planet_arr[i].length-=20;
                            }
                            if(this.planet_arr[i].length<=0)
                            {
                                this.planet_arr[i].z=2;
                            }
                        }
                    }
                }
            }
        }
        if(jet_shot_arr.length>0)
        {
            for(let i =0; i<this.planet_arr.length; i++)
            {
                for(let j =0; j<jet_shot_arr.length; j++)
                {
                    if(this.planet_arr[i].z==1)
                    {
                        if(dist(this.planet_arr[i].x+40,this.planet_arr[i].y+40, jet_shot_arr[j].x,jet_shot_arr[j].y)<=50)
                        {
                            if(this.planet_arr[i].length>0)
                            {
                                this.planet_arr[i].length-=20;
                            }
                            if(this.planet_arr[i].length<=0)
                            {
                                this.planet_arr[i].z=2;
                            }
                        }
                    }
                }
            }
        }
    }

    create_particle()
    {
        for(let i =0; i<this.planet_arr.length; i++)
        {
            if(this.planet_arr[i].z==1)
            {
                this.explosion_num.push(i)
            }
            this.planet_arr[i].number=floor(map(this.planet_arr[i].length,80,0,this.num_particles,0));
        }

        this.explosion_time += deltaTime/1000;
    
        if(this.explosion_time>this.setup_explosion_time) 
        {
            this.check_num=1;
            this.explosion_time=0;
        }
        if(this.check_num==1)
        {  
            var random_num = floor(random(this.explosion_num.length));
            this.num=this.explosion_num[random_num];
            this.check_num=0;
            for (let i = 0; i<this.planet_arr[this.num].number; ++i)
            {
                this.explosion.push(new particle (this.particle_arr[this.num].x+40,this.particle_arr[this.num].y+40,random(2,5)));
            }
            this.explosion_num.splice(0,this.explosion_num.length);
            this.planet_arr[this.num].z=2;
        }
    }


    show_particle(img_particle)
    {
        for (let i =0; i<this.explosion.length;i++){
            this.explosion[i].update();
            this.explosion[i].draw(img_particle,16,16);
        }
        for (let i = this.explosion.length-1; i>=0; --i){
            let particle = this.explosion[i];
            if(particle.position.x>width-20 || particle.position.x <20 || particle.position.y>height-55 || particle.position.y<55){
                this.explosion.splice(i,1);
            }
        }
    }

    particle_player_collision(player)
    {
        for(let i = 0; i<this.explosion.length; i++)
        {
            let particle = this.explosion[i];
            if(dist(particle.position.x,particle.position.y, player.x+40,player.y+40)<=48)
            {
                if(player.image_change == 0 || player.image_change == 2 || player.image_change == 3 || player.image_change == 5)
                {
                    if(player.gauge_score>0)
                    {
                        player.gauge_score -= 5;
                    }
                }
                this.explosion.splice(i,1);
            }
        }
    }

    planet_move(player_x, player_previous_x,player_speed)
    {
        if(this.planet_check_move == 1)
        {
            if(player_x >= player_previous_x) //player move right
            {
                for(let i =0; i<this.planet_arr.length; i++)
                {
                    this.planet_arr[i].x -= player_speed;  //planet move left
                }
                this.planet_check_move = 0;
            }else if(player_x <= player_previous_x) //player move left
            {
                for(let i =0; i<this.planet_arr.length; i++)
                {
                    this.planet_arr[i].x += player_speed;  //planet move right
                }
                this.planet_check_move = 0;
            }
        }
    }

    particle_move(player_x, player_change_move)
    {
        if(player_x > 20 && player_x <1100)
        {
            if(this.explosion.length>0)
            {
                for(let i = 0; i<this.explosion.length; i++)
                {
                    if(this.explosion[i].position.x > player_x) 
                    {
                        if(player_change_move==2)
                        {
                            this.explosion[i].position.subtractFrom(this.player_speed_vec);
    
                        }else if(player_change_move==1) 
                        {
                            this.explosion[i].position.addTo(this.player_speed_vec);
                        }
                    }else if(this.explosion[i].position.x < player_x) 
                    {
                        if(player_change_move==2) 
                        {
                            this.explosion[i].position.subtractFrom(this.player_speed_vec);
                            
                        }else if(player_change_move==1) 
                        {
                            this.explosion[i].position.addTo(this.player_speed_vec);
                        }
                    }
                }
            }
        }
    }

    player_move(player_x)
    {
        if(this.planet_check_move==0)
        {
            if(keyIsDown(LEFT_ARROW))
            {
                if(player_x >= 20)
                {
                    this.planet_check_move=1;
                }else
                {
                    this.planet_check_move=2;
                }
    
            }else if(keyIsDown(RIGHT_ARROW))
            {
                if(player_x + 80 <= width-20)
                {
                    this.planet_check_move=1;
                }else
                {
                    this.planet_check_move=2;

                }
            }
        }
    
        if(this.planet_check_move == 2)
        {
            if(player_x <= 20 )
            {
                if(keyIsDown(RIGHT_ARROW))
                {
                    this.planet_check_move = 0;
                }
                if(keyIsDown(LEFT_ARROW)&&keyIsDown(RIGHT_ARROW))
                {
                    this.planet_check_move = 2;
                }
            }
            if(player_x+80 >= width-20)
            {
                if(keyIsDown(LEFT_ARROW))
                {
                    this.planet_check_move =0;
                }
            }
        }
    }

}



