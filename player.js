// Name       : Yeaseul Lim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

class player_class
{
    constructor(x,y)
    {
        //player
        this.x = x;
        this.y = y;
        this.image_change =0
        this.change_move = 0;
        this.previous_x =x;
        this.speed = 3;
        this.checkDir = 0;

        //star
        this.point = 0;
        this.star_arr=[];
        this.total_star = 10;
        this.base_star = 1;
        this.star_check_move = 0; //Control star movement according to player's movement
        this.new_star_time=0;

        //defence
        this.num_defence = 0;
        this.defence_arr=[];
        this.total_defence = 20;
        this.base_defence = 3;
        this.defence_check_move = 0; //Control defence movement according to player's movement
        this.defence_time = 10;
        this.check_defence_num = 0;
        this.defence_frame = 0;
        this.check_defence_frame = 0;
        this.new_defence_time=0;
        this.check_add_defence_arr=0;

        //jet
        this.num_jet = 0;
        this.jet_arr=[];
        this.total_jet = 20;
        this.base_jet = 3;
        this.jet_check_move = 0; //Control jet movement according to player's movement
        this.jet_time = 10;
        this.check_jet_num = 0;
        this.jet_frame = 0;
        this.check_jet_frame = 0;
        this.new_jet_time=0;
        this.check_add_jet_arr=0;

        //shooting
        this.num_shot = 50;
        this.shot_arr=[];
        this.total_shot =30;
        this.base_shot = 3;
        this.shot_check_move = 0; //Control jet movement according to player's movement
        this.check_shot_num = 0;
        this.shot_frame = 0;
        this.check_shot_frame = 0;
        this.jet_shooting_arr =[];
        this.new_shot_time=0;
        this.check_add_shot_arr=0;

        //attack
        this.shooting_location_arr=[];
        this.shot_speed = new Vec2(8,0);

        //gauge
        this.gauge_length=530;
        this.gauge_x=650;
        this.gauge_score=100;
        this.gauge_change_x=530-this.gauge_length;

        this.check_player_planet_collision=0;
        this.planet_collision_i;
        this.check_planet_collision_i=0;

        this.check_player_bomb_collision=0;
        this.bomb_collision_i;
        this.check_bomb_collision_i = 0;

    }

    
    player_image(player_left,player_right, defence_left,defence_right ,jet_left,jet_right ,shooting_left,shooting_right, defence_shooting_left,defence_shooting_right, jet_shooting_left,jet_shooting_right)
    {
        //player
        if(this.image_change == 0)
        {
            if(this.change_move == 0) //left
            {
                image(player_left,this.x,this.y);

            }else if(this.change_move == 1) //right
            {
                image(player_right,this.x,this.y);
            }
        
        }else if(this.image_change == 1) //defence_player
        {
            if(this.change_move == 0) //left
            {
                image(defence_left,this.x,this.y);

            }else if(this.change_move == 1) //right
            {
                image(defence_right,this.x,this.y);
            }
        }else if(this.image_change == 2) //jet_player
        {
            if(this.change_move == 0) //left
            {
                image(jet_left,this.x,this.y);

            }else if(this.change_move == 1) //right
            {
                image(jet_right,this.x,this.y);
            }
        }else if(this.image_change == 3) //shooting_player
        {
            if(this.change_move == 0) //left
            {
                image(shooting_left,this.x,this.y);

            }else if(this.change_move == 1) //right
            {
                image(shooting_right,this.x,this.y);
            }
        }else if(this.image_change == 4) //defence_shooting_player
        {
            if(this.change_move == 0) //left
            {
                image(defence_shooting_left,this.x,this.y);

            }else if(this.change_move == 1) //right
            {
                image(defence_shooting_right,this.x,this.y);
            }
        }else if(this.image_change == 5) //jet_shooting_player
        {
            if(this.change_move == 0) //left
            {
                image(jet_shooting_left,this.x,this.y);

            }else if(this.change_move == 1) //right
            {
                image(jet_shooting_right,this.x,this.y);
            }
        }

    }

