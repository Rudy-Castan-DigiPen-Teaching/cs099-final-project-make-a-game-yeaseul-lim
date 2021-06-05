// Name       : Yeaseul Lim
// Assignment : Make a Game
// Course     : CS099
// Spring 2021

let MAIN_MENU=0;
let GAME_SCENE =1;
let GAME_OUT = 2;
let ENDING_SCENE =3;
let TUTORIAL = 4;
let CREDIT = 5;


//image
let img_bg;
let img_background;
let img_background_1000;
let img_background_2000;
let img_background_3000;
let img_player_left;
let img_player_right;
let img_player_shoot;
let img_player_defence_left;
let img_player_defence_right;
let img_player_zet_left;
let img_player_zet_right;
let img_planet_1;
let img_planet_2;
let img_planet_3;
let img_planet_4;
let img_star; 
let img_defence;
let img_zet;

//class
let player;

//let
let millisecond;


function preload()
{
    img_background = loadImage('media/background.jpg');
    img_background_1000 = loadImage('media/background1.jpg');
    img_background_2000 = loadImage('media/background2.jpg');
    img_background_3000 = loadImage('media/background3.jpg');

    img_player_left= loadImage('media/player_left.png');
    img_player_right= loadImage('media/player_right.png');
    img_player_defence_left =loadImage('media/player_defence_left.png');
    img_player_defence_right =loadImage('media/player_defence_right.png');
    img_player_zet_left =loadImage('media/player_zet_left.png');
    img_player_zet_right = loadImage('media/player_zet_right.png');
    
    img_star = loadImage('media/star.png');
    img_defence = loadImage('media/defence.png');
    img_zet = loadImage('media/zet.png');
}    

function setup()
{
    createCanvas( 1200,800 );
    img_bg = img_background;
    player = new player_class(1000,400,img_bg);
    
}

function draw()
{
    millisecond = millis();
    background(img_bg);

    //player function
    player.player_image(img_player_left ,img_player_right, img_player_defence_left, img_player_defence_right, img_player_zet_left,img_player_zet_right);
    player.player_move();
    
    //star function
    player.create_star();
    player.star_image(img_star,millisecond);
    player.star_collision();
    player.count_point();
    player.change_background();
    img_bg = player.bg;
    player.star_move();

    //defence function
    player.create_defence();
    player.defence_image(img_defence,millisecond);
    player.defence_collision();
    player.count_defence();
    player.defence_move();
    player.show_defence_time(millisecond);

    //zet function
    player.create_zet();
    player.zet_image(img_zet,millisecond);
    player.zet_collision();
    player.count_zet();
    player.zet_move();
    player.show_zet_time();


    push();
    stroke(255);
    line(20,55, width-20,55);
    line(20,55,20,height-55);
    line(20,height-55, width-20,height-55);
    line(width-20,55,width-20,height-55);
    pop();
}

function keyPressed()
{
    player.change_player_img_defence();
    player.change_player_img_zet();
}

function mousePressed()
{
    console.log(mouseX,mouseY);
}
 