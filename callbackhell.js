const getRollno=()=>{
    setTimeout(()=>{
        console.log("getting roll no.");
        let roll_no=[1,2,3,4,5]
        console.log(roll_no);

        setTimeout(()=>{
            const biodata={
                name:"ankita",
                age:26
            }
            console.log(`my roll is ${roll_no}. my name is ${biodata.name} and i am ${biodata.age}years old `);

        },2000)

    },2000);
    
    
}
getRollno()