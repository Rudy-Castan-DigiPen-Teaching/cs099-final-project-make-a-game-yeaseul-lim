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
let img_background;
let img_background_1000;
let img_background_2000;
let img_background_3000;
let img_player_left;
let img_player_right;
let img_player_shoot;
let img_player_defence_left;
let img_player_defence_right;
let img_player_zet;
let img_planet_1;
let img_planet_2;
let img_planet_3;
let img_planet_4;
let img_star; 

//class
let player;

//var
var image_change = 0;
var check_star = 0;

function preload()
{
    img_player_left= loadImage('media/player_left.png');
    img_player_right= loadImage('media/player_right.png');
    img_player_defence_left =loadImage('media/player_defence_left.png');
    img_player_defence_right =loadImage('media/player_defence_right.png');
    
    img_star = loadImage('media/star.png');
}    

function setup()
{
    createCanvas( 1200,800 );
    player = new player_class(1000,400,image_change,check_star);
    
}

function draw()
{
    let millisecond = millis();
    background( 220 );

    player.star_image(img_star,millisecond);
    player.image(img_player_left ,img_player_right, img_player_defence_left, img_player_defence_right);
    player.move();
    
    player.star_collision();
    circle(player.x+30,player.y+30,10);
    circle(player.star_arr[0].x+20,player.star_arr[0].y+20,10);
}

function keyPressed()
{
    player.defence();
}
 