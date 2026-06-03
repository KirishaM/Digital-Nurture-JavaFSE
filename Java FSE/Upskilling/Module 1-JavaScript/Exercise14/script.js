$(document).ready(function () {

    // Handle click event
    $('#registerBtn').click(function () {

        $('#message').text("Registration Successful!");

        // Fade out and fade in event card
        $('#eventCard').fadeOut(1000).fadeIn(1000);

    });

});