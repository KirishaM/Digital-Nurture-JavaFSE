// Event Constructor
function Event(name, category, seats) {
    this.name = name;
    this.category = category;
    this.seats = seats;
}

// Add method to prototype
Event.prototype.checkAvailability = function () {
    if (this.seats > 0) {
        return "Seats Available";
    } else {
        return "Event Full";
    }
};

// Create Event Objects
const event1 = new Event("Music Fest", "Music", 50);
const event2 = new Event("Food Carnival", "Food", 0);

// Check Availability
console.log(event1.name + ": " + event1.checkAvailability());
console.log(event2.name + ": " + event2.checkAvailability());

// List Keys and Values using Object.entries()
console.log("Event 1 Details:");

Object.entries(event1).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});