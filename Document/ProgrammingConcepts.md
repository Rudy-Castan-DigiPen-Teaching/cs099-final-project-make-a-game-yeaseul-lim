Name       : Yeaseul Lim <br>
Assignment : Make a Game <br>
Course     : CS099 <br>
Spring 2021

# Programming Concepts
## topics
### 1. Shapes
    Shape is an important thing that users can intuitively know before checking properties accurately. Only when I use the appropriate shape can I easily convey what information I want to convey to the user.
- line : To divide the area of the screen, four lines were used to create a rectangle.
    - Area where the player's character can move (inner of a rectangle made of lines)
    - An area that shows stars and items collected by the player, item time, number of bullets, and player's hp (outside a rectangle made of lines)<br>
        ```javascript
            line(20,55, width-20,55);<br>
            line(20,55,20,height-55);<br>
            line(20,height-55, width-20,height-55);<br>
            line(width-20,55,width-20,height-55);
        ```

- rect : Using rectangles to show HP of player, monsters, planets, and bombs.
    - I made two rectangles in the same position to show how much the player and monster's hp decreased compared to the initial value, one with the same width from beginning to end, and the other with smaller rectangles every time the player and monster wear damage. So the player can see at a glance how much monster and player's hp have decreased.<br>

        #### Player HP 
        ```javascript
            rect(this.gauge_x+this.gauge_change_x,7,this.gauge_length,40);
            rect(650,6,530,42);
        ```
        #### Monster HP 
        ```javascript
            rect(this.gauge_x+this.gauge_change_x,7,this.gauge_length,40);
            rect(650,6,530,42);
        ```
        <br>

    - The planet's and bomb's hp shows that each time the damage is done, the square width is smaller than the initial value.<br>

        #### Planet HP 
        ```javascript
            rect(this.planet_arr[j].x,this.planet_arr[j].y-15,this.planet_arr[j].length,8);
        ```
        #### Bomb HP
        ```javascript
            rect(this.bomb_arr[j].x,this.bomb_arr[j].y-15,this.bomb_arr[j].length,8);
        ```



### 2. Colors
    Colors let users know what to see first and what's important. It is therefore important to choose a color.
- white : The background of the game is dark because it is space. So I used white to make it more visible.

    - fill (255) : The color of the text, which shows the number of stars, defense items, jet items, HP of the player, and the number of bullets left on the screen, is white. <br>
        ```javascript
            fill(255);
            textSize(40);
            text(this.num_defence,85,height-12);
        ```
    - stroke (255) : It was used to draw rectangles showing HP's initial size and to draw lines dividing areas of the screen.<br>
        ```javascript
            stroke(255);
            line(20,55, width-20,55);
            line(20,55,20,height-55);
            line(20,height-55, width-20,height-55);   
            line(width-20,55,width-20,height-55);
        ```

- red : Because HP is an important game, I used red, which is visible on a dark background and more visible than white.
    - fill ('red') : It was used to fill in all HP rectangles except those representing the initial HP.<br>

        #### fill ('red')
        ```javascript
            fill('red');
            noStroke();
            rect(this.gauge_x+this.gauge_change_x,7,this.gauge_length,40);
        ```
### 3. Variables
    Variables show what properties are in the object I want to create. This can be useful in creating functions. So I think it is important to name variables.
- Variables used by player_class
    - Variables related to the movement of player characters
        - x , y : The current x and y coordinates of the player.
        - previous_x : The player's previous x-coordinates.
        - base_star : The number of stars on the first screen.

        ```javascript
            //Received x,y from the constructor.
            this.x = x;
            this.y = y;
            this.base_star = 1;
        ```
- Variables used by planet_class
    - setup_explosion_time : The time interval at which the planet explodes.

    
        ```javascript
            //Received setup_explosion_time from the constructor.
           this.setup_explosion_time = setup_explosion_time;
        ```
- Variables used by monster_class
    - num_particles : The number of particles produced when a bomb explodes.

        ```javascript
            //Received num_particles from the constructor.
           this.num_particles = num_particles;
        ```

### 4. Conditional Statements
    Since code is executed every frame, conditional statements can be made when to execute code that is not always supposed to be executed. Conditional statements must meet the conditions before they can be executed. Therefore, conditional statements were all used that should be implemented only in certain circumstances. For example, move the player to the left only when the left side of the rudder is pressed.
- Conditional Statements used by player_class
    - Conditional statements that change the player's direction and move the player according to the direction key you press : When the user presses the up or down direction key, the speed value of the player is subtracted or added to the y variable, and when the left or right direction key is pressed, the speed value is subtracted or added to the x variable.
        ```javascript
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
        
                }
        ```
### 5. Loops
    The loop repeats from a specified number to a specified range. So I don't have to write a lot of code one by one. Therefore, I have to use the loop well because it is efficient and more visible.

- I used loops to check the coordinates in the array to see if there was a conflict and to put coordinates in the array.

    - Use loops to create arrays of stars, items, bullets, planets, particles, bombs, and trap coordinates.
            
        ```javascript
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
        ```

    - Used loops to check if player,planets, particles, monsters, traps, and bombs collide.4
        ```javascript
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
        ```
### 6. Functions
    
- Functions used by player_class
    - player_image : A function that changes the player's image according to the player's movement.
        ```javascript
             player_image (player_left,player_right, defence_left,defence_right ,jet_left,jet_right ,shooting_left,shooting_right, defence_shooting_left,defence_shooting_right, jet_shooting_left,jet_shooting_right)
            {
                if(this.image_change == 0) //basic player
                {
                    if(this.change_move == 0) //left
                    {
                        image(player_left,this.x,this.y);

                    }else if(this.change_move == 1) //right
                    {
                        image(player_right,this.x,this.y);
                    }
                }
                else if(this.image_change == 1) //defence_player
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
        ```
### 7. Classes
- player_class : 

- planet_class
- monster_class
- Vec2
- particle

### 8. Arrays
> 