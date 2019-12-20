var d = 0;
var state = 0;
var waittime = 0; //in milliseconds
var goalTime = 0;
var seconds = 0;
function generateTime(){
    goalTime = (int)(Math.random()*17+3);//generates goal time
    document.getElementById('goalTimeText').innerHTML = goalTime;

}

function setup(){
    frameRate(60);

}
function clicked(){
    if(state === 0){
        state = 1;//start timer/timer runs
    }else if(state === 1){
        state = 2;//stop timer
    }
    
}
function draw(){
    if(state === 1){
        waittime++;
        if(waittime%60 === 0){
            seconds++;
        }
    }
    if(state === 2){
        var difference = seconds - goalTime
        
        document.getElementById('difP').innerHTML = "You were off by "+difference +" seconds"; 
    }
    document.getElementById('timer').innerHTML = waittime;


}