    player_move()
    {
        if(this.star_check_move == 0 && this.defence_check_move ==0 && this.jet_check_move ==0)  
        {
            if(keyIsDown(LEFT_ARROW))
            {
                this.change_move = 0;
                this.checkDir = 1;
                if(this.x >= 20)
                {
                    this.x -= this.speed;
                    this.previous_x = this.x+ this.speed;

                    this.star_check_move = 1;
                    this.defence_check_move = 1;
                    this.jet_check_move =1;
                    this.shot_check_move = 1;
                   }else
                {
                    this.star_check_move = 2;
                    this.defence_check_move = 2;
                    this.jet_check_move =2;
                    this.shot_check_move = 2;
                   }
    
            }else if(keyIsDown(RIGHT_ARROW))
            {
                this.change_move = 1;
                this.checkDir = 2;
                if(this.x + 80 <= width-20)
                {
                    this.x += this.speed;
                    this.previous_x = this.x - this.speed;

                    this.star_check_move = 1;
                    this.defence_check_move = 1;
                    this.jet_check_move =1;
                    this.shot_check_move = 1;
                   }else
                {
                    this.star_check_move = 2;
                    this.defence_check_move = 2;
                    this.jet_check_move =2;
                    this.shot_check_move = 2;
                   }
            }else{
                this.checkDir = 0;
            }
        }
        if(keyIsDown(UP_ARROW))
        {
            if(this.y >= 55)
            {
                this.y -= this.speed*1.5;
            }else
            {
                this.y = 55;
            }
                
        }
        if(keyIsDown(DOWN_ARROW))
        {
            if(this.y + 80 <= height-55)
            {
                this.y += this.speed*1.5;
            }else
            {
                this.y = height - 80-55;
            }
        }
    
        if(this.star_check_move == 2 || this.defence_check_move == 2 || this.jet_check_move == 2)
        {
            if(this.x <= 20 )
            {
                if(keyIsDown(RIGHT_ARROW))
                {
                    this.x = 20;
                    this.star_check_move =0;
                    this.defence_check_move = 0;
                    this.jet_check_move =0;
                    this.shot_check_move = 0;
    
                }
                if(keyIsDown(LEFT_ARROW)&&keyIsDown(RIGHT_ARROW))
                {
                    this.star_check_move =2;
                    this.defence_check_move = 2;
                    this.jet_check_move =2;
                    this.shot_check_move = 2;
    
                }
            }
            if(this.x+80 >= width-20)
            {
                if(keyIsDown(LEFT_ARROW))
                {
                    this.x = width-20-80;
                    this.star_check_move =0;
                    this.defence_check_move = 0;
                    this.jet_check_move =0;
                    this.shot_check_move = 0;
                }
            }
        }
    }

