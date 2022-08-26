// const li=[1,2,3,4,5,6]
// let [a,b,c,d,e,f]=li;
// console.log(...li);
// let [a,,,,,f]=li
// console.log(a,f);



const biodata={
    name:"ankita",
    age:21,
    deg:"BA",
    hobby:{
        first:"playing",
        sec:" reels"
    }
}
let {name:myname,age,deg,hobby}=biodata;
console.log(`my name is ${myname}.My age is ${age}.My highest qualification is ${deg} and i love to make ${hobby.sec} `);




