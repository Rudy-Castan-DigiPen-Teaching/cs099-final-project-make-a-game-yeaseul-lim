// Name       : Yeaseul Lim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

let music;
//background_img
let img_bg;
let img_main_menu_bg;
let img_background;
let img_tutorial_bg;
let img_fail_1_bg;
let img_fail_2_bg;
let img_fail_3_bg;
let img_win_1_bg;
let img_win_2_bg;
let img_win_3_bg;
let img_story_bg;
let img_ending_bg;
//player img
let img_player_left;
let img_player_right;
let img_player_shoot_left;
let img_player_shoot_right;
let img_player_defence_shoot_left;
let img_player_defence_shoot_right;
let img_player_jet_shoot_left;
let img_player_jet_shoot_right;
let img_player_defence_left;
let img_player_defence_right;
let img_player_jet_left;
let img_player_jet_right;
//item img
let img_star; 
let img_defence;
let img_jet;
let img_shot;
let img_planet;
//button img
let img_start_button;
let img_tutorial_button;
let img_story_button;
let img_back_button;
let img_restart_button;
let img_main_menu_button;
let img_next_button;
//monster1
let img_monster1_left;
let img_monster1_right;
let img_monster1_mad_left;
let img_monster1_mad_right;
let img_monster1_heart_left;
let img_monster1_heart_right;
let img_water_bomb;
let img_water;
//monster2
let img_monster2_left;
let img_monster2_right;
let img_monster2_mad_left;
let img_monster2_mad_right;
let img_monster2_heart_left;
let img_monster2_heart_right;
let img_fire_bomb;
let img_fire;
//monster3
let img_monster3_left;
let img_monster3_right;
let img_monster3_mad_left;
let img_monster3_mad_right;
let img_monster3_heart_left;
let img_monster3_heart_right;
let img_light_bomb;
let img_light;
//particle
let img_planet_particle;
let img_water_particle;
let img_fire_particle;
let img_light_particle;
let img_player_shot;


//screen
let MAIN_MENU = 0;
let TUTORIAL_SCREEN = 1;
let STORY_SCREEN = 2;
let STAGE_1_SCREEN = 3;
let STAGE_1_WIN_SCREEN = 4;
let STAGE_2_SCREEN = 5;
let STAGE_2_WIN_SCREEN = 6;
let STAGE_3_SCREEN = 7;
let STAGE_3_WIN_SCREEN =8;
let ENDING_SCREEN = 9;
let FAIL_1_SCREEN = 10;
let FAIL_2_SCREEN = 11;
let FAIL_3_SCREEN = 12;
let MONSTER_1_SCREEN = 13;
let MONSTER_2_SCREEN = 14;
let MONSTER_3_SCREEN = 15;

let CURRENT_SCREEN = MAIN_MENU;

function preload()
{
    music = loadSound('media/01 Adventure Awaits (LOOP).wav');
    //background
    img_background = loadImage('media/basic_background.jpg');
    img_main_menu_bg = loadImage('media/main_menu.jpg');
    img_tutorial_bg = loadImage('media/tutorial_background.jpg');
    img_fail_1_bg = loadImage('media/stage_1_fail.jpg');
    img_fail_2_bg = loadImage('media/stage_2_fail.jpg');
    img_fail_3_bg = loadImage('media/stage_3_fail.jpg');
    img_win_1_bg = loadImage('media/stage_1_win.jpg');
    img_win_2_bg = loadImage('media/stage_2_win.jpg');
    img_win_3_bg = loadImage('media/stage_3_win.jpg');
    img_story_bg = loadImage('media/story_background.jpg');
    img_ending_bg = loadImage('media/ending_background.jpg');

    //player
    img_player_left= loadImage('media/player_left.png');
    img_player_right= loadImage('media/player_right.png');
    img_player_defence_left =loadImage('media/player_defence_left.png');
    img_player_defence_right =loadImage('media/player_defence_right.png');
    img_player_jet_left =loadImage('media/player_jet_left.png');
    img_player_jet_right = loadImage('media/player_jet_right.png');
    img_player_shoot_left = loadImage('media/player_shooting_left.png');
    img_player_shoot_right = loadImage('media/player_shooting_right.png');
    img_player_defence_shoot_left = loadImage('media/player_defence_shooting_left.png');
    img_player_defence_shoot_right = loadImage('media/player_defence_shooting_right.png');
    img_player_jet_shoot_left = loadImage('media/player_jet_shooting_left.png');
    img_player_jet_shoot_right = loadImage('media/player_jet_shooting_right.png');

    //skill
    img_star = loadImage('media/star.png');
    img_defence = loadImage('media/defence.png');
    img_jet = loadImage('media/jet.png');
    img_shot = loadImage('media/shot.png');

    //planet
    img_planet = loadImage('media/planet.png')
    img_planet_particle = loadImage('media/planet.png');

    //button
    img_start_button = loadImage('media/start_button.png')
    img_story_button = loadImage('media/story_button.png')
    img_tutorial_button = loadImage('media/tutorial_button.png')
    img_back_button = loadImage('media/back_button.jpg');
    img_next_button = loadImage('media/next_button.jpg');
    img_main_menu_button = loadImage('media/main_menu_button.jpg');
    img_restart_button = loadImage('media/restart_button.jpg');

    //monster1
    img_monster1_left = loadImage('media/monster1_left.png');
    img_monster1_right = loadImage('media/monster1_right.png');
    img_monster1_mad_left = loadImage('media/monster1_mad_left.png');
    img_monster1_mad_right = loadImage('media/monster1_mad_right.png');
    img_monster1_heart_left = loadImage('media/monster1_heart_left.png');
    img_monster1_heart_right = loadImage('media/monster1_heart_right.png');
    img_water_bomb = loadImage('media/water_bomb.png');
    img_water = loadImage('media/water.png');

    //monster2
    img_monster2_left = loadImage('media/monster2_left.png');
    img_monster2_right = loadImage('media/monster2_right.png');
    img_monster2_mad_left = loadImage('media/monster2_mad_left.png');
    img_monster2_mad_right = loadImage('media/monster2_mad_right.png');
    img_monster2_heart_left = loadImage('media/monster2_heart_left.png');
    img_monster2_heart_right = loadImage('media/monster2_heart_right.png');
    img_fire_bomb = loadImage('media/fire_bomb.png');
    img_fire = loadImage('media/fire.png');

    //monster3
    img_monster3_left = loadImage('media/monster3_left.png');
    img_monster3_right = loadImage('media/monster3_right.png');
    img_monster3_mad_left = loadImage('media/monster3_mad_left.png');
    img_monster3_mad_right = loadImage('media/monster3_mad_right.png');
    img_monster3_heart_left = loadImage('media/monster3_heart_left.png');
    img_monster3_heart_right = loadImage('media/monster3_heart_right.png');
    img_light_bomb = loadImage('media/light_bomb.png');
    img_light = loadImage('media/light.png');

    //particle
    img_water_particle = loadImage('media/water_particle.png');
    img_fire_particle = loadImage('media/fire_particle.png');
    img_light_particle = loadImage('media/light_particle.png');
    img_player_shot = loadImage('media/player_shot.png');

}    

function setup()
{
    if(!music.isLoaded())
    {
        music=loadSound('media/01 Adventure Awaits (LOOP).wav');
    }
    music.play();
    music.setVolume(0.5);

    createCanvas( 1200,800 );
    img_bg = img_background;

    player1 = new player_class(1050,400);
    planet1 = new planet_class(20,10,4,2); 
    monster1 = new monster_class(0,3,3,15); 
    planet1.create_planet_arr();
    player1.create_star();
    player1.create_defence();
    player1.create_jet();
    player1.create_shot();
    monster1.create_water_grid();
    monster1.create_bomb_arr();

    player2 = new player_class(1050,400);
    planet2 = new planet_class(25,13,3,1);
    monster2 = new monster_class(0,3,4,20);
    planet2.create_planet_arr();
    player2.create_star();
    player2.create_defence();
    player2.create_jet();
    player2.create_shot();
    monster2.create_water_grid();
    monster2.create_bomb_arr();

    player3 = new player_class(1050,400);
    planet3 = new planet_class(30,15,2,0 );
    monster3 = new monster_class(0,2,5,25);
    planet3.create_planet_arr();
    player3.create_star();
    player3.create_defence();
    player3.create_jet();
    player3.create_shot();
    monster3.create_water_grid();
    monster3.create_bomb_arr();

}

