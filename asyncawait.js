const promise=new Promise((resolve,reject)=>{
    a=2
    if (a<5){
        resolve("true")
    }
    else{
        reject("false")
    }
})
// promise.then((resolve)=>{
//     console.log(resolve);

// }).catch((reject)=>{
//     console.log(reject);
// })
async function getinfo(){
    try{
        const get=await promise;
        console.log(get);
    }catch(reject){
        console.log(reject);
    }
    finally{
        console.log("hello");
    }
}
getinfo()
