// Name       : Yeaseul Lim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class monster_class
{
    constructor(explosion_first_time, setup_explosion_time,base_bomb,num_particles)
    {
        this.x = 20;
        this.y = 250;
        this.image_change = 0; //basic monster
        this.change_move = 1; //right
        this.speed = 3;
        this.decide_xy = floor(random(2));
        this.move_x = random(20,880);
        this.move_y = random(105,495);

        this.heart_img_time = 0;
        this.check_monster_shot_collision=0;

        //water
        this.water_check_move = 0;
        
        //water_bomb
        this.water_bomb_check_move = 0;
        this.checkDir = 0;

        //gauge_bar
        this.gauge_score = 100;
        this.gauge_length = 300;

        //collision
        this.check_monster_collision = 0;
        this.check_water_collision = 0;

        //water
        this.grid_arr=[];
        this.water_arr =[];
        this.water_disappear_time = 0;
        this.water_disappear_duration = 5;
        this.num_water = floor(random(8,10));       
        this.water_appear_time = 0;
        this.water_appear_duration = 5; 
        this.time_check=0;
        this.water_collision_i;
        this.check_water_collision_i =0;
        this.water_check_move =0;

        //bomb
        this.bomb_arr = [];
        this.explosion_time = explosion_first_time;
        this.setup_explosion_time = setup_explosion_time;
        this.base_bomb = base_bomb;
        this.total_bomb = 20;
        this.particle_arr=[];
        this.new_base_bomb = 0;
        this.new_bomb_time = 0;
        this.check_add_bomb_arr = 0;
        this.player_speed_vec = new Vec2(3,0);
        this.num_particles = num_particles;
        this.bomb_gauge_length=100;
        this.bomb_location_arr =[]
        this.check_bomb_arr =0;
        this.check_num = 0;
        this.num;
        this.explosion_num=[];
        this.explosion=[];
        this.bomb_check_move = 0;

    }

    monster_img(img_monster_left,img_monster_right,img_monster_mad_left,img_monster_mad_right,img_monster_heart_left,img_monster_heart_right)
    {
        //basic monster
        if(this.image_change == 0)
        {
            if(this.change_move == 0) //left
            {
                image(img_monster_left,this.x,this.y);

            }else if(this.change_move == 1) //right
            {
                image(img_monster_right,this.x,this.y);
            }
        }

        //mad monster
        if(this.image_change == 1)
        {
            if(this.change_move == 0) //left
            {
                image(img_monster_mad_left,this.x,this.y);

            }else if(this.change_move == 1) //right
            {
                image(img_monster_mad_right,this.x,this.y);
            }
        }

        //heart monster
        if(this.image_change == 2)
        {
            if(this.change_move == 0) //left
            {
                image(img_monster_heart_left,this.x,this.y);

            }else if(this.change_move == 1) //right
            {
                image(img_monster_heart_right,this.x,this.y);
            }
        }
    }

    monster_move()
    {
        if(this.decide_xy==0) // move x coordinate
        {
            if(this.move_x > this.x) //move right
            {
                this.change_move == 1; //right
                this.x += this.speed;

            }else if(this.move_x < this.x) //move left
            {
                this.change_move == 0; //left
                this.x -= this.speed;
            }
        }else if(this.decide_xy==1) // move y coordinate
        {
            if(this.move_y > this.y) //move down
            {
                this.y += this.speed;

            }else if(this.move_y < this.y) //move up
            {
                this.y -= this.speed;
            }
        }
        if((this.move_x<this.x && this.move_x+3>this.x)||(this.move_x-3<this.x && this.move_x>this.x)||(this.move_y<this.y && this.move_y+3>this.y)||(this.move_y-3<this.y && this.move_y>this.y))
        {
            this.decide_xy = floor(random(2));
            this.move_x = random(20,880);
            this.move_y = random(105,445);
        } 
    }

    player_monster_collision(player) //머리만 충돌판정 해놓음 (만약 사진 바꾸면 이거 수정해야함) 현재 이정도 해놓음circle(175,340,180)
    {
        if(this.check_monster_collision == 0)
        {
            if(dist(player.x+40,player.y+40, this.x+155, this.y+90) <= 130)
            {
                if(player.image_change == 0 || player.image_change == 2 || player.image_change == 3 || player.image_change == 5)
                {
                    if(player.gauge_score>0)
                    {
                        player.gauge_score -= 10;
                    }
                }
                this.check_monster_collision = 1;
            }
        }else if(this.check_monster_collision == 1)
        {
            if(dist(player.x+40,player.y+40, this.x+155, this.y+90) > 130)
            {
                this.check_monster_collision = 0;
            }
        }
    }

    monster_shot_collision(player)
    {
        if(player.shooting_location_arr.length>0)
        {
            for(let i=0; i<player.shooting_location_arr.length; i++)
            {
                if(dist(player.shooting_location_arr[i].x,player.shooting_location_arr[i].y,this.x+155,this.y+90)<=105)
                {
                    player.shooting_location_arr.splice(i,1);

                    if(this.gauge_score>0)
                    {
                        this.gauge_score-=3;
                    }

                    this.check_monster_shot_collision=1;
                    this.image_change = 2;
                }
            }
        }
        if(player.jet_shooting_arr.length>0)
        {
            for(let i=0; i<player.jet_shooting_arr.length; i++)
            {
                if(dist(player.jet_shooting_arr[i].x,player.jet_shooting_arr[i].y,this.x+155,this.y+90)<=100)
                {
                    player.jet_shooting_arr.splice(i,1);

                    if(this.gauge_score>0)
                    {
                        this.gauge_score-=3;
                    }
                    this.check_monster_shot_collision=1;
                    this.image_change = 2;
                }
            }
        }
        if(this.check_monster_shot_collision==1)
        {
            this.heart_img_time += deltaTime/1000;
            if(this.heart_img_time>0.35)
            {
                this.image_change = 0;
                this.heart_img_time = 0;
                this.check_monster_shot_collision=0;
            }
        }
    }

    create_water_grid()
    {
        for(let i = 0; i<1200; i+=100)
        {
            for(let j = 50; j<750; j+=100)
            {
                let coordinate = 
                {
                    x : i,
                    y : j
                };
                this.grid_arr.push(coordinate);
            }
        }
    }

    monster_gauge_bar()
    {
        this.gauge_length = map(this.gauge_score,100,0,300,0,true);

        push();
        fill('red');
        noStroke();
        rect(this.x,this.y-50,this.gauge_length,30);
        pop();

        push();
        noFill();
        stroke(255);
        rect(this.x,this.y-50,300,30);
        pop();
    }


    water_img(img_water)
    {   
        if(this.time_check == 0)
        {
            if(this.image_change == 1)
            {
                this.image_change = 0;
            }
            console.log(this.image_change);
            this.water_disappear_time += deltaTime/1000;
            if(this.water_disappear_time > this.water_disappear_duration)
            {
                for(let i = 0; i<this.num_water; i++)
                {
                    this.water_arr.push(this.grid_arr[floor(random(this.grid_arr.length))])
                }
                this.time_check = 1;
                this.water_disappear_time = 0;
                this.num_water = floor(random(8,10));
            }

        }else if(this.time_check == 1)
        {
            this.water_appear_time += deltaTime/1000;
            if(this.water_arr.length>0)
            {
                for(let i = 0; i<this.water_arr.length; i++)
                {
                    image(img_water,this.water_arr[i].x,this.water_arr[i].y);
                }
                if(this.image_change == 0)
                {
                    this.image_change = 1;
                }
            }
            if(this.water_appear_time > this.water_appear_duration)
            {
                this.water_arr.splice(0,this.water_arr.length);
                this.water_appear_time=0;
                this.time_check=0;
            }
        }
    }

    water_move(player_x,player_previous_x)
    {
        if(this.water_check_move == 1)
        {
            if(player_x >= player_previous_x) //player move right
            {
                if(this.water_arr.length>0)
                {
                    for(let i =0; i<this.water_arr.length; i++)
                    {
                        this.water_arr[i].x -= this.speed;  //water move left
                    }
                }
                this.water_check_move =0;
            }else if(player_x <= player_previous_x) //player move left
            {
                if(this.water_arr.length>0)
                {
                    for(let i =0; i<this.water_arr.length; i++)
                    {
                        this.water_arr[i].x += this.speed;  //water move right
                    }
                }
                this.water_check_move =0;
            }
        }
    }

    player_water_collision(player) //water을 원으로 충돌판정함 시간나면 사각형으로 바꿔주기
    {
        if(this.water_arr.length>0)
        {
            for(let i =0; i<this.water_arr.length; i++)
            {
                if(this.check_water_collision==0)
                {
                    if(dist(player.x+40,player.y+40,this.water_arr[i].x+50,this.water_arr[i].y+50)<=90)
                    {
                        this.check_water_collision=1;
                    }
    
                }if(this.check_water_collision==1)
                {
                    if(player.gauge_score>0)
                    {
                        if(player.image_change == 0 || player.image_change == 2 || player.image_change == 3 || player.image_change == 5)
                        player.gauge_score-=3;
                    }
                    this.check_water_collision=2;
                    this.water_collision_i=i;
                    this.check_water_collision_i=1;
                }
            }
            if(this.check_water_collision_i==1)
            {
                if(this.check_water_collision==2)
                {
                    if(dist(player.x+40,player.y+40,this.water_arr[this.water_collision_i].x+50, this.water_arr[this.water_collision_i].y+50)>90)
                    {
                        this.check_water_collision=0;
                        this.check_water_collision_i=0;
                    }
                }
            }
        }
    }

    create_bomb_arr()
    {
        for(let i = 0; i < this.total_bomb; i++)
        {
            var random_num = floor(random(this.grid_arr.length));
            let coordinate = 
            {
                x : this.grid_arr[random_num].x,
                y : this.grid_arr[random_num].y,
                z : 0,
                length :80,
                number : this.num_particles
            };
            this.bomb_location_arr.push(coordinate);
        }
    }

    add_bomb_arr()
    {
        var add_bomb_arr = ((this.base_bomb+this.new_base_bomb)%this.total_bomb);

        if(add_bomb_arr==0)
        {
            if(this.check_add_bomb_arr==0)
            {
                for(let i =0; i<this.total_bomb; i++)
                {
                    var random_num = floor(random(this.grid_arr.length));
                    let coordinate = 
                    {
                        x : this.grid_arr[random_num].x,
                        y : this.grid_arr[random_num].y,
                        z : 0,
                        number : this.num_particles,
                        length : 80
                    };
                    this.bomb_location_arr.push(coordinate);
                }
                this.check_add_bomb_arr=1;
            }
        }
        if(add_bomb_arr==2)
        {
            this.check_add_bomb_arr=0;
        }
    }

    create_new_bomb()
    {
        if(this.bomb_arr.length>0)
        {
            var bomb_num=0;
            for(let i =0; i<this.bomb_arr.length; i++)
            {
                if(this.bomb_arr[i].z==1)
                {
                    bomb_num+=1;
                }
            }
        }
        if(bomb_num < this.base_bomb-1)
        {
            this.new_bomb_time += deltaTime/1000;
            if(this.new_bomb_time > 1)
            {
                this.check_bomb_arr=0;
                this.new_bomb_time=0;
                this.new_base_bomb+=1;
            }
        } 
    }

    make_bomb_arr()
    {
        if(this.check_bomb_arr==0)
        {
            if(this.new_base_bomb==0)
            {
                for (let j = 0; j < this.base_bomb; j++)
                {   
                    this.bomb_arr.push(this.bomb_location_arr[j]);
                    this.particle_arr.push(this.bomb_location_arr[j]);
                }
            }else if(this.new_base_bomb>0)
            {
                for (let j = this.base_bomb+this.new_base_bomb-1; j < this.base_bomb + this.new_base_bomb; j++)
                {   
                    this.bomb_arr.push(this.bomb_location_arr[j]);
                    this.particle_arr.push(this.bomb_location_arr[j]);
                }
            }
            this.check_bomb_arr=1;
        }
    }

    bomb_image(img_bomb)
    {
        if(this.bomb_arr.length>0)
        {
            for (let j = 0; j < this.base_bomb+this.new_base_bomb; j++)
            {   
                if(this.bomb_arr[j].z == 0)
                {
                    this.bomb_arr[j].z = 1;
                }
                if(this.bomb_arr[j].z == 1)
                {
                    image(img_bomb, this.bomb_arr[j].x,this.bomb_arr[j].y,80,80);
                }
            }
        }
    }

    bomb_shot_collision(shot_arr,jet_shot_arr)
    {
        if(shot_arr.length>0)
        {
            for(let i =0; i<this.bomb_arr.length; i++)
            {
                for(let j =0; j<shot_arr.length; j++)
                {
                    if(this.bomb_arr[i].z==1)
                    {
                        if(dist(this.bomb_arr[i].x+40,this.bomb_arr[i].y+40,shot_arr[j].x,shot_arr[j].y)<=55)
                        {
                            if(this.bomb_arr[i].length>0)
                            {
                                this.bomb_arr[i].length-=20;

                            }if(this.bomb_arr[i].length<=0)
                            {
                                this.bomb_arr[i].z=2;
                            }
                        }
                    }
                }
            }
        }
        if(jet_shot_arr.length>0)
        {
            for(let i =0; i<this.bomb_arr.length; i++)
            {
                for(let j =0; j<jet_shot_arr.length; j++)
                {
                    if(this.bomb_arr[i].z==1)
                    {
                        if(dist(this.bomb_arr[i].x+40,this.bomb_arr[i].y+40, jet_shot_arr[j].x,jet_shot_arr[j].y)<=50)
                        {
                            if(this.bomb_arr[i].length>0)
                            {
                                this.bomb_arr[i].length-=20;
                            
                            }if(this.bomb_arr[i].length<=0)
                            {
                                this.bomb_arr[i].z=2;
                            }
                        }
                    }
                }
            }
        }
    }

    bomb_gauge()
    {
        for (let j = 0; j < this.bomb_arr.length; j++)
        {   
            if(this.bomb_arr[j].z == 1)
            {
                push();
                noStroke();
                fill('red');
                rect(this.bomb_arr[j].x,this.bomb_arr[j].y-15,this.bomb_arr[j].length,8);
                pop();
            }
        }
    }

    create_particle()
    {
        for(let i =0; i<this.bomb_arr.length; i++)
        {
            if(this.bomb_arr[i].z==1)
            {
                this.explosion_num.push(i)
            }
            this.bomb_arr[i].number=floor(map(this.bomb_arr[i].length,100,0,this.num_particles,0));
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
            for (let i = 0; i<this.bomb_arr[this.num].number; ++i)
            {
                this.explosion.push(new particle (this.particle_arr[this.num].x+50,this.particle_arr[this.num].y+50,random(2,5)));
            }
            this.explosion_num.splice(0,this.explosion_num.length);
            this.bomb_arr[this.num].z=2;
        }
    }

    show_particle(particle_img)
    {
        for (let i =0; i<this.explosion.length;i++){
            this.explosion[i].update();
            this.explosion[i].draw(particle_img);
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
        if(this.explosion.length>0)
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
    }

    bomb_move(player_x, player_previous_x,player_speed)
    {
        if(this.bomb_check_move == 1)
        {
            if(player_x >= player_previous_x) //player move right
            {
                for(let i =0; i<this.bomb_arr.length; i++)
                {
                    this.bomb_arr[i].x -= player_speed;  //bomb move left
                }
                this.bomb_check_move = 0;
            }else if(player_x <= player_previous_x) //player move left
            {
                for(let i =0; i<this.bomb_arr.length; i++)
                {
                    this.bomb_arr[i].x += player_speed;  //bomb move right
                }
                this.bomb_check_move = 0;
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
                            this.explosion[i].position.addTo(this.player_speed_vec);
    
                        }else if(player_change_move==1) 
                        {
                            this.explosion[i].position.subtractFrom(this.player_speed_vec);
                        }
                    }else if(this.explosion[i].position.x < player_x) 
                    {
                        if(player_change_move==2) 
                        {
                            this.explosion[i].position.addTo(this.player_speed_vec);
                            
                        }else if(player_change_move==1) 
                        {
                            this.explosion[i].position.subtractFrom(this.player_speed_vec);
                        }
                    }
                }
            }
        }
    }
}