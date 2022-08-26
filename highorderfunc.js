const interviewQuestions=(name)=>{
    if (name=="ankita"){
        return function(topic){
            console.log(`hii ${name}.what is${topic}?.can you please explain.`);
        }
    }
    if (name=="anjali"){
        return function(topic){
            console.log(`hii ${name}.what is${topic}?.can you please explain.`);
        }
    }
    if (name=="dimple"){
        return function(topic){
            console.log(`hii ${name}.what is${topic}?.can you please explain.`);
        }
    }
}
interviewQuestions("ankita")(" python");
interviewQuestions("anjali")(" scop");
interviewQuestions("dimple")(" dryrun");




