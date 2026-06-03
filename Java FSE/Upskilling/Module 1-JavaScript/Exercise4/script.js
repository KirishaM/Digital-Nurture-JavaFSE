// Event list
let events = [];

// Function to add an event
function addEvent(name, category, seats) {
    events.push({
        name: name,
        category: category,
        seats: seats
    });

    console.log(`${name} added successfully`);
}

// Function to register a user
function registerUser(eventName) {

    const event = events.find(
        e => e.name === eventName
    );

    if (event && event.seats > 0) {
        event.seats--;
        console.log(`Registered for ${event.name}`);
        registrationCounter();
    } else {
        console.log("Registration failed");
    }
}

// Higher-Order Function with Callback
function filterEventsByCategory(category, callback) {

    const filteredEvents = events.filter(
        event => event.category === category
    );

    callback(filteredEvents);
}

// Closure to track total registrations
function createRegistrationTracker() {

    let totalRegistrations = 0;

    return function () {
        totalRegistrations++;
        console.log(
            `Total Registrations: ${totalRegistrations}`
        );
    };
}

const registrationCounter = createRegistrationTracker();

// Add Events
addEvent("Music Fest", "Music", 50);
addEvent("Food Carnival", "Food", 30);
addEvent("Rock Concert", "Music", 40);

// Register Users
registerUser("Music Fest");
registerUser("Rock Concert");

// Filter Events using Callback
filterEventsByCategory("Music", function(result) {

    console.log("Music Events:");

    result.forEach(event => {
        console.log(event.name);
    });

});