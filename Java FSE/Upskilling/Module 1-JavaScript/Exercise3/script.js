// Event list
const events = [
    {
        name: "Music Fest",
        seats: 50,
        upcoming: true
    },
    {
        name: "Food Carnival",
        seats: 0,
        upcoming: true
    },
    {
        name: "Old Workshop",
        seats: 20,
        upcoming: false
    }
];

// Display only valid events
events.forEach(event => {

    if (event.upcoming && event.seats > 0) {
        console.log(`Available Event: ${event.name}`);
    } else {
        console.log(`Hidden Event: ${event.name}`);
    }

});

// Registration function with error handling
function registerUser(event) {

    try {

        if (!event.upcoming) {
            throw new Error("Cannot register for a past event.");
        }

        if (event.seats <= 0) {
            throw new Error("No seats available.");
        }

        event.seats--;
        console.log(`Registration successful for ${event.name}`);
        console.log(`Remaining Seats: ${event.seats}`);

    } catch (error) {

        console.log(`Registration Error: ${error.message}`);

    }
}

// Test registrations
registerUser(events[0]); // Valid event
registerUser(events[1]); // Full event
registerUser(events[2]); // Past event