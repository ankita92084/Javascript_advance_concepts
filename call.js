const youtuber1={
    name:"thapatechnical",
    content:"programming",
    feature:function(rating){
        console.log(`frndly way of ${this.name} is my fvrt ${this.content} channel. i would like to give ${rating} rating.`);
    }
}
// youtuber1.feature(5)
const youtuber2={
    name:"ankita",
    content:"bakchodi"


}
youtuber1.feature.call(youtuber2,5);

