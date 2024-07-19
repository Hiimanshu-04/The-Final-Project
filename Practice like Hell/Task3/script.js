//Create a form with input fields and a submit button. use Javascript to validate the form and display an error message if the input is invalid.
const form = document.querySelector("form");
const inps = document.querySelectorAll('input');
const h4 = document.querySelector("h4");

function validate(){
    for(var i =0; i<inps.length-1;i++){
        if(inps[i].value.trim()===''){
            h4.textContent="There is some Error";
            h4.style.color="red";
            break;
        }else{
            h4.textContent="";
        }
    }
}

form.addEventListener("submit", function(e){
    e.preventDefault();
    validate();
})
