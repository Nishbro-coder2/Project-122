x = 0;
y = 0;
drawApple = "";
screenWidth = 0;
screenHeight = 0;
Apple ="";
speakData = "";
toNumber = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function preload()
{
    Apple = loadImage("Apple.png");
}
function start(){
    document.getElementById("status").innerHTML = "System is listening.Please speak.";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);
     var content = event.results[0][0].transcript;
     document.getElementById("status").innerHTML = "Speech has been recognised as: " + content;
     toNumber = Number(content);
     if(Number.isInteger(toNumber)){
        drawApple = "set";
     }

     else{
         document.getElementById("status").innerHTML = "The speech has not recognised a number";
     }
}

function setup(){
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    canvas = createCanvas(screenWidth,screenHeight - 150);
    canvas.position(0,150); 
}

function draw(){
    if(drawApple == "set"){
        for(var i = 1 ; i <= to_number; i++) 
        { x = Math.floor(Math.random() * 700);
             y = Math.floor(Math.random() * 400); 
             image(apple, x, y, 50, 50); } 
             document.getElementById("status").innerHTML = to_number + " Apples drawn";
              speak_data = to_number + "Apples drawn";
               speak(); 
        draw_apple = "";
    }
}

function speak(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(speakData);
    synth.speak(utterThis);
    speakData = "";
}