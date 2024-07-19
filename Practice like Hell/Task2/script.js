//Create a page with two images and a button. when the button is clicked, swap the source attributes of the images.
const btn = document.querySelector("button");
const img = document.querySelectorAll("img");
var flag = 0;
const source = [];
img.forEach(function(elem){
    source.push(elem.src);
})

btn.addEventListener("click",function(){
    if(!flag){
        img[0].src = source[1];
        img[1].src = source[0];
        flag = 1;
    }else{
        img[0].src = source[0];
        img[1].src = source[1];
        flag = 0;
    }
})