    monster_stage_player_move(monster)
    {
        if(this.defence_check_move ==0 && this.jet_check_move ==0 && monster.water_check_move == 0 || monster.bomb_check_move == 0)  
        {
            if(keyIsDown(LEFT_ARROW))
            {
                this.change_move = 0;
                this.checkDir = 1;
                if(this.x >= 20)
                {
                    this.x -= this.speed;
                    this.previous_x = this.x+ this.speed;
                    this.defence_check_move = 1;
                    this.jet_check_move =1;
                    this.shot_check_move = 1;
                    monster.water_check_move = 1;
                    monster.bomb_check_move = 1;
                   }else
                {
                    this.defence_check_move = 2;
                    this.jet_check_move =2;
                    this.shot_check_move = 2;
                    monster.water_check_move = 2;
                    monster.bomb_check_move = 2;
                   }
    
            }else if(keyIsDown(RIGHT_ARROW))
            {
                this.change_move = 1;
                this.checkDir = 2;
                if(this.x + 80 <= width-20)
                {
                    this.x += this.speed;
                    this.previous_x = this.x - this.speed;
                    this.defence_check_move = 1;
                    this.jet_check_move =1;
                    this.shot_check_move = 1;
                    monster.water_check_move = 1;
                    monster.bomb_check_move = 1;
                   }else
                {
                    this.defence_check_move = 2;
                    this.jet_check_move =2;
                    this.shot_check_move = 2;
                    monster.water_check_move = 2;
                    monster.bomb_check_move = 2;
                   }
            }else{
                this.checkDir = 0;
            }
        }
        if(keyIsDown(UP_ARROW))
        {
            if(this.y >= 55)
            {
                this.y -= this.speed*1.5;
            }else
            {
                this.y = 55;
            }
                
        }
        if(keyIsDown(DOWN_ARROW))
        {
            if(this.y + 80 <= height-55)
            {
                this.y += this.speed*1.5;
            }else
            {
                this.y = height - 80-55;
            }
        }
    
        if(this.defence_check_move == 2 || this.jet_check_move == 2 || monster.water_check_move == 2 || monster.bomb_check_move == 2)
        {
            if(this.x <= 20 )
            {
                if(keyIsDown(RIGHT_ARROW))
                {
                    this.x = 20;
                    this.defence_check_move = 0;
                    this.jet_check_move =0;
                    this.shot_check_move = 0;
                    monster.water_check_move = 0;
                    monster.bomb_check_move = 0;
    
                }
                if(keyIsDown(LEFT_ARROW)&&keyIsDown(RIGHT_ARROW))
                {
                    this.defence_check_move = 2;
                    this.jet_check_move =2;
                    this.shot_check_move = 2;
                    monster.water_check_move = 2;
                    monster.bomb_check_move = 2;
    
                }
            }
            if(this.x+80 >= width-20)
            {
                if(keyIsDown(LEFT_ARROW))
                {
                    this.x = width-20-80;
                    this.defence_check_move = 0;
                    this.jet_check_move =0;
                    this.shot_check_move = 0;
                    monster.water_check_move = 0;
                    monster.bomb_check_move = 0;
                }
            }
        }
    }

    
    change_player_img_defence()
    {
        if(this.image_change == 0)
        {
            if(this.num_defence > 0)
            {
                if(keyCode == 68)
                {
                    this.image_change = 1;
                }
            }
        }
    }

    show_defence_time(img_defence)
    {  
        if(this.image_change == 1 || this.image_change == 4)
        {
            if(this.check_defence_num == 0)
            {
                this.num_defence -= 1;
                this.check_defence_num =1;
            }
            for(let i =280; i < 280 + this.defence_time*50; i+=50)
            {
                image(img_defence,i,753,40,40);
            }

            this.defence_frame += deltaTime/1000;
            
            if(this.check_defence_frame <= 10 )
            {   
                if(this.defence_frame >1)
                {
                    if(this.defence_time > 0)
                    {
                        this.defence_time -= 1;
                        this.check_defence_frame +=1;
                        this.defence_frame =0;
                    }
                }
            }
            if(this.defence_time == 0)
            {
                this.image_change = 0;
                this.defence_time=10;
                this.check_defence_frame=0;
                this.check_defence_num =0;
            }
        }
    }


    create_defence()
    {
        for(let i = 0; i <= this.total_defence; i++)
        {
            let coordinate = 
            {
                x : random(-600,width-100),
                y : random(55,height-40-55),
                z : 0
            };
            this.defence_arr.push(coordinate);
        }
    }

    add_defence_arr()
    {
        if(this.base_defence%this.total_defence==0)
        {
            if(this.check_add_defence_arr==0)
            {
                for(let i =0; i<this.total_defence; i++)
                {
                    let coordinate = 
                    {
                        x : random(-600,width-100),
                        y : random(55,height-40-55),
                        z : 0
                    };
                    this.defence_arr.push(coordinate);
                }
                this.check_add_defence_arr=1;
            }
        }
        if(this.base_defence%this.total_defence==2)
        {
            this.check_add_defence_arr=0;
        }
    }

    create_new_defence()
    {
        var defence_num=0;
        for(let i =0; i<this.defence_arr.length; i++)
            {
                if(this.defence_arr[i].z==1)
                {
                    defence_num+=1;
                }
            }
        if(defence_num<3)
        {
            this.new_defence_time += deltaTime/1000;
            if(this.new_defence_time > 3)
            {
                this.base_defence+=1;
                this.new_defence_time=0;
            }
        } 
    }

    defence_image(img_defence)
    {
        for (let j = 0; j < this.base_defence; j++)
        {   
            if(this.defence_arr[j].z == 0)
            {
                this.defence_arr[j].z = 1;
            }
            if(this.defence_arr[j].z == 1)
            {
                image(img_defence, this.defence_arr[j].x,this.defence_arr[j].y,40,40);
            }
        }
    }

