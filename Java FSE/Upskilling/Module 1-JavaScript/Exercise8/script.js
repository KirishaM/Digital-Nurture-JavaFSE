// onclick for Register button
document.getElementById("registerBtn").onclick = function () {
    document.getElementById("message").textContent =
        "Registration Successful!";
};

// onchange for category filter
document.getElementById("category").onchange = function () {

    const selectedCategory = this.value;

    document.getElementById("filterResult").textContent =
        "Selected Category: " + selectedCategory;
};

// keydown for quick search
document.getElementById("searchBox").addEventListener(
    "keydown",
    function (event) {

        document.getElementById("searchResult").textContent =
            "Searching for: " + event.target.value;
    }
);