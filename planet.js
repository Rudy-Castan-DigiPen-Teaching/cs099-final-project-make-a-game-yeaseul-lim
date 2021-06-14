class planet_class
{
    constructor()
    {
        this.player_x;
        this.player_y;
        this.planet_arr =[];
        this.total_planet = 30;
        this.base_planet = floor(random(5,8));
        this.planet_check_move = 0;
    }

    create_planet()
    {
        for(let i = 0; i<=this.total_planet; i++)
        {
            let coordinate = 
            {
                x : random(-1000,width-250),
                y : random(55,height-40-55),
                z : 0
            };
            this.planet_arr.push(coordinate);
        }
    }

    planet_image(img_planet)
    {
        for (let j = 0; j < this.base_planet; j++)
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

    planet_move(current_player_x,current_player_y)
    {
        this.player_x = current_player_x;
        this.player_y = current_player_y;

        if(this.planet_check_move == 1)
        {
            if(this.x >= this.current_x) //player move right
            {
                for(let i =0; i<this.planet_arr.length; i++)
                {
                    this.planet_arr[i].x -= this.speed;  //planet move left
                }
                this.planet_check_move = 0;
            }else if(this.x <= this.current_x) //player move left
            {
                for(let i =0; i<this.planet_arr.length; i++)
                {
                    this.planet_arr[i].x += this.speed;  //planet move right
                }
                this.planet_check_move = 0;
            }
        }
    }


}