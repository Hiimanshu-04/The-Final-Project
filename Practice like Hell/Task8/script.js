const search = document.querySelector("input");
const names = document.querySelectorAll("h4");
const people = document.querySelector(".people");

var data = [{name: "Himanshu" , src: "https://plus.unsplash.com/premium_photo-1686090449200-57266c6623a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"},
    {name: "Harshita", src:"https://images.unsplash.com/photo-1721265250302-c02ea398a73c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"},
    {name: "Himani" ,src: "https://images.unsplash.com/photo-1721223818837-ce474fae0e38?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"},
    {name: "Shayam", src: "https://images.unsplash.com/photo-1721265250103-126ebf3ed4f6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D"}
]


var person="";
data.forEach(function(per){
    person += `<div class="person">
                        <div class="image">
                            <img src="${per.src}" alt="">
                        </div>
                        <h4>${per.name}</h4>
                    </div>`

                    
})
people.innerHTML= person;

search.addEventListener("input",function(){
   var finalPerson = data.filter(function(per){
        return per.name.startsWith(search.value);
    })
    var newUsers=""
    finalPerson.forEach(function(per){
        newUsers+=`<div class="person">
                        <div class="image">
                            <img src="${per.src}" alt="">
                        </div>
                        <h4>${per.name}</h4>
                    </div>`

    })
    people.innerHTML= newUsers;
})