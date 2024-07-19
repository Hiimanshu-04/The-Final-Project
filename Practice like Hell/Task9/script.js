const progress = document.querySelector(".progress");
const btn = document.querySelector("button");
const h3 = document.querySelector('h3');

var count = 1;
btn.addEventListener('click',function(){
    var prog = setInterval(() => {
        if(count == 100){
            h3.style.opacity=1;
            clearInterval(prog);
        }
        progress.style.width = count+"%";
        count++;
    }, 10);
})