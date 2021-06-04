class player_class
{
    constructor(x,y,image_change,check_star)
    {
        this.x = x;
        this.y = y;
        this.image_change = image_change;
        this.point;
        this.check_star = check_star;
        this.star_arr=[];
        this.star_num = random(3,8);
        this.exist = 0;
        this.change_move = 0;
    }

    image(player_left,player_right, defence_left,defence_right )
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

    star_image(img_star,millisecond)
    {
        
        if(this.check_star == 0)
        {
            for(let i = 0; i <= this.star_num; i++)
            {
                let coordinate = 
                {
                    x : random(width-250),
                    y : random(height-40),
                    z : this.exist
                };
                this.star_arr.push(coordinate);
            }
            this.check_star = 1;
        }

        for (let j = 0; j < this.star_arr.length; j++)
        {   
            if(this.star_arr[j].z == 0)
            {
                image(img_star, this.star_arr[j].x,this.star_arr[j].y);
            }
            //console.log(this.star_arr[j].z);
        }
    
        // if (millisecond > 5000)
        // {
        //     this.star_arr.push(coordinate);
        //     image(img_star, this.star_arr[this.star_num+1].x,this.star_arr[this.star_num+1].y);
        // }
        // if (millisecond > 2000)
        // {
        //     this.star_arr.push(coordinate);
        //     image(img_star, this.star_arr[this.star_num].x,this.star_arr[this.star_num].y);
        // }

    }

    star_collision()
    {
        for (let i =0; i < this.star_arr.length; i++)
        {
            if((this.x + 30 - this.star_arr[i].x+20)*(this.x+30 - this.star_arr[i].x+20)+(this.y+30 - this.star_arr[i].y+20)*(this.y+30 - this.star_arr[i].y+20) <= 61*61)
            {
                console.log("부딫힘");
                this.star_arr[i].z = 1;
            }
        }
        
    }
}    

