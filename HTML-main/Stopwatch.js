function Countdown(){
    const startSeconds = Number(document.getElementById("secondsInput").value);
    let seconds = document.getElementById("LeftSeconds");
    seconds.style = "color: #000000"
    document.getElementById("LeftSeconds").innerHTML = startSeconds;
    let timePassed = 0;
    let timeLeft = startSeconds;
    let timerInterval = setInterval(()=> {
        if(timeLeft>=2){
        timePassed = timePassed += 1;
        timeLeft = startSeconds - timePassed;
        seconds.innerHTML =  timeLeft;
        }
        else{
        seconds.style = "color: #ff0000";
        seconds.innerHTML =  "ВРЕМЯ ИСТЕКЛО";
        clearInterval(timerInterval);
        return;
    }
    },1000);
}