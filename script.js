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
    goalTime = parseInt(Math.random()*17+3);
}
document.onkeypress = function (e) {
    e = e || window.event;
    
    if(e.keyCode === 32){
        clicked();
    }
};
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
        var difference = Math.round(((elapsedTime*0.05)-goalTime)*100)/100;

        if(difference<0){
            document.getElementById("maintext").innerHTML = "You were " +(-1*difference) +" seconds early";
        }else if(difference>0){
            document.getElementById("maintext").innerHTML = "You were " +difference +" seconds late";
        }else{
            document.getElementById("maintext").innerHTML = "Perfect Timing!!";
        }
        document.getElementById("actualbutton").textContent = "Start Over";
    }
}
function count(){//runs every 50 milliseconds
    if(state == 2){
        elapsedTime++;
    }
    console.log(state)
}