class player_class
{
    constructor(x,y,image_change,check_star,img_bg)
    {
        this.x = x;
        this.y = y;
        this.image_change = image_change;
        this.point = 0;
        this.check_star = check_star;
        this.star_arr=[];
        this.total_star = random(100);
        this.change_move = 0;
        this.bg = img_bg;
        this.base_star = random(3,8);
        
    }

    image(player_left,player_right, defence_left,defence_right ,zet_left,zet_right)
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

    move()
    {
        if(keyIsDown(LEFT_ARROW))
        {
            this.change_move = 0;
            if(this.x >= 0)
            {
                this.x -= 3;
            }else
            {
                this.x = 0;
            }

        }else if(keyIsDown(RIGHT_ARROW))
        {
            this.change_move = 1;
            if(this.x + 80 <= width)
            {
                this.x += 3;
            }else
            {
                this.x = width-80;
            }
        }
        if(keyIsDown(UP_ARROW))
        {
            if(this.y >= 0)
            {
                this.y -= 3;
            }else
            {
                this.y = 0;
            }
        }else if(keyIsDown(DOWN_ARROW))
        {
            if(this.y + 80 <= height)
            {
                this.y += 3;
            }else
            {
                this.y = height - 80;
            }
        }
    }
    
    defence()
    {
        if(keyCode == 68)
        {
            this.image_change = 1;
        }
    }

    zet()
    {
        if(keyCode == 65)
        {
            this.image_change = 2;
        }
    }

    create_star()
    {
        for(let i = 0; i <= this.total_star; i++)
        {
            let coordinate = 
            {
                x : random(width-250),
                y : random(height-40),
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
                console.log(this.star_arr[0].z);
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
    

