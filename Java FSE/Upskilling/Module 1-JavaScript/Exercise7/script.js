// Access DOM element using querySelector()
const eventContainer = document.querySelector("#eventContainer");
const statusText = document.querySelector("#status");

// Create event card using createElement()
const eventCard = document.createElement("div");

eventCard.innerHTML = `
    <h3>Music Fest</h3>
    <p>Category: Music</p>
`;

eventCard.style.border = "1px solid black";
eventCard.style.padding = "10px";
eventCard.style.margin = "10px";

// Append card to webpage
eventContainer.appendChild(eventCard);

// Update UI when user registers
document.querySelector("#registerBtn").onclick = function () {
    statusText.textContent = "Registered Successfully";
};

// Update UI when user cancels
document.querySelector("#cancelBtn").onclick = function () {
    statusText.textContent = "Registration Cancelled";
};