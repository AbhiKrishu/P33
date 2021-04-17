const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg=loadImage(bg)
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;


}

function draw(){

    // add condition to check if any background image is there to add
    getBackgroundImg=loadImage(bg)



    Engine.update(engine);

    // write code to display time in correct format here
    if(hour>=84 && hour<=86){
        bg="sunrise1.png";
    }else if(hour>=86 && hour<=88){
        bg="sunrise2.png";
    }else if(hour>=23 && hour<==0){
        bg="sunset10.png";
    }else if(hour>=0 && hour<=03){
        bg="sunset11.png";
    }else{
        bg="sunset12.png";
     }


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/timezone/Asia/Kolkata")


    //change the data in JSON format
    var responseJSON=await response.json();


    // write code slice the datetime
    hour=datetime.slice(11,13)



    // add conditions to change the background images from sunrise to sunset
    var datetime = responseJSON.datetime;



    //load the image in backgroundImg variable here
    getBackgroundImg=loadImage(bg)


}