    defence_move()
    {
        if(this.defence_check_move == 1)
        {
            if(this.x >= this.previous_x) //player move right
            {
                for(let i =0; i<this.defence_arr.length; i++)
                {
                    this.defence_arr[i].x -= this.speed;  //defence move left
                }
                this.defence_check_move = 0;
            }else if(this.x <= this.previous_x) //player move left
            {
                for(let i =0; i<this.defence_arr.length; i++)
                {
                    this.defence_arr[i].x += this.speed;  //defence move right
                }
                this.defence_check_move = 0;
            }
        }
    }

    defence_collision()
    {
        for (let i =0; i < this.defence_arr.length; i++)
        {
            if(this.defence_arr[i].z == 1)
            {
                if(dist(this.x+40,this.y+40,this.defence_arr[i].x+20,this.defence_arr[i].y+20)<=60)
                {
                    this.defence_arr[i].z = 2;
                }
            }
        }
    }

    count_defence(img_defence)
    {
        for (let i =0; i < this.defence_arr.length; i++)
        {
            if(this.defence_arr[i].z == 2)
            {
                this.defence_arr[i].z = 3;
                this.num_defence += 1;
            }
        }
        push();
        fill(255);
        textSize(40);
        text(this.num_defence,85,height-12);
        pop();
        image(img_defence,30,height-47,40,40);

    }

    change_player_img_jet()
    {
        if(this.image_change == 0)
        {
            if(this.num_jet > 0)
            {
                if(keyCode == 65)
                {
                    this.image_change = 2;
                }
            }
        }
    }

    show_jet_time(img_jet)
    {   
        if(this.image_change == 2 || this.image_change == 5)
        {
            if(this.check_jet_num == 0)
            {
                this.num_jet -= 1;
                this.check_jet_num =1;
            }
            for(let i =280; i < 280 + this.jet_time*50; i+=50)
            {
                image(img_jet,i,753,40,40);
            }

             this.jet_frame += deltaTime/1000;
            
            if(this.check_jet_frame <= 10 )
            {   
                if(this.jet_frame >1)
                {
                    if(this.jet_time > 0)
                    {
                        this.jet_time -= 1;
                        this.check_jet_frame +=1;
                        this.jet_frame =0;
                    }
                }
            }
            if(this.jet_time == 0)
            {
                this.image_change = 0;
                this.jet_time=10;
                this.check_jet_frame=0;
                this.check_jet_num =0;
            }
        }
    }

    create_jet()
    {
        for(let i = 0; i <= this.total_jet; i++)
        {
            let coordinate = 
            {
                x : random(-600,width-100),
                y : random(55,height-40-55),
                z : 0
            };
            this.jet_arr.push(coordinate);
        }
    }

    add_jet_arr()
    {
        if(this.base_jet%this.total_jet==0)
        {
            if(this.check_add_jet_arr==0)
            {
                for(let i =0; i<this.total_jet; i++)
                {
                    let coordinate = 
                    {
                        x : random(-600,width-100),
                        y : random(55,height-40-55),
                        z : 0
                    };
                    this.jet_arr.push(coordinate);
                }
                this.check_add_jet_arr=1;
            }
        }
        if(this.base_jet%this.total_jet==2)
        {
            this.check_add_jet_arr=0;
        }
    }

    create_new_jet()
    {
        var jet_num=0;
        for(let i =0; i<this.jet_arr.length; i++)
            {
                if(this.jet_arr[i].z==1)
                {
                    jet_num+=1;
                }
            }
        if(jet_num<3)
        {
            this.new_jet_time += deltaTime/1000;
            if(this.new_jet_time > 3)
            {
                this.base_jet+=1;
                this.new_jet_time=0;
            }
        } 
    }

    jet_image(img_jet)
    {
        for (let j = 0; j < this.base_jet; j++)
        {   
            if(this.jet_arr[j].z == 0)
            {
                this.jet_arr[j].z = 1;
            }
            if(this.jet_arr[j].z == 1)
            {
                image(img_jet, this.jet_arr[j].x,this.jet_arr[j].y,40,40);
            }
        }
    }

