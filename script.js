$(document).ready(function () {
    const appointmentTimes = [
        "09:00",
        "10:00",
        "11:00",
        "14:00",
        "15:00",
        "16:00",
    ]; // Example slots
    appointmentTimes.forEach((time) => {
        $("#appointment-time").append(
            $("<option>", {
                value: time,
                text: time,
            })
        );
    });
});

//  Form submission and validation
$("#appointment-form").on("submit", function (e) {
    e.preventDefault(); // Prevent actual form submission

    // Simple validation example
    if (
        $("#patient-name").val() &&
        $("#patient-email").val() &&
        $("#appointment-date").val() &&
        $("#appointment-time").val()
    ) {
        // Simulate form submission
        alert("Your appointment has been booked successfully.");
        // Here you would typically send the form data to a server
    } else {
        alert("Please fill in all fields.");
    }
});

// Example: Show a message when no appointments are available
$("#appointment-date").change(function () {
    const selectedDate = $(this).val();
    // Simulate checking for availability
    if (!selectedDate) {
        // Simplified condition for demonstration
        $("#appointment-details").html(
            "<p>No appointments are available on the selected date. Please choose another date.</p>"
        );
    } else {
        $("#appointment-details").empty(); // Clear the message if the date is valid
    }
});
