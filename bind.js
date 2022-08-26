const youtube={
    name:"ankita",
    content:"programming",
    feature:function(){
        console.log(`hii ${this.name} i love your ${this.content} channel.`);

    }
}
youtube.feature()
let you=youtube.feature.bind(youtube)

