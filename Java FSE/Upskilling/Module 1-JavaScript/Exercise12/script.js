document.getElementById("submitBtn").onclick = function () {

    const message = document.getElementById("message");

    message.textContent = "Submitting registration...";

    // Simulate delayed response
    setTimeout(() => {

        const userData = {
            name: "John",
            email: "john@gmail.com",
            event: "Music Fest"
        };

        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })

        .then(response => response.json())

        .then(data => {
            message.textContent =
                "Registration submitted successfully!";
            console.log(data);
        })

        .catch(error => {
            message.textContent =
                "Registration failed!";
            console.log(error);
        });

    }, 2000); // 2-second delay

};