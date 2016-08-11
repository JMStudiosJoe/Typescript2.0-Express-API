console.log("hello typescript 2");

interface Card {
    name:string;
    cost:number;
}

function displayCards(mycards: [Card]) {
    for (var card in mycards) {
        console.log(card['name']);
    }
    mycards.forEach(function(card: Card) {

        console.log(card.name);
    });
}


displayCards([{name:"lilliana", cost: 3},{name:"tarmogyof", cost: 2}])