function Countdown(){
    const startSeconds = Number(document.getElementById("secondsInput").value);
    document.getElementById("LeftSeconds").innerHTML = startSeconds;
    document.getElementById("LeftSeconds").style == "color: #000"
    let timePassed = 0;
    let timeLeft = startSeconds;
    let timerInterval = setInterval(()=> {
        if(timeLeft>=2){
        timePassed = timePassed += 1;
        timeLeft = startSeconds - timePassed;
        document.getElementById("LeftSeconds").innerHTML =  timeLeft;
        }
        else{
        document.getElementById("LeftSeconds").style = "color: #ff0000";
        document.getElementById("LeftSeconds").innerHTML =  "ВРЕМЯ ИСТЕКЛО";
        clearInterval(timerInterval);
        return;
    }
    },1000);
}