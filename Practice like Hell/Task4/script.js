// Create an unordered list. Allow user to add and remove list items dynamically using buttons.
const ul = document.querySelector('ul');
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");

add.addEventListener("click",function(){
    var listItem = document.createElement("li");
    ul.appendChild(listItem);
})
remove.addEventListener("click",function(){
    if(ul.children.length>0){
        ul.removeChild(ul.lastElementChild);
    }
})