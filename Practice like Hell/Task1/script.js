// Create  an HTML page with a button. When the button is clicked, change the text of a paragraph element.
const btn = document.querySelector("#btn");
const para = document.querySelector("p");

const originalContent = para.textContent;
var flag = 0;
btn.addEventListener("click",function(){
    if(!flag){
        para.textContent="My Name is Himanshu";
        flag =1;
    }else{
        para.textContent=originalContent;
        flag = 0;
    }
})