    jet_move()
    {
        if(this.jet_check_move == 1)
        {
            if(this.x >= this.previous_x) //player move right
            {
                for(let i =0; i<this.jet_arr.length; i++)
                {
                    this.jet_arr[i].x -= this.speed;  //jet move left
                }
                this.jet_check_move = 0;
            }else if(this.x <= this.previous_x) //player move left
            {
                for(let i =0; i<this.jet_arr.length; i++)
                {
                    this.jet_arr[i].x += this.speed;  //jet move right
                }
                this.jet_check_move = 0;
            }
        }
    }

    jet_collision()
    {
        for (let i =0; i < this.jet_arr.length; i++)
        {
            if(this.jet_arr[i].z == 1)
            {
                if(dist(this.x+40,this.y+40,this.jet_arr[i].x+20,this.jet_arr[i].y+20)<=60)
                {
                    this.jet_arr[i].z = 2;
                }
            }
        }
    }

    count_jet(img_jet)
    {
        for (let i =0; i < this.jet_arr.length; i++)
        {
            if(this.jet_arr[i].z == 2)
            {
                this.jet_arr[i].z = 3;
                this.num_jet += 1;
            }
        }
        push();
        fill(255);
        textSize(40);
        text(this.num_jet,205,height-12);
        pop();
        image(img_jet,150,height-47,40,40)
    }

    create_star()
    {
        for(let i = 0; i <= this.total_star; i++)
        {
            let coordinate = 
            {
                x : random(-500,width-100),
                y : random(55,height-40-55),
                z : 0
            };
            this.star_arr.push(coordinate);
        }
    }

    star_image(img_star)
    {
        for (let j = 0; j < this.base_star; j++)
        {   
            if(this.star_arr[j].z == 0)
            {
                this.star_arr[j].z = 1;
            }
            if(this.star_arr[j].z == 1)
            {
                image(img_star, this.star_arr[j].x,this.star_arr[j].y);
            }
        }
    }

    create_new_star()
    {
        var star_num=0;
        for(let i =0; i<this.star_arr.length; i++)
            {
                if(this.star_arr[i].z==1)
                {
                    star_num+=1;
                }
            }
        if(star_num<1)
        {
            this.new_star_time += deltaTime/1000;
            if(this.new_star_time > 1)
            {
                this.base_star+=1;
                this.new_star_time=0;
            }
        } 
    }

    star_move()
    {

        if(this.star_check_move == 1)
        {
            if(this.x >= this.previous_x) //player move right
            {
                for(let i =0; i<this.star_arr.length; i++)
                {
                    this.star_arr[i].x -= this.speed;  //star move left
                }
                this.star_check_move = 0;
            }else if(this.x <= this.previous_x) //player move left
            {
                for(let i =0; i<this.star_arr.length; i++)
                {
                    this.star_arr[i].x += this.speed;  //star move right
                }
                this.star_check_move = 0;
            }
        }
    }

    star_collision()
    {
        for (let i =0; i < this.star_arr.length; i++)
        {
            if(this.star_arr[i].z == 1)
            {
                if(dist(this.x+40,this.y+40,this.star_arr[i].x+20,this.star_arr[i].y+20)<=60)
                {
                    this.star_arr[i].z = 2;
                }
            }
        }
    }

    count_point(img_star)
    {
        for (let i =0; i < this.star_arr.length; i++)
        {
            if(this.star_arr[i].z == 2)
            {
                this.star_arr[i].z = 3;
                this.point += 1;

            }
        }
        push();
        fill(255);
        textSize(40);
        text(this.point+" / 10",85,45);
        pop();
        image(img_star,30,7,40,40)
    }

    change_player_img_shooting()
    {
        if(this.image_change == 0)
        {
            if(this.num_shot > 0)
            {
                if(keyIsDown(32))
                {
                    this.image_change = 3;
                }
            }
        }
    }

    change_player_defence_img_shooting()
    {
        if(this.image_change == 1)
        {
            if(this.num_shot > 0)
            {
                if(keyCode == 32)
                {
                    if(keyIsDown(32))
                    {
                        this.image_change = 4;
                    }
                }
            }
        }
    }

