const loading = document.getElementById("loading");
const eventList = document.getElementById("eventList");

// Using .then() and .catch()
fetch("https://jsonplaceholder.typicode.com/posts")

    .then(response => response.json())

    .then(data => {

        loading.style.display = "none";

        data.slice(0, 5).forEach(event => {

            const li = document.createElement("li");
            li.textContent = event.title;
            eventList.appendChild(li);

        });
    })

    .catch(error => {

        loading.textContent = "Error loading events";
        console.log(error);

    });


// Using async/await
async function fetchEvents() {

    try {

        loading.style.display = "block";

        const response =
            await fetch("https://jsonplaceholder.typicode.com/posts");

        const data = await response.json();

        console.log("Events Loaded Using Async/Await");

        loading.style.display = "none";

    }

    catch (error) {

        loading.textContent = "Error loading events";
        console.log(error);

    }
}

fetchEvents();