function draw()
{
    if(!music.isPlaying())
    {
        music.play();
        music.setVolume(0.5);
    }
    //console.log(CURRENT_SCREEN);
    switch(CURRENT_SCREEN)
    {
        case MAIN_MENU:
            background(img_main_menu_bg);

            //start_button 사이즈 가로 670, 세로 110
            image(img_start_button,270,400);
            //tutorial_button, story_button 사이즈 가로 210, 세로 210
            image(img_story_button,353,540);
            image(img_tutorial_button,646,540);
            break;

        case TUTORIAL_SCREEN:
            background(img_tutorial_bg);
            image(img_back_button,760,30,380,140);
            break;

        case STORY_SCREEN :
            background(img_story_bg);
            image(img_back_button,770,40,380,140);
            break;

        case STAGE_1_SCREEN :
            background(img_bg);
            planet1.planet_image(img_planet);

            //attack
            player1.shooting_shot();

            //player function
            player1.player_move();

            //star function
            player1.star_collision();
            player1.count_point(img_star);
            player1.star_move();
            player1.create_new_star();

            //defence function
            player1.defence_image(img_defence);
            player1.defence_collision();
            player1.count_defence(img_defence);
            player1.defence_move();
            player1.show_defence_time(img_defence);
            player1.create_new_defence();
            player1.add_defence_arr();

            //jet function
            player1.jet_image(img_jet);
            player1.jet_collision(); 
            player1.count_jet(img_jet);
            player1.jet_move();
            player1.show_jet_time(img_jet);
            player1.create_new_jet();
            player1.add_jet_arr();

            //shooting function
            player1.shooting_image(img_shot);
            player1.shot_collision();
            player1.count_shot(img_shot);
            player1.shot_move();
            player1.particle_shot_collision(planet1.explosion);
            player1.create_new_shot();
            player1.add_shot_arr();

            //player_gauge
            player1.gauge_bar();
            player1.player_planet_collision(planet1.planet_arr)

            //planet
            planet1.particle_player_collision(player1);
            planet1.add_planet_arr();
            planet1.create_new_planet();
            planet1.make_planet_arr();
            planet1.create_particle();
            planet1.planet_move(player1.x, player1.previous_x, player1.speed);
            planet1.player_move(player1.x);
            planet1.particle_move(player1.x, player1.checkDir);

            //planet_gauge
            planet1.planet_gauge();
            planet1.planet_shot_collision(player1.shooting_location_arr, player1.jet_shooting_arr);
            // 꼭 이거 뒤에 와야함planet.planet_shot_collision
            player1.planet_shot_collision(planet1.planet_arr); 
            player1.star_image(img_star);
            planet1.show_particle(img_planet_particle);
            player1.real_shot(img_player_shot);
            player1.player_image(img_player_left ,img_player_right, img_player_defence_left, img_player_defence_right, img_player_jet_left,img_player_jet_right,img_player_shoot_left,img_player_shoot_right,img_player_defence_shoot_left,img_player_defence_shoot_right,img_player_jet_shoot_left,img_player_jet_shoot_right);


            //game screen line
            push();
            stroke(255);
            line(20,55, width-20,55);
            line(20,55,20,height-55);
            line(20,height-55, width-20,height-55);
            line(width-20,55,width-20,height-55);
            pop();
            break;

        case STAGE_1_WIN_SCREEN :
            background(img_win_1_bg);
            image(img_next_button,360,550,485,205);
            break;

        case STAGE_2_SCREEN :
            background(img_bg);
            planet2.planet_image(img_planet);

            //attack
            player2.shooting_shot();

            //player function
            player2.player_move();

            //star function
            player2.star_collision();
            player2.count_point(img_star);
            player2.star_move();
            player2.create_new_star();

            //defence function
            player2.defence_image(img_defence);
            player2.defence_collision();
            player2.count_defence(img_defence);
            player2.defence_move();
            player2.show_defence_time(img_defence);
            player2.create_new_defence();
            player2.add_defence_arr();

            //jet function
            player2.jet_image(img_jet);
            player2.jet_collision(); 
            player2.count_jet(img_jet);
            player2.jet_move();
            player2.show_jet_time(img_jet);
            player2.create_new_jet();
            player2.add_jet_arr();

            //shooting function
            player2.shooting_image(img_shot);
            player2.shot_collision();
            player2.count_shot(img_shot);
            player2.shot_move();
            player2.particle_shot_collision(planet2.explosion);
            player2.create_new_shot();
            player2.add_shot_arr();


            //player_gauge
            player2.gauge_bar();
            player2.player_planet_collision(planet2.planet_arr)


            //planet
            planet2.particle_player_collision(player2);
            planet2.add_planet_arr();
            planet2.create_new_planet();
            planet2.make_planet_arr();
            planet2.create_particle();
            planet2.planet_move(player2.x, player2.previous_x, player2.speed);
            planet2.player_move(player2.x);
            planet2.particle_move(player2.x, player2.checkDir);

            //planet_gauge
            planet2.planet_gauge();
            planet2.planet_shot_collision(player2.shooting_location_arr, player2.jet_shooting_arr);
            // 꼭 이거 뒤에 와야함planet.planet_shot_collision
            player2.planet_shot_collision(planet2.planet_arr); 

            player2.star_image(img_star);
            planet2.show_particle(img_planet_particle);
            player2.real_shot(img_player_shot);
            player2.player_image(img_player_left ,img_player_right, img_player_defence_left, img_player_defence_right, img_player_jet_left,img_player_jet_right,img_player_shoot_left,img_player_shoot_right,img_player_defence_shoot_left,img_player_defence_shoot_right,img_player_jet_shoot_left,img_player_jet_shoot_right);

            //game screen line
            push();
            stroke(255);
            line(20,55, width-20,55);
            line(20,55,20,height-55);
            line(20,height-55, width-20,height-55);
            line(width-20,55,width-20,height-55);
            pop();
            break;

        case STAGE_2_WIN_SCREEN :
            background(img_win_2_bg);
            image(img_next_button,360,550,485,205);
            break;

        case STAGE_3_SCREEN :
            background(img_bg);
            planet3.planet_image(img_planet);

            //attack
            player3.shooting_shot();

            //player function
            player3.player_move();

            //star function
            player3.star_collision();
            player3.count_point(img_star);
            player3.star_move();
            player3.create_new_star();

            //defence function
            player3.defence_image(img_defence);
            player3.defence_collision();
            player3.count_defence(img_defence);
            player3.defence_move();
            player3.show_defence_time(img_defence);
            player3.create_new_defence();
            player3.add_defence_arr();

            //jet function
            player3.jet_image(img_jet);
            player3.jet_collision(); 
            player3.count_jet(img_jet);
            player3.jet_move();
            player3.show_jet_time(img_jet);
            player3.create_new_jet();
            player3.add_jet_arr();

            //shooting function
            player3.shooting_image(img_shot);
            player3.shot_collision();
            player3.count_shot(img_shot);
            player3.shot_move();
            player3.particle_shot_collision(planet3.explosion);
            player3.create_new_shot();
            player3.add_shot_arr();


            //player_gauge
            player3.gauge_bar();
            player3.player_planet_collision(planet3.planet_arr)


            //planet
            planet3.particle_player_collision(player3);
            planet3.add_planet_arr();
            planet3.create_new_planet();
            planet3.make_planet_arr();
            planet3.create_particle();
            planet3.planet_move(player3.x, player3.previous_x, player3.speed);
            planet3.player_move(player3.x);
            planet3.particle_move(player3.x, player3.checkDir);

            //planet_gauge
            planet3.planet_gauge(); 
            planet3.planet_shot_collision(player3.shooting_location_arr, player3.jet_shooting_arr);
            // 꼭 이거 뒤에 와야함planet.planet_shot_collision
            player3.planet_shot_collision(planet3.planet_arr); 

            player3.star_image(img_star);
            planet3.show_particle(img_planet_particle);
            player3.real_shot(img_player_shot);
            player3.player_image(img_player_left ,img_player_right, img_player_defence_left, img_player_defence_right, img_player_jet_left,img_player_jet_right,img_player_shoot_left,img_player_shoot_right,img_player_defence_shoot_left,img_player_defence_shoot_right,img_player_jet_shoot_left,img_player_jet_shoot_right);

            //game screen line
            push();
            stroke(255);
            line(20,55, width-20,55);
            line(20,55,20,height-55);
            line(20,height-55, width-20,height-55);
            line(width-20,55,width-20,height-55);
            pop();
            break;

        case STAGE_3_WIN_SCREEN :
            background(img_win_3_bg);
            image(img_next_button,360,550,485,205,);
            break;

        case ENDING_SCREEN :
            background(img_ending_bg);
            image(img_main_menu_button,860,660,265,105);
            break;

        case FAIL_1_SCREEN :
            background(img_fail_1_bg);
            image(img_restart_button,81,482,504,274);
            image(img_main_menu_button,602,480,513,278);
            break;

        case FAIL_2_SCREEN :
            background(img_fail_1_bg);
            image(img_restart_button,81,482,504,274);
            image(img_main_menu_button,602,480,513,278);
            break;

        case FAIL_3_SCREEN :
            background(img_fail_3_bg);
            image(img_restart_button,81,482,504,274);
            image(img_main_menu_button,602,480,513,278);
            break;

        case MONSTER_1_SCREEN :
            background(img_bg);

            //첫번째
            monster1.water_img(img_water);
            monster1.bomb_image(img_water_bomb);

            //defence function
            player1.defence_image(img_defence);
            player1.defence_collision();
            player1.count_defence(img_defence);
            player1.defence_move();
            player1.show_defence_time(img_defence);
            player1.create_new_defence();
            player1.add_defence_arr();

            //jet function
            player1.jet_image(img_jet);
            player1.jet_collision(); 
            player1.count_jet(img_jet);
            player1.jet_move();
            player1.show_jet_time(img_jet);
            player1.create_new_jet();
            player1.add_jet_arr();

            player1.shooting_image(img_shot);

            //monster
            monster1.monster_move();
            monster1.player_monster_collision(player1);
            monster1.monster_shot_collision(player1);
            monster1.monster_gauge_bar();
            monster1.water_move(player1.x,player1.previous_x);
            monster1.player_water_collision(player1);

            monster1.add_bomb_arr();
            monster1.create_new_bomb();
            monster1.make_bomb_arr();
            monster1.bomb_shot_collision(player1.shooting_location_arr, player1.jet_shooting_arr);
            player1.bomb_shot_collision(monster1.bomb_arr);
            monster1.create_particle();
            monster1.particle_player_collision(player1);
            monster1.bomb_move(player1.x,player1.previous_x,player1.speed);
            monster1.particle_move(player1.x,player1.change_move);
            monster1.bomb_gauge();


            //attack
            player1.shooting_shot();
            player1.real_shot(img_player_shot);

            //player function
            player1.monster_stage_player_move(monster1);

            //shooting function
            player1.shot_collision();
            player1.count_shot(img_shot);
            player1.shot_move();
            player1.create_new_shot();
            player1.add_shot_arr();
            player1.particle_shot_collision(monster1.explosion);

            //player_gauge
            player1.gauge_bar();
            player1.player_bomb_collision(monster1.bomb_arr);
            monster1.monster_img(img_monster1_left,img_monster1_right,img_monster1_mad_left,img_monster1_mad_right,img_monster1_heart_left,img_monster1_heart_right);
            player1.player_image(img_player_left ,img_player_right, img_player_defence_left, img_player_defence_right, img_player_jet_left,img_player_jet_right,img_player_shoot_left,img_player_shoot_right,img_player_defence_shoot_left,img_player_defence_shoot_right,img_player_jet_shoot_left,img_player_jet_shoot_right);
            monster1.show_particle(img_water_particle);

            player1.count_point(img_star);

            //game screen line
            push();
            stroke(255);
            line(20,55, width-20,55);
            line(20,55,20,height-55);
            line(20,height-55, width-20,height-55);
            line(width-20,55,width-20,height-55);
            pop();
            break;

        case MONSTER_2_SCREEN :
            background(img_bg);

            //첫번째
            monster2.water_img(img_fire);
            monster2.bomb_image(img_fire_bomb);

            //defence function
            player2.defence_image(img_defence);
            player2.defence_collision();
            player2.count_defence(img_defence);
            player2.defence_move();
            player2.show_defence_time(img_defence);
            player2.create_new_defence();
            player2.add_defence_arr();

            //jet function
            player2.jet_image(img_jet);
            player2.jet_collision(); 
            player2.count_jet(img_jet);
            player2.jet_move();
            player2.show_jet_time(img_jet);
            player2.create_new_jet();
            player2.add_jet_arr();

            player2.shooting_image(img_shot);

            //monster
            monster2.monster_move();
            monster2.player_monster_collision(player2);
            monster2.monster_shot_collision(player2);
            monster2.monster_gauge_bar();
            monster2.water_move(player2.x,player2.previous_x);
            monster2.player_water_collision(player2);

            monster2.add_bomb_arr();
            monster2.create_new_bomb();
            monster2.make_bomb_arr();
            monster2.bomb_shot_collision(player2.shooting_location_arr, player2.jet_shooting_arr);
            player2.bomb_shot_collision(monster2.bomb_arr);
            monster2.create_particle();
            monster2.particle_player_collision(player2);
            monster2.bomb_move(player2.x,player2.previous_x,player2.speed);
            monster2.particle_move(player2.x,player2.change_move);
            monster2.bomb_gauge();


            //attack
            player2.shooting_shot();
            player2.real_shot(img_player_shot);

            //player function
            player2.monster_stage_player_move(monster2);

            //shooting function
            player2.shot_collision();
            player2.count_shot(img_shot);
            player2.shot_move();
            player2.create_new_shot();
            player2.add_shot_arr();
            player2.particle_shot_collision(monster2.explosion);

            //player_gauge
            player2.gauge_bar();
            player2.player_bomb_collision(monster2.bomb_arr);
            monster2.monster_img(img_monster2_left,img_monster2_right,img_monster2_mad_left,img_monster2_mad_right,img_monster2_heart_left,img_monster2_heart_right);
            player2.player_image(img_player_left ,img_player_right, img_player_defence_left, img_player_defence_right, img_player_jet_left,img_player_jet_right,img_player_shoot_left,img_player_shoot_right,img_player_defence_shoot_left,img_player_defence_shoot_right,img_player_jet_shoot_left,img_player_jet_shoot_right);
            monster2.show_particle(img_fire_particle);
            
            player2.count_point(img_star);
            
            //game screen line
            push();
            stroke(255);
            line(20,55, width-20,55);
            line(20,55,20,height-55);
            line(20,height-55, width-20,height-55);
            line(width-20,55,width-20,height-55);
            pop();
            break;

        case MONSTER_3_SCREEN  :
            background(img_bg);

            //첫번째
            monster3.water_img(img_light);
            monster3.bomb_image(img_light_bomb);

            //defence function
            player3.defence_image(img_defence);
            player3.defence_collision();
            player3.count_defence(img_defence);
            player3.defence_move();
            player3.show_defence_time(img_defence);
            player3.create_new_defence();
            player3.add_defence_arr();

            //jet function
            player3.jet_image(img_jet);
            player3.jet_collision(); 
            player3.count_jet(img_jet);
            player3.jet_move();
            player3.show_jet_time(img_jet);
            player3.create_new_jet();
            player3.add_jet_arr();

            player3.shooting_image(img_shot);

            //monster
            monster3.monster_move();
            monster3.player_monster_collision(player3);
            monster3.monster_shot_collision(player3);
            monster3.monster_gauge_bar();
            monster3.water_move(player3.x,player3.previous_x);
            monster3.player_water_collision(player3);

            monster3.add_bomb_arr();
            monster3.create_new_bomb();
            monster3.make_bomb_arr();
            monster3.bomb_shot_collision(player3.shooting_location_arr, player3.jet_shooting_arr);
            player3.bomb_shot_collision(monster3.bomb_arr);
            monster3.create_particle();
            monster3.particle_player_collision(player3);
            monster3.bomb_move(player3.x,player3.previous_x,player3.speed);
            monster3.particle_move(player3.x,player3.change_move);
            monster3.bomb_gauge();


            //attack
            player3.shooting_shot();
            player3.real_shot(img_player_shot);

            //player function
            player3.monster_stage_player_move(monster3);

            //shooting function
            player3.shot_collision();
            player3.count_shot(img_shot);
            player3.shot_move();
            player3.create_new_shot();
            player3.add_shot_arr();
            player3.particle_shot_collision(monster3.explosion);

            //player_gauge
            player3.gauge_bar();
            player3.player_bomb_collision(monster3.bomb_arr);
            monster3.monster_img(img_monster3_left,img_monster3_right,img_monster3_mad_left,img_monster3_mad_right,img_monster3_heart_left,img_monster3_heart_right);
            player3.player_image(img_player_left ,img_player_right, img_player_defence_left, img_player_defence_right, img_player_jet_left,img_player_jet_right,img_player_shoot_left,img_player_shoot_right,img_player_defence_shoot_left,img_player_defence_shoot_right,img_player_jet_shoot_left,img_player_jet_shoot_right);
            monster3.show_particle(img_light_particle);
           
            player3.count_point(img_star);

            //game screen line
            push();
            stroke(255);
            line(20,55, width-20,55);
            line(20,55,20,height-55);
            line(20,height-55, width-20,height-55);   
            line(width-20,55,width-20,height-55);
            pop();
        break;
        
    }
    
    // STAGE_1_SCREEN ***
    if(CURRENT_SCREEN == STAGE_1_SCREEN)
    {
        if(player1.point == 10) // player star 다 모았을 때
        {
            CURRENT_SCREEN = MONSTER_1_SCREEN;

        }else if(player1.gauge_score <= 0) //player 졌을 때
        {
            CURRENT_SCREEN = FAIL_1_SCREEN;
        }

    // MONSTER_1_SCREEN
    }else if(CURRENT_SCREEN == MONSTER_1_SCREEN) 
    {
        if(player1.gauge_score <= 0) // player 졌을 때
        {
            CURRENT_SCREEN = FAIL_1_SCREEN;
        
        }else if(monster1.gauge_score <= 0) // monster 졌을 때
        {
          CURRENT_SCREEN = STAGE_1_WIN_SCREEN;

        }
    }//STAGE 2 ***
    else if(CURRENT_SCREEN == STAGE_2_SCREEN)
    {
        if(player2.point == 10) // player star 다 모았을 때
        {
            CURRENT_SCREEN = MONSTER_2_SCREEN;

        }else if(player2.gauge_score <= 0) //player 졌을 때
        {
            CURRENT_SCREEN = FAIL_2_SCREEN;
        }

    // MONSTER_2_SCREEN
    }else if(CURRENT_SCREEN == MONSTER_2_SCREEN) 
    {
        if(player2.gauge_score <= 0) // player 졌을 때
        {
            CURRENT_SCREEN = FAIL_2_SCREEN;
        
        }else if(monster2.gauge_score <= 0) // monster 졌을 때
        {
          CURRENT_SCREEN = STAGE_2_WIN_SCREEN;

        }
    

    //STAGE 3 ***
    }else if(CURRENT_SCREEN == STAGE_3_SCREEN)
    {
        if(player3.point == 10) // player star 다 모았을 때
        {
            CURRENT_SCREEN = MONSTER_3_SCREEN;

        }else if(player3.gauge_score <= 0) //player 졌을 때
        {
            CURRENT_SCREEN = FAIL_3_SCREEN;
        }

    // MONSTER_3_SCREEN
    }else if(CURRENT_SCREEN == MONSTER_3_SCREEN) 
    {
        if(player3.gauge_score <= 0) // player 졌을 때
        {
            CURRENT_SCREEN = FAIL_3_SCREEN;
        
        }else if(monster3.gauge_score <= 0) // monster 졌을 때
        {
          CURRENT_SCREEN = STAGE_3_WIN_SCREEN;

        }
    }

}

