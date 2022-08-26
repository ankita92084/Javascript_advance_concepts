// function func(){
//     return this;
// }
// console.log(func());




// "use strict";
// function myFunction() {
//   return this;
// }
// console.log(myFunction());


const dic={
    name:"ankita",
    age:21,
    deg:"B.A",
    getname:function(){
        console.log(this.name);
    },
    getage:function(){
        console.log(this.age);

    }
    
}
dic.getname()
dic.getage()










