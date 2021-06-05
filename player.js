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
        this.check_defence_time = 0;
        //zet
        this.num_zet = 0;
        this.zet_arr=[];
        this.total_zet = floor(random(30,50));
        this.base_zet = floor(random(5,7));
        this.zet_check_move = 0; //Control zet movement according to player's movement
        this.zet_time = 10;
    }

    
    player_image(player_left,player_right, defence_left,defence_right ,zet_left,zet_right)
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
        
        //defence_player
        if(this.image_change == 1)
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
                }else
                {
                    this.star_check_move = 2;
                    this.defence_check_move = 2;
                    this.zet_check_move =2;
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
                }else
                {
                    this.star_check_move = 2;
                    this.defence_check_move = 2;
                    this.zet_check_move =2;
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
                }
                if(keyIsDown(LEFT_ARROW)&&keyIsDown(RIGHT_ARROW))
                {
                    this.star_check_move =2;
                    this.defence_check_move = 2;
                    this.zet_check_move =2;
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
                }
            }
        }
    }
    
    change_player_img_defence()
    {
        if(this.num_defence > 0)
        {
            if(keyCode == 68)
            {
                this.image_change = 1;
                if(this.check_defence_time == 0)
                {
                    this.check_defence_time = 1;
                }
            }
        }
    }

    show_defence_time(millisecond)
    {   
        const timeOffSet = 0;
        //console.log(millisecond);
        if(this.image_change == 1)
        {   
            if(this.check_defence_time ==1)
            {
                let time = int(millisecond);
                this.check_defence_time = 2;
                console.log(time);
                console.log(millisecond);
                console.log("들어옴");
            }
            for(let i =0; i < this.defence_time; i++)
            {
                for(let j = 500; j<1000; j+=50)
                {
                    push();
                    fill(255);
                    rect(j,750,40,40);
                    pop();
                }
            }
            //console.log(millisecond-time);
            if(millisecond-time-timeOffSet > 1000)
            {
                this.defence_time -= 1;
                this.timeOffSet = millisecond;
                console.log(this.timeOffSet);
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

    defence_image(img_defence,millisecond)
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
        if(this.num_zet > 0)
        {
            if(keyCode == 65)
            {
                this.image_change = 2;
            }
        }
    }

    show_zet_time()
    {
        if(this.image_change == 2)
        {
            for(let i =0; i < this.zet_time; i++)
            {
                for(let j = 500; j<1000; j+=50)
                {
                    push();
                    fill(255);
                    rect(j,750,40,40);
                    pop();
                }

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

    zet_image(img_zet,millisecond)
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

    star_image(img_star,millisecond)
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
}
    

