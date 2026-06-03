// Array of community events
let events = [];

// Add new events using push()
events.push({
    name: "Music Fest",
    category: "Music"
});

events.push({
    name: "Baking",
    category: "Workshop"
});

events.push({
    name: "Rock Concert",
    category: "Music"
});

// Filter only Music events
const musicEvents = events.filter(
    event => event.category === "Music"
);

console.log("Music Events:");
console.log(musicEvents);

// Format display cards using map()
const displayCards = events.map(
    event => `Workshop on ${event.name}`
);

console.log("Display Cards:");
displayCards.forEach(card => console.log(card));