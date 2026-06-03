document.getElementById("submitBtn").onclick = function () {

    console.log("Step 1: Registration process started");

    const userData = {
        name: "John",
        email: "john@gmail.com",
        event: "Music Fest"
    };

    // Breakpoint for debugging
    debugger;

    console.log("Step 2: User data prepared");
    console.log(userData);

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })

    .then(response => response.json())

    .then(data => {
        console.log("Step 3: Registration successful");
        console.log("Response:", data);
    })

    .catch(error => {
        console.log("Step 3: Registration failed");
        console.error(error);
    });

};