    change_player_jet_img_shooting()
    {
        if(this.image_change == 2)
        {
            if(this.num_shot > 0)
            {
                if(keyCode == 32)
                {
                    if(keyIsDown(32))
                    {
                        this.image_change = 5;
                    }
                }
            }
        }
    }

    create_shot()
    {
        for(let i = 0; i <= this.total_shot; i++)
        {
            let coordinate = 
            {
                x : random(-600,width-100),
                y : random(55,height-40-55),
                z : 0
            };
            this.shot_arr.push(coordinate);
        }
    }

    add_shot_arr()
    {
        if(this.base_shot%this.total_shot==0)
        {
            if(this.check_add_shot_arr==0)
            {
                for(let i =0; i<this.total_shot; i++)
                {
                    let coordinate = 
                    {
                        x : random(-600,width-100),
                        y : random(55,height-40-55),
                        z : 0
                    };
                    this.shot_arr.push(coordinate);
                }
                this.check_add_shot_arr=1;
            }
        }
        if(this.base_shot%this.total_shot==2)
        {
            this.check_add_shot_arr=0;
        }
    }

    create_new_shot()
    {
        var shot_num=0;
        for(let i =0; i<this.shot_arr.length; i++)
            {
                if(this.shot_arr[i].z==1)
                {
                    shot_num+=1;
                }
            }
        if(shot_num<3)
        {
            this.new_shot_time += deltaTime/1000;
            if(this.new_shot_time > 3)
            {
                this.base_shot+=1;
                this.new_shot_time=0;
            }
        } 
    }
    
    shooting_image(img_shot)
    {
        for (let j = 0; j < this.base_shot; j++)
        {   
            if(this.shot_arr[j].z == 0)
            {
                this.shot_arr[j].z = 1;
            }
            if(this.shot_arr[j].z == 1)
            {
                image(img_shot, this.shot_arr[j].x,this.shot_arr[j].y);
            }
        }
    }

    shot_move()
    {
        if(this.shot_check_move == 1)
        {
            if(this.x >= this.previous_x) //player move right
            {
                for(let i =0; i<this.shot_arr.length; i++)
                {
                    this.shot_arr[i].x -= this.speed;  //shot move left
                }
                this.shot_check_move = 0;
            }else if(this.x <= this.previous_x) //player move left
            {
                for(let i =0; i<this.shot_arr.length; i++)
                {
                    this.shot_arr[i].x += this.speed;  //shot move right
                }
                this.shot_check_move = 0;
            }
        }
    }

    shot_collision()
    {
        for (let i =0; i < this.shot_arr.length; i++)
        {
            if(this.shot_arr[i].z == 1)
            {
                if(dist(this.x+40,this.y+40,this.shot_arr[i].x+20,this.shot_arr[i].y+20)<=60)
                {
                    this.shot_arr[i].z = 2;
                }
            }
        }
    }

    count_shot(img_shot)
    {
        for (let i =0; i < this.shot_arr.length; i++)
        {
            if(this.shot_arr[i].z == 2)
            {
                this.shot_arr[i].z = 3;
                this.num_shot += 50;
            }
        }
        if(this.image_change == 3)
        {
            this.shot_frame += deltaTime/1000;   
            if(this.shot_frame > 0.15)
            {
                if(this.num_shot > 0)
                {
                    this.num_shot -= 1;
                    this.image_change = 0;
                    this.shot_frame =0;
                }
            }
        }
        if(this.image_change == 4)
        {
            this.shot_frame += deltaTime/1000;   
            if(this.shot_frame > 0.15)
            {
                if(this.num_shot > 0)
                {
                    this.num_shot -= 1;
                    this.image_change = 1;
                    this.shot_frame =0;
                }
            }
        }
        if(this.image_change == 5)
        {
            this.shot_frame += deltaTime/1000;   
            if(this.shot_frame > 0.15)
            {
                if(this.num_shot > 0)
                {
                    this.num_shot -= 1;
                    this.image_change = 2;
                    this.shot_frame =0;
                }
            }
        }
        push();
        fill(255);
        textSize(40);
        text(this.num_shot,1105,height-12);
        pop();
        image(img_shot,1050,height-47,40,40);
    }

