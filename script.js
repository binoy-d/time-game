var state = 0;//0 = never clicked, 1 = generated time, 2 = started timer/counting, 3 = stopped timer
var timer = setInterval(count, 50)
var goalTime = 0;
var elapsedTime = 0; // in 0.05 sec intervals

function clicked(){
    if(state === 0){
        state++;//generate a time
    }else if(state === 1){
        state++;
    }else if(state ===2){
        state++;
    }else{//if state == 3
        state = 0;
    }
    updateText();
}
function generateTime(){
    goalTime = parseInt(Math.random()*7+3);
}
function updateText(){
    if(state === 0){
        elapsedTime = 0;
        document.getElementById("actualbutton").textContent = "Generate Time";
    }else if(state === 1){
        generateTime();
        document.getElementById("maintext").innerHTML = "Target Time: "+ goalTime+" sec";
        document.getElementById("actualbutton").textContent = "Start Timer";
    }else if(state === 2){
        document.getElementById("maintext").innerHTML = "Click stop timer to see how you did";
        document.getElementById("actualbutton").textContent = "Stop Timer";
    }else{//if state === 3
        var difference = (elapsedTime*0.05)-goalTime;


        document.getElementById("maintext").innerHTML = "You were off by "+difference+" seconds";
        document.getElementById("actualbutton").textContent = "Start Over";
    }
}
function count(){//runs every 50 milliseconds
    if(state == 2){
        elapsedTime++;
    }
    console.log(state)
}