const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
//var time ;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);

    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
      }

    Engine.update(engine);

    // write code to display time in correct format here
    

}

async function getBackgroundImg(){

// write code to fetch time from API
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var resJSON = await response.json();
 var date = resJSON.datetime;
 var time = getHour;

 //"2021-05-09T12:09:57.382600+00:00",  
 var getHour = date.slice(11,13);
 console.log(getHour);

// add conditions to change the background images from sunrise to sunset
if(getHour >= 03 && getHour <= 04){
    bg = "sunrise1.png";
    
} else if(getHour >= 04 && getHour <= 05){
bg = "sunrise2.png"

}else if(getHour >= 05 && getHour <= 06){
    bg = "sunrise3.png"

}else if(getHour >= 06 && getHour <= 07){
    bg = "sunrise4.png"

}else if(getHour >= 07 && getHour <= 10){
    bg = "sunrise5.png"

}else if(getHour >= 10 && getHour <= 12){
    bg = "sunrise6.png"

}else if(getHour >= 12 && getHour <= 15){
    bg = "sunset7.png"

}else if(getHour >= 15 && getHour <= 17){
    bg = "sunset8.png"

}else if(getHour >= 17 && getHour <= 18){
    bg = "sunset10.png"

}else if(getHour >=18  && getHour <= 20){
    bg = "sunset11.png"

 }else {
    bg = "sunset12.png"
}

//load the image in backgroundImg variable here
backgroundImg = loadImage(bg);


}


 
