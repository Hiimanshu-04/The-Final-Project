// Build a countdown timer that starts when a button is clicked and updates the display in real-time
const timer = document.querySelector('h1');
const play = document.getElementById('play');
const reset = document.getElementById("reset");
var i =1;
var myInterval;
function timerUpdate(){
    timer.textContent=i;
        i++;
}
play.addEventListener("click",function(){
    myInterval = setInterval(timerUpdate, 1000);
    
})
reset.addEventListener("click",function(){
    i=0;
    timerUpdate();
    clearInterval(myInterval);
});