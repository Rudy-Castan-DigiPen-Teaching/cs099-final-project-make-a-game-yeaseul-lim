class player_class
{
    constructor(x,y,img_bg)
    {
        //player
        this.x = x;
        this.y = y;
        this.image_change =0
        this.change_move = 0;
        this.current_x =x;
        this.speed = 3;
        //star
        this.point = 0;
        this.star_arr=[];
        this.total_star = floor(random(50,70));
        this.bg = img_bg;
        this.base_star = floor(random(10,15));
        this.star_check_move = 0; //Control star movement according to player's movement
        //defence
        this.num_defence = 0;
        this.defence_arr=[];
        this.total_defence = floor(random(30,50));
        this.base_defence = floor(random(5,7));
        this.defence_check_move = 0; //Control defence movement according to player's movement
        this.defence_time = 10;
        this.check_defence_num = 0;
        this.defence_frame = 0;
        this.check_defence_frame = 0;
        //zet
        this.num_zet = 0;
        this.zet_arr=[];
        this.total_zet = floor(random(30,50));
        this.base_zet = floor(random(5,7));
        this.zet_check_move = 0; //Control zet movement according to player's movement
        this.zet_time = 10;
        this.check_zet_num = 0;
        this.zet_frame = 0;
        this.check_zet_frame = 0;

        //shooting
        this.num_shot = 50;
        this.shot_arr=[];
        this.total_shot =floor(random(30,50));
        this.base_shot = floor(random(5,7));
        this.shot_check_move = 0; //Control zet movement according to player's movement
        this.shot_time = 10;
        this.check_shot_num = 0;
        this.shot_frame = 0;
        this.check_shot_frame = 0;

        //attack
        this.shooting_location_arr=[];
        this.shot_speed = new Vec2(8,0);
    }

    
    player_image(player_left,player_right, defence_left,defence_right ,zet_left,zet_right ,shooting_left,shooting_right, defence_shooting_left,defence_shooting_right, zet_shooting_left,zet_shooting_right)
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
        }
        
        if(this.image_change == 1) //defence_player
        {
            if(this.change_move == 0) //left
            {
                image(defence_left,this.x,this.y);

            }else if(this.change_move == 1) //right
            {
                image(defence_right,this.x,this.y);
            }
        }else if(this.image_change == 2) //zet_player
        {
            if(this.change_move == 0) //left
            {
                image(zet_left,this.x,this.y);

            }else if(this.change_move == 1) //right
            {
                image(zet_right,this.x,this.y);
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
        }else if(this.image_change == 5) //zet_shooting_player
        {
            if(this.change_move == 0) //left
            {
                image(zet_shooting_left,this.x,this.y);

            }else if(this.change_move == 1) //right
            {
                image(zet_shooting_right,this.x,this.y);
            }
        }

    }

    player_move()
    {
        if(this.star_check_move == 0 && this.defence_check_move ==0 && this.zet_check_move ==0)
        {
            if(keyIsDown(LEFT_ARROW))
            {
                this.change_move = 0;
                if(this.x >= 20)
                {
                    this.x -= this.speed;
                    this.current_x = this.x+ this.speed;

                    this.star_check_move = 1;
                    this.defence_check_move = 1;
                    this.zet_check_move =1;
                    this.shot_check_move = 1;
                }else
                {
                    this.star_check_move = 2;
                    this.defence_check_move = 2;
                    this.zet_check_move =2;
                    this.shot_check_move = 2;
                }
    
            }else if(keyIsDown(RIGHT_ARROW))
            {
                this.change_move = 1;
                if(this.x + 80 <= width-20)
                {
                    this.x += this.speed;
                    this.current_x = this.x - this.speed;

                    this.star_check_move = 1;
                    this.defence_check_move = 1;
                    this.zet_check_move =1;
                    this.shot_check_move = 1;
                }else
                {
                    this.star_check_move = 2;
                    this.defence_check_move = 2;
                    this.zet_check_move =2;
                    this.shot_check_move = 2;
                }
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
    
        if(this.star_check_move == 2 || this.defence_check_move == 2 || this.zet_check_move == 2)
        {
            if(this.x <= 20 )
            {
                if(keyIsDown(RIGHT_ARROW))
                {
                    this.x = 20;
                    this.star_check_move =0;
                    this.defence_check_move = 0;
                    this.zet_check_move =0;
                    this.shot_check_move = 0;
                }
                if(keyIsDown(LEFT_ARROW)&&keyIsDown(RIGHT_ARROW))
                {
                    this.star_check_move =2;
                    this.defence_check_move = 2;
                    this.zet_check_move =2;
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
                    this.zet_check_move =0;
                    this.shot_check_move = 0;
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

    show_defence_time()
    {  
        if(this.image_change == 1 || this.image_change == 4)
        {
            if(this.check_defence_num == 0)
            {
                this.num_defence -= 1;
                this.check_defence_num =1;
            }
            for(let i =500; i < 500 + this.defence_time*50; i+=50)
            {
                push();
                fill(255);
                rect(i,753,40,40);
                pop();
                //console.log(this.defence_frame);
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
                x : random(-1000,width-250),
                y : random(55,height-40-55),
                z : 0
            };
            this.defence_arr.push(coordinate);
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
                image(img_defence, this.defence_arr[j].x,this.defence_arr[j].y);
            }
        }
    }

    defence_move()
    {
        if(this.defence_check_move == 1)
        {
            if(this.x >= this.current_x) //player move right
            {
                for(let i =0; i<this.defence_arr.length; i++)
                {
                    this.defence_arr[i].x -= this.speed;  //defence move left
                }
                this.defence_check_move = 0;
            }else if(this.x <= this.current_x) //player move left
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

    count_defence()
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
        text("DEFENCE : "+this.num_defence,20,height-10);
        pop();
    }

    change_player_img_zet()
    {
        if(this.image_change == 0)
        {
            if(this.num_zet > 0)
            {
                if(keyCode == 65)
                {
                    this.image_change = 2;
                }
            }
        }
    }

    show_zet_time()
    {   
        if(this.image_change == 2 || this.image_change == 5)
        {
            if(this.check_zet_num == 0)
            {
                this.num_zet -= 1;
                this.check_zet_num =1;
            }
            for(let i =500; i < 500 + this.zet_time*50; i+=50)
            {
                push();
                fill(255);
                rect(i,753,40,40);
                pop();
            }

             this.zet_frame += deltaTime/1000;
            
            if(this.check_zet_frame <= 10 )
            {   
                if(this.zet_frame >1)
                {
                    if(this.zet_time > 0)
                    {
                        this.zet_time -= 1;
                        this.check_zet_frame +=1;
                        this.zet_frame =0;
                    }
                }
            }
            if(this.zet_time == 0)
            {
                console.log(this.zet_time);
                this.image_change = 0;
                this.zet_time=10;
                this.check_zet_frame=0;
                this.check_zet_num =0;
            }
        }
    }

    create_zet()
    {
        for(let i = 0; i <= this.total_zet; i++)
        {
            let coordinate = 
            {
                x : random(-1000,width-250),
                y : random(55,height-40-55),
                z : 0
            };
            this.zet_arr.push(coordinate);
        }
    }

    zet_image(img_zet)
    {
        for (let j = 0; j < this.base_zet; j++)
        {   
            if(this.zet_arr[j].z == 0)
            {
                this.zet_arr[j].z = 1;
            }
            if(this.zet_arr[j].z == 1)
            {
                image(img_zet, this.zet_arr[j].x,this.zet_arr[j].y);
            }
        }
    }

    zet_move()
    {
        if(this.zet_check_move == 1)
        {
            if(this.x >= this.current_x) //player move right
            {
                for(let i =0; i<this.zet_arr.length; i++)
                {
                    this.zet_arr[i].x -= this.speed;  //zet move left
                }
                this.zet_check_move = 0;
            }else if(this.x <= this.current_x) //player move left
            {
                for(let i =0; i<this.zet_arr.length; i++)
                {
                    this.zet_arr[i].x += this.speed;  //zet move right
                }
                this.zet_check_move = 0;
            }
        }
    }

    zet_collision()
    {
        for (let i =0; i < this.zet_arr.length; i++)
        {
            if(this.zet_arr[i].z == 1)
            {
                if(dist(this.x+40,this.y+40,this.zet_arr[i].x+20,this.zet_arr[i].y+20)<=60)
                {
                    this.zet_arr[i].z = 2;
                }
            }
        }
    }

    count_zet()
    {
        for (let i =0; i < this.zet_arr.length; i++)
        {
            if(this.zet_arr[i].z == 2)
            {
                this.zet_arr[i].z = 3;
                this.num_zet += 1;
            }
        }
        push();
        fill(255);
        textSize(40);
        text("ZET : "+this.num_zet,300,height-10);
        pop();
    }

    create_star()
    {
        for(let i = 0; i <= this.total_star; i++)
        {
            let coordinate = 
            {
                x : random(-1000,width-250),
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

    star_move()
    {
        if(this.star_check_move == 1)
        {
            if(this.x >= this.current_x) //player move right
            {
                for(let i =0; i<this.star_arr.length; i++)
                {
                    this.star_arr[i].x -= this.speed;  //star move left
                }
                this.star_check_move = 0;
            }else if(this.x <= this.current_x) //player move left
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

    count_point()
    {
        for (let i =0; i < this.star_arr.length; i++)
        {
            if(this.star_arr[i].z == 2)
            {
                this.star_arr[i].z = 3;
                this.point += 100;
            }
        }
        push();
        fill(255);
        textSize(40);
        text("POINT : "+this.point,20,50);
        pop();
    }

    change_background()
    {
        
        if(this.point == 200)
        {
            return this.bg = img_background_1000;

        }else if(this.point == 300)
        {
            return this.bg = img_background_2000;

        }else if(this.point == 400)
        {
            return this.bg = img_background_3000;
            
        }
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

    change_player_zet_img_shooting()
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
                x : random(-1000,width-250),
                y : random(55,height-40-55),
                z : 0
            };
            this.shot_arr.push(coordinate);
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
            if(this.x >= this.current_x) //player move right
            {
                for(let i =0; i<this.shot_arr.length; i++)
                {
                    this.shot_arr[i].x -= this.speed;  //shot move left
                }
                this.shot_check_move = 0;
            }else if(this.x <= this.current_x) //player move left
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

    count_shot()
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
        text("SHOT : "+this.num_shot,300,50);
        pop();
    }

    create_shooting_location_arr()
    {
        if(this.num_shot>0)
        {
            if(keyCode == 32){
                var direction = this.change_move;
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
    }

    real_shot()
    {
        for(let i =0; i<this.shooting_location_arr.length; i++)
        {
            if(this.image_change == 5 || this.image_change == 2) //zet attack
            {
                if(this.shooting_location_arr[i].z == 0) //left
                {
                    //center
                    circle(this.shooting_location_arr[i].x,this.shooting_location_arr[i].y,20);
                    //above
                    circle(this.shooting_location_arr[i].x+30,this.shooting_location_arr[i].y-20,20);
                    circle(this.shooting_location_arr[i].x+60,this.shooting_location_arr[i].y-30,20);
                    //below
                    circle(this.shooting_location_arr[i].x+30,this.shooting_location_arr[i].y+20,20);
                    circle(this.shooting_location_arr[i].x+60,this.shooting_location_arr[i].y+30,20);

                }else if(this.shooting_location_arr[i].z == 1) //right
                {
                    //center
                    circle(this.shooting_location_arr[i].x,this.shooting_location_arr[i].y,20);
                    //above
                    circle(this.shooting_location_arr[i].x-30,this.shooting_location_arr[i].y-20,20);
                    circle(this.shooting_location_arr[i].x-60,this.shooting_location_arr[i].y-30,20);
                    //below
                    circle(this.shooting_location_arr[i].x-30,this.shooting_location_arr[i].y+20,20);
                    circle(this.shooting_location_arr[i].x-60,this.shooting_location_arr[i].y+30,20);
                }
            }
            else
            {
                circle(this.shooting_location_arr[i].x,this.shooting_location_arr[i].y,30);
            }
            
        }
    }

}
    

