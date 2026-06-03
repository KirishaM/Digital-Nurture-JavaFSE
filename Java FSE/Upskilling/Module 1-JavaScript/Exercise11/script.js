document.getElementById("registrationForm")
.addEventListener("submit", function(event) {

    // Prevent default form submission
    event.preventDefault();

    const form = event.target;

    // Capture form values using form.elements
    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const selectedEvent = form.elements["event"].value;

    const error = document.getElementById("error");
    const success = document.getElementById("success");

    error.textContent = "";
    success.textContent = "";

    // Validation
    if (name === "" || email === "" || selectedEvent === "") {
        error.textContent = "Please fill all fields.";
        return;
    }

    // Success message
    success.textContent =
        `Registration Successful! Name: ${name}, Event: ${selectedEvent}`;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Event:", selectedEvent);
});