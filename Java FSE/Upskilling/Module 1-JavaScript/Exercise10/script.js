// Using const and let
const portalName = "Community Event Portal";

let events = [
    {
        name: "Music Fest",
        category: "Music",
        seats: 50
    },
    {
        name: "Food Carnival",
        category: "Food",
        seats: 30
    },
    {
        name: "Rock Concert",
        category: "Music",
        seats: 40
    }
];

// Function with default parameters
function addEvent(
    name = "New Event",
    category = "General",
    seats = 0
) {
    return { name, category, seats };
}

const newEvent = addEvent();

console.log("New Event:");
console.log(newEvent);

// Destructuring event details
const { name, category, seats } = events[0];

console.log("Event Details:");
console.log(name);
console.log(category);
console.log(seats);

// Spread operator to clone event list
const clonedEvents = [...events];

// Filter only Music events
const musicEvents = clonedEvents.filter(
    event => event.category === "Music"
);

console.log("Music Events:");
console.log(musicEvents);