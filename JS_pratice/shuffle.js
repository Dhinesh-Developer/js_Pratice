const cards = ['A', 2,3,4,5, 6, 7,8,9.10,'j','Q','k'];
cards.sort(()=>Math.random() -0.5);
console.log(cards);

//Fisher yates algorithm.
/*
shuffle(cards);
function shuffle(array){
    for(let i=array.length-1;i>=0;i--){
        const random = Math.floor(Math.random() * (i+1));
    }
}
*/