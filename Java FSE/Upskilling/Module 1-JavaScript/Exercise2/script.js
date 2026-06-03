const eventName = "Music Fest";
const eventDate = "15-Aug-2026";
let seats = 100;

// Display event details using template literals
console.log(`Event Name: ${eventName}`);
console.log(`Event Date: ${eventDate}`);
console.log(`Available Seats: ${seats}`);

// Registration reduces seat count
seats--;

console.log(`Seats after registration: ${seats}`);