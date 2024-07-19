//   /*
//   global - window
//   function - window
//   method - object
//   fnc inside method (es5) - window
//   fnc inside method 9es6) - object
//   constructor fnc mein this ki value - new blankbobject
//   event listener mein this ki value - that element jispe event listener lga h. 
//   */
//  console.log(this);

//  function abcd(){
//     console.log(this);
//  }
//  abcd();

//  var obj = {
//     name: function(){
//         console.log(this);
//     },
//     age: 18
//  }
//  obj.name()

//  var obj2 = { 
//     sayName: function(){
//         console.log(this);
//         function childFnc(){
//             console.log(this);
//         }
//         childFnc();
//     },
//     age: 20
//  }
//  obj2.sayName();


//  var obj3 = {
//     sayName3: function(){
//         console.log(this);
//         const child = ()=>{
//             console.log(this);
//         }
//         child();
//     }
//  }
//  obj3.sayName3();

// Prototypal Inheritance

// function makeHuman(name, age){
//     this.name = name;
//     this.age = age;
// }
// makeHuman.prototype.printMyName = function (){
//     console.log(this.name);
// }
// const human1 = new makeHuman("Himanshu", 20);

/////////////////////////////////////////////////////////

// closures

// function counter(){
//     var count = 90;
//     return function(){
//         console.log(count);
//     }
// }

//////////////////////////////////////////////////////////

//  document.querySelector("#parent")
//  .addEventListener("click",(e)=>{
//     if(e.target.id === "play"){
//         console.log("Play song");
//     }else if(e.target.id === "pause"){
//         console.log("Pause song");
//     }
//  })
/////////////////////////////////////////////////////////