function keyPressed()
{
    if(CURRENT_SCREEN == STAGE_1_SCREEN || CURRENT_SCREEN == MONSTER_1_SCREEN)
    {
        player1.change_player_img_defence();
        player1.change_player_img_jet();
        player1.change_player_img_shooting();
        player1.change_player_defence_img_shooting();
        player1.change_player_jet_img_shooting();
        //attack
        player1.create_shooting_location_arr();
    }else if(CURRENT_SCREEN == STAGE_2_SCREEN || CURRENT_SCREEN == MONSTER_2_SCREEN)
    {
        player2.change_player_img_defence();
        player2.change_player_img_jet();
        player2.change_player_img_shooting();
        player2.change_player_defence_img_shooting();
        player2.change_player_jet_img_shooting();
        //attack
        player2.create_shooting_location_arr();
    }else if(CURRENT_SCREEN == STAGE_3_SCREEN || CURRENT_SCREEN == MONSTER_3_SCREEN)
    {
        player3.change_player_img_defence();
        player3.change_player_img_jet();
        player3.change_player_img_shooting();
        player3.change_player_defence_img_shooting();
        player3.change_player_jet_img_shooting();

        //attack
        player3.create_shooting_location_arr();
    }

}

function mousePressed()
{
    console.log(mouseX,mouseY);
    //MAIN MENU
    if(CURRENT_SCREEN == MAIN_MENU)
    {
        if (mouseX>270 && mouseX<940 && mouseY>400 && mouseY<510) // START_BUTTON
        {
            CURRENT_SCREEN = STAGE_1_SCREEN;

        }else if(mouseX>353 && mouseX<563 && mouseY>540 && mouseY<750) // STORY_SCREEN
        {
            CURRENT_SCREEN = STORY_SCREEN;

        }else if(mouseX>646 && mouseX<856 && mouseY>540 && mouseY<750) // TUTORIAL_SCREEN
        {
            CURRENT_SCREEN = TUTORIAL_SCREEN;

        }

    //TUTORIAL_SCREEN
    }else if(CURRENT_SCREEN == TUTORIAL_SCREEN)
    {
        if (mouseX>760 && mouseX<1130 && mouseY>30 && mouseY<170) // BACK_BUTTON
        {
            CURRENT_SCREEN = MAIN_MENU;
        }
     //STORY_SCREEN
    }else if(CURRENT_SCREEN == STORY_SCREEN)
    {
        if (mouseX>770 && mouseX<1140 && mouseY>40 && mouseY<180) // BACK_BUTTON
        {
            CURRENT_SCREEN = MAIN_MENU;
        }
    
    //STAGE_1_WIN_SCREEN
    }else if(CURRENT_SCREEN == STAGE_1_WIN_SCREEN)
    {
        //player
        player1.x = 1050;
        player1.y = 400;
        player1.image_change =0
        player1.change_move = 0;
        player1.previous_x =1050;
        player1.speed = 3;
        player1.checkDir = 0;
        //star
        player1.point = 0;
        player1.star_arr=[];
        player1.total_star = 10;
        player1.base_star = 1;
        player1.star_check_move = 0; 
        player1.new_star_time=0;
        //defence
        player1.num_defence = 0;
        player1.defence_arr=[];
        player1.total_defence = 20;
        player1.base_defence = 3;
        player1.defence_check_move = 0; 
        player1.defence_time = 10;
        player1.check_defence_num = 0;
        player1.defence_frame = 0;
        player1.check_defence_frame = 0;
        player1.new_defence_time=0;
        player1.check_add_defence_arr=0;
        //jet
        player1.num_jet = 0;
        player1.jet_arr=[];
        player1.total_jet = 20;
        player1.base_jet = 3;
        player1.jet_check_move = 0;
        player1.jet_time = 10;
        player1.check_jet_num = 0;
        player1.jet_frame = 0;
        player1.check_jet_frame = 0;
        player1.new_jet_time=0;
        player1.check_add_jet_arr=0;
        //shooting
        player1.num_shot = 50;
        player1.shot_arr=[];
        player1.total_shot =30;
        player1.base_shot = 3;
        player1.shot_check_move = 0; //Control jet movement according to player's movement
        player1.check_shot_num = 0;
        player1.shot_frame = 0;
        player1.check_shot_frame = 0;
        player1.jet_shooting_arr =[];
        player1.new_shot_time=0;
        player1.check_add_shot_arr=0;
        //attack
        player1.shooting_location_arr=[];
        player1.shot_speed = new Vec2(8,0);
        //player_gauge
        player1.gauge_length=530;
        player1.gauge_x=650;
        player1.gauge_score=100;
        player1.gauge_change_x=530-player1.gauge_length;
        player1.check_player_planet_collision=0;
        player1.planet_collision_i;
        player1.check_planet_collision_i=0;
        player1.check_player_bomb_collision=0;
        player1.bomb_collision_i;
        player1.check_bomb_collision_i = 0;

        //monster
        monster1.x = 20;
        monster1.y = 250;
        monster1.image_change = 0; //basic monster
        monster1.change_move = 1; //right
        monster1.speed = 3;
        monster1.decide_xy = floor(random(2));
        monster1.move_x = random(20,880);
        monster1.move_y = random(105,495);
        //water
        monster1.water_check_move = 0;
        //water_bomb
        monster1.water_bomb_check_move = 0;
        monster1.checkDir = 0;
        //gauge_bar
        monster1.gauge_score = 100;
        monster1.gauge_length = 300;
        //collision
        monster1.check_monster_collision = 0;
        monster1.check_water_collision = 0;
        //water
        monster1.grid_arr=[];
        monster1.water_arr =[];
        monster1.water_disappear_time = 0;
        monster1.water_disappear_duration = 5;
        monster1.num_water = floor(random(8,10));       
        monster1.water_appear_time = 0;
        monster1.water_appear_duration = 5; 
        monster1.time_check=0;
        monster1.water_collision_i;
        monster1.check_water_collision_i =0;
        monster1.water_check_move =0;
        //bomb
        monster1.bomb_arr = [];
        monster1.explosion_time = 0;
        monster1.setup_explosion_time = 3;
        monster1.base_bomb = 3;
        monster1.total_bomb = 20;
        monster1.particle_arr=[];
        monster1.new_base_bomb = 0;
        monster1.new_bomb_time = 0;
        monster1.check_add_bomb_arr = 0;
        monster1.player_speed_vec = new Vec2(3,0);
        monster1.num_particles = 15;
        monster1.bomb_gauge_length=100;
        monster1.bomb_location_arr =[]
        monster1.check_bomb_arr =0;
        monster1.check_num = 0;
        monster1.num;
        monster1.explosion_num=[];
        monster1.explosion=[];
        monster1.bomb_check_move = 0;
        monster1.heart_img_time = 0;
        monster1.check_monster_shot_collision=0;
        //planet
        planet1.explosion =[]; //explosion particle
        planet1.planet_arr=[]; //planet location
        planet1.total_planet=20;
        planet1.base_planet=10;
        planet1.explosion_num=[]; //for random explosion
        planet1.planet_check_move=0;
        planet1.explosion_time=2;
        planet1.planet_location_arr=[]; ///whole location
        planet1.particle_arr=[]; //first location of particle
        planet1.check_planet_arr=0;
        planet1.num;
        planet1.new_base_planet=0;
        planet1.new_planet_time=0;
        planet1.check_add_planet_arr=0;
        planet1.player_speed_vec= new Vec2(3,0);
        planet1.num_particles=20;
        planet1.setup_explosion_time = 4;
        planet1.check_num=0;
        //planet_gauge
        planet1.planet_gauge_length=80;

        planet1.create_planet_arr();
        player1.create_star();
        player1.create_defence();
        player1.create_jet();
        player1.create_shot();
        monster1.create_water_grid();
        monster1.create_bomb_arr();

        if (mouseX>360 && mouseX<845 && mouseY>550 && mouseY<755) // NEXT_STAGE_BUTTON
        {
            CURRENT_SCREEN = STAGE_2_SCREEN;
        } 

    //FAIL_1_SCREEN
    }else if(CURRENT_SCREEN == FAIL_1_SCREEN)
    {
        //player
        player1.x = 1050;
        player1.y = 400;
        player1.image_change =0
        player1.change_move = 0;
        player1.previous_x =1050;
        player1.speed = 3;
        player1.checkDir = 0;
        //star
        player1.point = 0;
        player1.star_arr=[];
        player1.total_star = 10;
        player1.base_star = 1;
        player1.star_check_move = 0; 
        player1.new_star_time=0;
        //defence
        player1.num_defence = 0;
        player1.defence_arr=[];
        player1.total_defence = 20;
        player1.base_defence = 3;
        player1.defence_check_move = 0; 
        player1.defence_time = 10;
        player1.check_defence_num = 0;
        player1.defence_frame = 0;
        player1.check_defence_frame = 0;
        player1.new_defence_time=0;
        player1.check_add_defence_arr=0;
        //jet
        player1.num_jet = 0;
        player1.jet_arr=[];
        player1.total_jet = 20;
        player1.base_jet = 3;
        player1.jet_check_move = 0;
        player1.jet_time = 10;
        player1.check_jet_num = 0;
        player1.jet_frame = 0;
        player1.check_jet_frame = 0;
        player1.new_jet_time=0;
        player1.check_add_jet_arr=0;
        //shooting
        player1.num_shot = 50;
        player1.shot_arr=[];
        player1.total_shot =30;
        player1.base_shot = 3;
        player1.shot_check_move = 0; //Control jet movement according to player's movement
        player1.check_shot_num = 0;
        player1.shot_frame = 0;
        player1.check_shot_frame = 0;
        player1.jet_shooting_arr =[];
        player1.new_shot_time=0;
        player1.check_add_shot_arr=0;
        //attack
        player1.shooting_location_arr=[];
        player1.shot_speed = new Vec2(8,0);
        //player_gauge
        player1.gauge_length=530;
        player1.gauge_x=650;
        player1.gauge_score=100;
        player1.gauge_change_x=530-player1.gauge_length;
        player1.check_player_planet_collision=0;
        player1.planet_collision_i;
        player1.check_planet_collision_i=0;
        player1.check_player_bomb_collision=0;
        player1.bomb_collision_i;
        player1.check_bomb_collision_i = 0;

        //monster
        monster1.x = 20;
        monster1.y = 250;
        monster1.image_change = 0; //basic monster
        monster1.change_move = 1; //right
        monster1.speed = 3;
        monster1.decide_xy = floor(random(2));
        monster1.move_x = random(20,880);
        monster1.move_y = random(105,495);
        //water
        monster1.water_check_move = 0;
        //water_bomb
        monster1.water_bomb_check_move = 0;
        monster1.checkDir = 0;
        //gauge_bar
        monster1.gauge_score = 100;
        monster1.gauge_length = 300;
        //collision
        monster1.check_monster_collision = 0;
        monster1.check_water_collision = 0;
        //water
        monster1.grid_arr=[];
        monster1.water_arr =[];
        monster1.water_disappear_time = 0;
        monster1.water_disappear_duration = 5;
        monster1.num_water = floor(random(8,10));       
        monster1.water_appear_time = 0;
        monster1.water_appear_duration = 5; 
        monster1.time_check=0;
        monster1.water_collision_i;
        monster1.check_water_collision_i =0;
        monster1.water_check_move =0;
        //bomb
        monster1.bomb_arr = [];
        monster1.explosion_time = 0;
        monster1.setup_explosion_time = 3;
        monster1.base_bomb = 3;
        monster1.total_bomb = 20;
        monster1.particle_arr=[];
        monster1.new_base_bomb = 0;
        monster1.new_bomb_time = 0;
        monster1.check_add_bomb_arr = 0;
        monster1.player_speed_vec = new Vec2(3,0);
        monster1.num_particles = 15;
        monster1.bomb_gauge_length=100;
        monster1.bomb_location_arr =[]
        monster1.check_bomb_arr =0;
        monster1.check_num = 0;
        monster1.num;
        monster1.explosion_num=[];
        monster1.explosion=[];
        monster1.bomb_check_move = 0;
        monster1.heart_img_time = 0;
        monster1.check_monster_shot_collision=0;
        //planet
        planet1.explosion =[]; //explosion particle
        planet1.planet_arr=[]; //planet location
        planet1.total_planet=20;
        planet1.base_planet=10;
        planet1.explosion_num=[]; //for random explosion
        planet1.planet_check_move=0;
        planet1.explosion_time=2;
        planet1.planet_location_arr=[]; ///whole location
        planet1.particle_arr=[]; //first location of particle
        planet1.check_planet_arr=0;
        planet1.num;
        planet1.new_base_planet=0;
        planet1.new_planet_time=0;
        planet1.check_add_planet_arr=0;
        planet1.player_speed_vec= new Vec2(3,0);
        planet1.num_particles=20;
        planet1.setup_explosion_time = 4;
        planet1.check_num=0;
        //planet_gauge
        planet1.planet_gauge_length=80;

        planet1.create_planet_arr();
        player1.create_star();
        player1.create_defence();
        player1.create_jet();
        player1.create_shot();
        monster1.create_water_grid();
        monster1.create_bomb_arr();

        if(mouseX>81 && mouseX<585 && mouseY>482 && mouseY<756) // RESTART_BUTTON
        {
            CURRENT_SCREEN = STAGE_1_SCREEN;
        
        }else if(mouseX>602 && mouseX<1115 && mouseY>480 && mouseY<758) // MAIN_MENU_BUTTON
        {
            CURRENT_SCREEN = MAIN_MENU;

        }
    //STAGE_2_WIN_SCREEN
    }else if(CURRENT_SCREEN == STAGE_2_WIN_SCREEN)
    {
            //player
            player2.x = 1050;
            player2.y = 400;
            player2.image_change =0
            player2.change_move = 0;
            player2.previous_x =1050;
            player2.speed = 3;
            player2.checkDir = 0;
            //star
            player2.point = 0;
            player2.star_arr=[];
            player2.total_star = 10;
            player2.base_star = 1;
            player2.star_check_move = 0; 
            player2.new_star_time=0;
            //defence
            player2.num_defence = 0;
            player2.defence_arr=[];
            player2.total_defence = 20;
            player2.base_defence = 3;
            player2.defence_check_move = 0; 
            player2.defence_time = 10;
            player2.check_defence_num = 0;
            player2.defence_frame = 0;
            player2.check_defence_frame = 0;
            player2.new_defence_time=0;
            player2.check_add_defence_arr=0;
            //jet
            player2.num_jet = 0;
            player2.jet_arr=[];
            player2.total_jet = 20;
            player2.base_jet = 3;
            player2.jet_check_move = 0;
            player2.jet_time = 10;
            player2.check_jet_num = 0;
            player2.jet_frame = 0;
            player2.check_jet_frame = 0;
            player2.new_jet_time=0;
            player2.check_add_jet_arr=0;
            //shooting
            player2.num_shot = 50;
            player2.shot_arr=[];
            player2.total_shot =30;
            player2.base_shot = 3;
            player2.shot_check_move = 0; //Control jet movement according to player's movement
            player2.check_shot_num = 0;
            player2.shot_frame = 0;
            player2.check_shot_frame = 0;
            player2.jet_shooting_arr =[];
            player2.new_shot_time=0;
            player2.check_add_shot_arr=0;
            //attack
            player2.shooting_location_arr=[];
            player2.shot_speed = new Vec2(8,0);
            //player_gauge
            player2.gauge_length=530;
            player2.gauge_x=650;
            player2.gauge_score=100;
            player2.gauge_change_x=530-player2.gauge_length;
            player2.check_player_planet_collision=0;
            player2.planet_collision_i;
            player2.check_planet_collision_i=0;
            player2.check_player_bomb_collision=0;
            player2.bomb_collision_i;
            player2.check_bomb_collision_i = 0;

            //monster
            monster2.x = 20;
            monster2.y = 250;
            monster2.image_change = 0; //basic monster
            monster2.change_move = 1; //right
            monster2.speed = 3;
            monster2.decide_xy = floor(random(2));
            monster2.move_x = random(20,880);
            monster2.move_y = random(105,495);
            //water
            monster2.water_check_move = 0;
            //water_bomb
            monster2.water_bomb_check_move = 0;
            monster2.checkDir = 0;
            //gauge_bar
            monster2.gauge_score = 100;
            monster2.gauge_length = 300;
            //collision
            monster2.check_monster_collision = 0;
            monster2.check_water_collision = 0;
            //water
            monster2.grid_arr=[];
            monster2.water_arr =[];
            monster2.water_disappear_time = 0;
            monster2.water_disappear_duration = 5;
            monster2.num_water = floor(random(8,10));       
            monster2.water_appear_time = 0;
            monster2.water_appear_duration = 5; 
            monster2.time_check=0;
            monster2.water_collision_i;
            monster2.check_water_collision_i =0;
            monster2.water_check_move =0;
            //bomb
            monster2.bomb_arr = [];
            monster2.explosion_time = 0;
            monster2.setup_explosion_time = 3;
            monster2.base_bomb = 4;
            monster2.total_bomb = 20;
            monster2.particle_arr=[];
            monster2.new_base_bomb = 0;
            monster2.new_bomb_time = 0;
            monster2.check_add_bomb_arr = 0;
            monster2.player_speed_vec = new Vec2(3,0);
            monster2.num_particles = 20;
            monster2.bomb_gauge_length=100;
            monster2.bomb_location_arr =[]
            monster2.check_bomb_arr =0;
            monster2.check_num = 0;
            monster2.num;
            monster2.explosion_num=[];
            monster2.explosion=[];
            monster2.bomb_check_move = 0;
            monster2.heart_img_time = 0;
            monster2.check_monster_shot_collision=0;
            //planet
            planet2.explosion =[]; //explosion particle
            planet2.planet_arr=[]; //planet location
            planet2.total_planet=20;
            planet2.base_planet=13;
            planet2.explosion_num=[]; //for random explosion
            planet2.planet_check_move=0;
            planet2.explosion_time=1;
            planet2.planet_location_arr=[]; ///whole location
            planet2.particle_arr=[]; //first location of particle
            planet2.check_planet_arr=0;
            planet2.num;
            planet2.new_base_planet=0;
            planet2.new_planet_time=0;
            planet2.check_add_planet_arr=0;
            planet2.player_speed_vec= new Vec2(3,0);
            planet2.num_particles=25;
            planet2.setup_explosion_time = 3;
            planet2.check_num=0;
            //planet_gauge
            planet2.planet_gauge_length=80;

            planet2.create_planet_arr();
            player2.create_star();
            player2.create_defence();
            player2.create_jet();
            player2.create_shot();
            monster2.create_water_grid();
            monster2.create_bomb_arr();

        if (mouseX>360 && mouseX<845 && mouseY>550 && mouseY<755) // NEXT_STAGE_BUTTON
        {
            CURRENT_SCREEN = STAGE_3_SCREEN;
        } 

    //FAIL_2_SCREEN
    }else if(CURRENT_SCREEN == FAIL_2_SCREEN)
    {
            //player
            player2.x = 1050;
            player2.y = 400;
            player2.image_change =0
            player2.change_move = 0;
            player2.previous_x =1050;
            player2.speed = 3;
            player2.checkDir = 0;
            //star
            player2.point = 0;
            player2.star_arr=[];
            player2.total_star = 10;
            player2.base_star = 1;
            player2.star_check_move = 0; 
            player2.new_star_time=0;
            //defence
            player2.num_defence = 0;
            player2.defence_arr=[];
            player2.total_defence = 20;
            player2.base_defence = 3;
            player2.defence_check_move = 0; 
            player2.defence_time = 10;
            player2.check_defence_num = 0;
            player2.defence_frame = 0;
            player2.check_defence_frame = 0;
            player2.new_defence_time=0;
            player2.check_add_defence_arr=0;
            //jet
            player2.num_jet = 0;
            player2.jet_arr=[];
            player2.total_jet = 20;
            player2.base_jet = 3;
            player2.jet_check_move = 0;
            player2.jet_time = 10;
            player2.check_jet_num = 0;
            player2.jet_frame = 0;
            player2.check_jet_frame = 0;
            player2.new_jet_time=0;
            player2.check_add_jet_arr=0;
            //shooting
            player2.num_shot = 50;
            player2.shot_arr=[];
            player2.total_shot =30;
            player2.base_shot = 3;
            player2.shot_check_move = 0; //Control jet movement according to player's movement
            player2.check_shot_num = 0;
            player2.shot_frame = 0;
            player2.check_shot_frame = 0;
            player2.jet_shooting_arr =[];
            player2.new_shot_time=0;
            player2.check_add_shot_arr=0;
            //attack
            player2.shooting_location_arr=[];
            player2.shot_speed = new Vec2(8,0);
            //player_gauge
            player2.gauge_length=530;
            player2.gauge_x=650;
            player2.gauge_score=100;
            player2.gauge_change_x=530-player2.gauge_length;
            player2.check_player_planet_collision=0;
            player2.planet_collision_i;
            player2.check_planet_collision_i=0;
            player2.check_player_bomb_collision=0;
            player2.bomb_collision_i;
            player2.check_bomb_collision_i = 0;

            //monster
            monster2.x = 20;
            monster2.y = 250;
            monster2.image_change = 0; //basic monster
            monster2.change_move = 1; //right
            monster2.speed = 3;
            monster2.decide_xy = floor(random(2));
            monster2.move_x = random(20,880);
            monster2.move_y = random(105,495);
            //water
            monster2.water_check_move = 0;
            //water_bomb
            monster2.water_bomb_check_move = 0;
            monster2.checkDir = 0;
            //gauge_bar
            monster2.gauge_score = 100;
            monster2.gauge_length = 300;
            //collision
            monster2.check_monster_collision = 0;
            monster2.check_water_collision = 0;
            //water
            monster2.grid_arr=[];
            monster2.water_arr =[];
            monster2.water_disappear_time = 0;
            monster2.water_disappear_duration = 5;
            monster2.num_water = floor(random(8,10));       
            monster2.water_appear_time = 0;
            monster2.water_appear_duration = 5; 
            monster2.time_check=0;
            monster2.water_collision_i;
            monster2.check_water_collision_i =0;
            monster2.water_check_move =0;
            //bomb
            monster2.bomb_arr = [];
            monster2.explosion_time = 0;
            monster2.setup_explosion_time = 3;
            monster2.base_bomb = 4;
            monster2.total_bomb = 20;
            monster2.particle_arr=[];
            monster2.new_base_bomb = 0;
            monster2.new_bomb_time = 0;
            monster2.check_add_bomb_arr = 0;
            monster2.player_speed_vec = new Vec2(3,0);
            monster2.num_particles = 20;
            monster2.bomb_gauge_length=100;
            monster2.bomb_location_arr =[]
            monster2.check_bomb_arr =0;
            monster2.check_num = 0;
            monster2.num;
            monster2.explosion_num=[];
            monster2.explosion=[];
            monster2.bomb_check_move = 0;
            monster2.heart_img_time = 0;
            monster2.check_monster_shot_collision=0;
            //planet
            planet2.explosion =[]; //explosion particle
            planet2.planet_arr=[]; //planet location
            planet2.total_planet=20;
            planet2.base_planet=13;
            planet2.explosion_num=[]; //for random explosion
            planet2.planet_check_move=0;
            planet2.explosion_time=1;
            planet2.planet_location_arr=[]; ///whole location
            planet2.particle_arr=[]; //first location of particle
            planet2.check_planet_arr=0;
            planet2.num;
            planet2.new_base_planet=0;
            planet2.new_planet_time=0;
            planet2.check_add_planet_arr=0;
            planet2.player_speed_vec= new Vec2(3,0);
            planet2.num_particles=25;
            planet2.setup_explosion_time = 3;
            planet2.check_num=0;
            //planet_gauge
            planet2.planet_gauge_length=80;

            planet2.create_planet_arr();
            player2.create_star();
            player2.create_defence();
            player2.create_jet();
            player2.create_shot();
            monster2.create_water_grid();
            monster2.create_bomb_arr();
        if(mouseX>81 && mouseX<585 && mouseY>482 && mouseY<756) // RESTART_BUTTON
        {
            CURRENT_SCREEN = STAGE_2_SCREEN;

        }else if(mouseX>602 && mouseX<1115 && mouseY>480 && mouseY<758) // MAIN_MENU_BUTTON
        {
            CURRENT_SCREEN = MAIN_MENU;
        }

    //STAGE_3_WIN_SCREEN
    }else if(CURRENT_SCREEN == STAGE_3_WIN_SCREEN)
    {
        if(mouseX>360 && mouseX<845 && mouseY>550 && mouseY<755) // NEXT_STAGE_BUTTON
        {
            CURRENT_SCREEN = ENDING_SCREEN;

        }

        //ENDING_SCREEN
    }else if(CURRENT_SCREEN == ENDING_SCREEN)
    {
            //player
            player3.x = 1050;
            player3.y = 400;
            player3.image_change =0
            player3.change_move = 0;
            player3.previous_x =1050;
            player3.speed = 3;
            player3.checkDir = 0;
            //star
            player3.point = 0;
            player3.star_arr=[];
            player3.total_star = 10;
            player3.base_star = 1;
            player3.star_check_move = 0; 
            player3.new_star_time=0;
            //defence
            player3.num_defence = 0;
            player3.defence_arr=[];
            player3.total_defence = 20;
            player3.base_defence = 3;
            player3.defence_check_move = 0; 
            player3.defence_time = 10;
            player3.check_defence_num = 0;
            player3.defence_frame = 0;
            player3.check_defence_frame = 0;
            player3.new_defence_time=0;
            player3.check_add_defence_arr=0;
            //jet
            player3.num_jet = 0;
            player3.jet_arr=[];
            player3.total_jet = 20;
            player3.base_jet = 3;
            player3.jet_check_move = 0;
            player3.jet_time = 10;
            player3.check_jet_num = 0;
            player3.jet_frame = 0;
            player3.check_jet_frame = 0;
            player3.new_jet_time=0;
            player3.check_add_jet_arr=0;
            //shooting
            player3.num_shot = 50;
            player3.shot_arr=[];
            player3.total_shot =30;
            player3.base_shot = 3;
            player3.shot_check_move = 0; //Control jet movement according to player's movement
            player3.check_shot_num = 0;
            player3.shot_frame = 0;
            player3.check_shot_frame = 0;
            player3.jet_shooting_arr =[];
            player3.new_shot_time=0;
            player3.check_add_shot_arr=0;
            //attack
            player3.shooting_location_arr=[];
            player3.shot_speed = new Vec2(8,0);
            //player_gauge
            player3.gauge_length=530;
            player3.gauge_x=650;
            player3.gauge_score=100;
            player3.gauge_change_x=530-player3.gauge_length;
            player3.check_player_planet_collision=0;
            player3.planet_collision_i;
            player3.check_planet_collision_i=0;
            player3.check_player_bomb_collision=0;
            player3.bomb_collision_i;
            player3.check_bomb_collision_i = 0;

            //monster
            monster3.x = 20;
            monster3.y = 250;
            monster3.image_change = 0; //basic monster
            monster3.change_move = 1; //right
            monster3.speed = 3;
            monster3.decide_xy = floor(random(2));
            monster3.move_x = random(20,880);
            monster3.move_y = random(105,495);
            //water
            monster3.water_check_move = 0;
            //water_bomb
            monster3.water_bomb_check_move = 0;
            monster3.checkDir = 0;
            //gauge_bar
            monster3.gauge_score = 100;
            monster3.gauge_length = 300;
            //collision
            monster3.check_monster_collision = 0;
            monster3.check_water_collision = 0;
            //water
            monster3.grid_arr=[];
            monster3.water_arr =[];
            monster3.water_disappear_time = 0;
            monster3.water_disappear_duration = 5;
            monster3.num_water = floor(random(8,10));       
            monster3.water_appear_time = 0;
            monster3.water_appear_duration = 5; 
            monster3.time_check=0;
            monster3.water_collision_i;
            monster3.check_water_collision_i =0;
            monster3.water_check_move =0;
            //bomb
            monster3.bomb_arr = [];
            monster3.explosion_time = 0;
            monster3.setup_explosion_time = 2;
            monster3.base_bomb = 5;
            monster3.total_bomb = 20;
            monster3.particle_arr=[];
            monster3.new_base_bomb = 0;
            monster3.new_bomb_time = 0;
            monster3.check_add_bomb_arr = 0;
            monster3.player_speed_vec = new Vec2(3,0);
            monster3.num_particles = 25;
            monster3.bomb_gauge_length=100;
            monster3.bomb_location_arr =[]
            monster3.check_bomb_arr =0;
            monster3.check_num = 0;
            monster3.num;
            monster3.explosion_num=[];
            monster3.explosion=[];
            monster3.bomb_check_move = 0;
            monster3.heart_img_time = 0;
            monster3.check_monster_shot_collision=0;
            
            //planet
            planet3.explosion =[]; //explosion particle
            planet3.planet_arr=[]; //planet location
            planet3.total_planet=20;
            planet3.base_planet=15;
            planet3.explosion_num=[]; //for random explosion
            planet3.planet_check_move=0;
            planet3.explosion_time=0;
            planet3.planet_location_arr=[]; ///whole location
            planet3.particle_arr=[]; //first location of particle
            planet3.check_planet_arr=0;
            planet3.num;
            planet3.new_base_planet=0;
            planet3.new_planet_time=0;
            planet3.check_add_planet_arr=0;
            planet3.player_speed_vec= new Vec2(3,0);
            planet3.num_particles=30;
            planet3.setup_explosion_time = 2;
            planet3.check_num=0;
            //planet_gauge
            planet3.planet_gauge_length=80;
            
            planet3.create_planet_arr();
            player3.create_star();
            player3.create_defence();
            player3.create_jet();
            player3.create_shot();
            monster3.create_water_grid();
            monster3.create_bomb_arr();

        if (mouseX>860 && mouseX<1125 && mouseY>660 && mouseY<765) // MAIN_MENU_BUTTON
        {
            CURRENT_SCREEN = MAIN_MENU;
        } 

    //FAIL_3_SCREEN
    }else if(CURRENT_SCREEN == FAIL_3_SCREEN)
    {
            //player
            player3.x = 1050;
            player3.y = 400;
            player3.image_change =0
            player3.change_move = 0;
            player3.previous_x =1050;
            player3.speed = 3;
            player3.checkDir = 0;
            //star
            player3.point = 0;
            player3.star_arr=[];
            player3.total_star = 10;
            player3.base_star = 1;
            player3.star_check_move = 0; 
            player3.new_star_time=0;
            //defence
            player3.num_defence = 0;
            player3.defence_arr=[];
            player3.total_defence = 20;
            player3.base_defence = 3;
            player3.defence_check_move = 0; 
            player3.defence_time = 10;
            player3.check_defence_num = 0;
            player3.defence_frame = 0;
            player3.check_defence_frame = 0;
            player3.new_defence_time=0;
            player3.check_add_defence_arr=0;
            //jet
            player3.num_jet = 0;
            player3.jet_arr=[];
            player3.total_jet = 20;
            player3.base_jet = 3;
            player3.jet_check_move = 0;
            player3.jet_time = 10;
            player3.check_jet_num = 0;
            player3.jet_frame = 0;
            player3.check_jet_frame = 0;
            player3.new_jet_time=0;
            player3.check_add_jet_arr=0;
            //shooting
            player3.num_shot = 50;
            player3.shot_arr=[];
            player3.total_shot =30;
            player3.base_shot = 3;
            player3.shot_check_move = 0; //Control jet movement according to player's movement
            player3.check_shot_num = 0;
            player3.shot_frame = 0;
            player3.check_shot_frame = 0;
            player3.jet_shooting_arr =[];
            player3.new_shot_time=0;
            player3.check_add_shot_arr=0;
            //attack
            player3.shooting_location_arr=[];
            player3.shot_speed = new Vec2(8,0);
            //player_gauge
            player3.gauge_length=530;
            player3.gauge_x=650;
            player3.gauge_score=100;
            player3.gauge_change_x=530-player3.gauge_length;
            player3.check_player_planet_collision=0;
            player3.planet_collision_i;
            player3.check_planet_collision_i=0;
            player3.check_player_bomb_collision=0;
            player3.bomb_collision_i;
            player3.check_bomb_collision_i = 0;

            //monster
            monster3.x = 20;
            monster3.y = 250;
            monster3.image_change = 0; //basic monster
            monster3.change_move = 1; //right
            monster3.speed = 3;
            monster3.decide_xy = floor(random(2));
            monster3.move_x = random(20,880);
            monster3.move_y = random(105,495);
            //water
            monster3.water_check_move = 0;
            //water_bomb
            monster3.water_bomb_check_move = 0;
            monster3.checkDir = 0;
            //gauge_bar
            monster3.gauge_score = 100;
            monster3.gauge_length = 300;
            //collision
            monster3.check_monster_collision = 0;
            monster3.check_water_collision = 0;
            //water
            monster3.grid_arr=[];
            monster3.water_arr =[];
            monster3.water_disappear_time = 0;
            monster3.water_disappear_duration = 5;
            monster3.num_water = floor(random(8,10));       
            monster3.water_appear_time = 0;
            monster3.water_appear_duration = 5; 
            monster3.time_check=0;
            monster3.water_collision_i;
            monster3.check_water_collision_i =0;
            monster3.water_check_move =0;
            //bomb
            monster3.bomb_arr = [];
            monster3.explosion_time = 0;
            monster3.setup_explosion_time = 2;
            monster3.base_bomb = 5;
            monster3.total_bomb = 20;
            monster3.particle_arr=[];
            monster3.new_base_bomb = 0;
            monster3.new_bomb_time = 0;
            monster3.check_add_bomb_arr = 0;
            monster3.player_speed_vec = new Vec2(3,0);
            monster3.num_particles = 25;
            monster3.bomb_gauge_length=100;
            monster3.bomb_location_arr =[]
            monster3.check_bomb_arr =0;
            monster3.check_num = 0;
            monster3.num;
            monster3.explosion_num=[];
            monster3.explosion=[];
            monster3.bomb_check_move = 0;
            monster3.heart_img_time = 0;
            monster3.check_monster_shot_collision=0;
            //planet
            planet3.explosion =[]; //explosion particle
            planet3.planet_arr=[]; //planet location
            planet3.total_planet=20;
            planet3.base_planet=15;
            planet3.explosion_num=[]; //for random explosion
            planet3.planet_check_move=0;
            planet3.explosion_time=0;
            planet3.planet_location_arr=[]; ///whole location
            planet3.particle_arr=[]; //first location of particle
            planet3.check_planet_arr=0;
            planet3.num;
            planet3.new_base_planet=0;
            planet3.new_planet_time=0;
            planet3.check_add_planet_arr=0;
            planet3.player_speed_vec= new Vec2(3,0);
            planet3.num_particles=30;
            planet3.setup_explosion_time = 2;
            planet3.check_num=0;
            //planet_gauge
            planet3.planet_gauge_length=80;
            
            planet3.create_planet_arr();
            player3.create_star();
            player3.create_defence();
            player3.create_jet();
            player3.create_shot();
            monster3.create_water_grid();
            monster3.create_bomb_arr();
        if(mouseX>81 && mouseX<585 && mouseY>482 && mouseY<756) // RESTART_BUTTON
        {
            CURRENT_SCREEN = STAGE_3_SCREEN;

        }else if(mouseX>602 && mouseX<1115 && mouseY>480 && mouseY<758) // MAIN_MENU_BUTTON
        {
            CURRENT_SCREEN = MAIN_MENU;
        }
    }
}
 