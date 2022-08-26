const arr=[5,8,3,9,2,4]
const output=arr.reduce(function(acc,curr){
    acc+=acc+curr
    return acc
})
console.log(output);