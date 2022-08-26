const obj=new Promise((resolve,reject)=>{
    let roll_no=[1,2,3,4,5]
    resolve(roll_no)
    // reject (roll_no)
})
obj.then((roll_no)=>{
    console.log(roll_no);
}).catch((roll_no)=>{
    console.log("sorry");

})