    create_shooting_location_arr()
    {
        if(this.num_shot>0)
        {
            if(keyCode == 32){
                var direction = this.change_move;
                if(this.image_change==2||this.image_change==5)
                {
                    if(this.change_move == 0)
                    {
                        this.jet_shooting_arr.push(new Vec2(this.x,this.y+40,direction));
                        this.jet_shooting_arr.push(new Vec2(this.x+30,this.y+40+20,direction));
                        this.jet_shooting_arr.push(new Vec2(this.x+60,this.y+40+30,direction));
                        this.jet_shooting_arr.push(new Vec2(this.x+30,this.y+40-20,direction));
                        this.jet_shooting_arr.push(new Vec2(this.x+60,this.y+40-30,direction));

                    }else if(this.change_move == 1)
                    {
                        this.jet_shooting_arr.push(new Vec2(this.x+40+60,this.y+40,direction));
                        this.jet_shooting_arr.push(new Vec2(this.x+40+30,this.y+40+20,direction));
                        this.jet_shooting_arr.push(new Vec2(this.x+40,this.y+40+30,direction));
                        this.jet_shooting_arr.push(new Vec2(this.x+40+30,this.y+40-20,direction));
                        this.jet_shooting_arr.push(new Vec2(this.x+40,this.y+40-30,direction));
                    }
                }else
                {
                    if(this.change_move == 0)
                    {
                        this.shooting_location_arr.push(new Vec2(this.x,this.y+40,direction));
                    }else if(this.change_move == 1)
                    {
                        this.shooting_location_arr.push(new Vec2(this.x+80,this.y+40,direction));
                    }
                }
            }
        }
    }

    shooting_shot()
    {
        for(let i =0; i<this.shooting_location_arr.length; i++)
        {
            if(this.shooting_location_arr[i].x > 0-100 && this.shooting_location_arr[i].x < 1200+100)
            {
                if(this.shooting_location_arr[i].z == 0)
                {
                    this.shooting_location_arr[i].subtractFrom(this.shot_speed);
                }
                if(this.shooting_location_arr[i].z == 1)
                {
                    this.shooting_location_arr[i].addTo(this.shot_speed);
                }
                
            }
        }
        for(let i =0; i<this.jet_shooting_arr.length; i++)
        {
            if(this.jet_shooting_arr[i].x > 0-100 && this.jet_shooting_arr[i].x < 1200+100)
            {
                if(this.jet_shooting_arr[i].z == 0)
                {
                    this.jet_shooting_arr[i].subtractFrom(this.shot_speed);
                }
                if(this.jet_shooting_arr[i].z == 1)
                {
                    this.jet_shooting_arr[i].addTo(this.shot_speed);
                }
                
            }
        }
    }

    real_shot(img_player_shot)
    {
        if(this.image_change == 5 || this.image_change == 2)
        {
            for(let i = 0; i<this.jet_shooting_arr.length; i++)
            {
                image(img_player_shot,this.jet_shooting_arr[i].x-10,this.jet_shooting_arr[i].y-10,20,20);
            }
        }else
        {
            for(let i =0; i<this.shooting_location_arr.length; i++)
            {
                image(img_player_shot,this.shooting_location_arr[i].x-15,this.shooting_location_arr[i].y-15,30,30);
            }
        }
    }

    gauge_bar()
    {
        push();
        fill(255);
        textSize(45);
        text(this.gauge_score,567,45);
        pop();

        push();
        fill('red');
        noStroke();
        rect(this.gauge_x+this.gauge_change_x,7,this.gauge_length,40);
        pop();

        push();
        noFill();
        stroke(255);
        strokeWeight(3);
        rect(650,6,530,42);
        pop();
            
        this.gauge_length=floor(map(this.gauge_score, 0,100, 0,530,true));
        this.gauge_change_x=530-this.gauge_length;

        if(this.gauge_score<0)
        {
            this.gauge_score=0;
        }
    }

    particle_shot_collision(explosion) 
    {
        if(this.shooting_location_arr.length>0)
        {
            for(var i = 0; i < this.shooting_location_arr.length; i++)
            {
                if(this.shooting_location_arr[i].check_particle_shot_collision(explosion))
                {
                    this.shooting_location_arr.splice(i,1);
                }
            }
        }
        if(this.jet_shooting_arr.length>0)
        {
            for(var i = 0; i < this.jet_shooting_arr.length; i++)
            {
                if(this.jet_shooting_arr[i].check_particle_shot_collision(explosion))
                {
                    this.jet_shooting_arr.splice(i,1);
                }
            }
        }
    }

    planet_shot_collision(planet_arr)
    {
        if(this.shooting_location_arr.length>0)
        {
            for(var i = 0; i < this.shooting_location_arr.length; i++)
            {
                if(this.shooting_location_arr[i].check_planet_shot_collision(planet_arr))
                {
                    this.shooting_location_arr.splice(i,1);
                }
            }
        }
        if(this.jet_shooting_arr.length>0)
        {
            for(var i = 0; i < this.jet_shooting_arr.length; i++)
            {
                if(this.jet_shooting_arr[i].check_planet_jet_shot_collision(planet_arr))
                {
                    this.jet_shooting_arr.splice(i,1);
                }
            }
        }
    }

    bomb_shot_collision(bomb_arr)
    {
        if(this.shooting_location_arr.length>0)
        {
            for(var i = 0; i < this.shooting_location_arr.length; i++)
            {
                if(this.shooting_location_arr[i].check_bomb_shot_collision(bomb_arr))
                {
                    this.shooting_location_arr.splice(i,1);
                }
            }
        }
        if(this.jet_shooting_arr.length>0)
        {
            for(var i = 0; i < this.jet_shooting_arr.length; i++)
            {
                if(this.jet_shooting_arr[i].check_bomb_jet_shot_collision(bomb_arr))
                {
                    this.jet_shooting_arr.splice(i,1);
                }
            }
        }
    }


    player_planet_collision(planet_arr)
    {
        for(let i =0; i<planet_arr.length; i++)
        {
            if(this.check_player_planet_collision==0)
            {
                if(planet_arr[i].z==1)
                {
                    if(dist(this.x+40,this.y+40,planet_arr[i].x+40,planet_arr[i].y+40)<=80)
                    {
                        this.check_player_planet_collision=1;
                    }
                }

            }if(this.check_player_planet_collision==1)
            {
                if(this.gauge_score>0)
                {
                    if(this.image_change == 0 || this.image_change == 2 || this.image_change == 3 || this.image_change == 5)
                    this.gauge_score-=7;
                }
                this.check_player_planet_collision=2;
                this.planet_collision_i=i;
                this.check_planet_collision_i=1;
            }
        }
        if(this.check_planet_collision_i==1)
        {
            if(this.check_player_planet_collision==2)
            {
                if(dist(this.x+40,this.y+40,planet_arr[this.planet_collision_i].x+40,planet_arr[this.planet_collision_i].y+40)>80)
                {
                    this.check_player_planet_collision=0;
                    this.check_planet_collision_i=0;
                }
            }
        }
    }

    player_bomb_collision(bomb_arr)
    {
        for(let i =0; i<bomb_arr.length; i++)
        {
            if(this.check_player_bomb_collision==0)
            {
                if(bomb_arr[i].z==1)
                {
                    if(dist(this.x+40,this.y+40,bomb_arr[i].x+40,bomb_arr[i].y+40)<=80)
                    {
                        this.check_player_bomb_collision=1;
                    }
                }

            }if(this.check_player_bomb_collision==1)
            {
                if(this.gauge_score>0)
                {
                    if(this.image_change == 0 || this.image_change == 2 || this.image_change == 3 || this.image_change == 5)
                    this.gauge_score-=7;
                }
                this.check_player_bomb_collision=2;
                this.bomb_collision_i=i;
                this.check_bomb_collision_i=1;
            }
        }
        if(this.check_bomb_collision_i==1)
        {
            if(this.check_player_bomb_collision==2)
            {
                if(dist(this.x+40,this.y+40,bomb_arr[this.bomb_collision_i].x+40,bomb_arr[this.bomb_collision_i].y+40)>80)
                {
                    this.check_player_bomb_collision=0;
                    this.check_bomb_collision_i=0;
                }
            }
        }
    }
}
    

