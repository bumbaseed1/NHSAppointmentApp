// Generating time slots to simulate available appointments, rather than pull from api.
function generateTimeSlots() {
    var slots = [];
    for (var hour = 9; hour < 17; hour++) {
        // Assuming appointments from 9:00 to 16:45
        for (var minute = 0; minute < 60; minute += 15) {
            var time = `${hour.toString().padStart(2, "0")}:${minute
                .toString()
                .padStart(2, "0")}`;
            slots.push(time);
        }
    }
    return slots;
}

// Simulated availability data
var availability = {
    "2024-02-21": generateTimeSlots().filter(
        (time) => time !== "09:00" && time !== "09:15"
    ), // Example of filtering out some slots
    "2024-02-22": generateTimeSlots().filter(
        (time) => time !== "11:00" && time !== "11:15"
    ), // Different slots unavailable
};

$(document).ready(function () {
    $("#appointment-date").change(function () {
        var selectedDate = $(this).val();
        var slots = availability[selectedDate] || [];
        var $timeSelect = $("#appointment-time");

        $timeSelect.empty(); // Clear existing options
        if (slots.length > 0) {
            slots.forEach(function (slot) {
                $timeSelect.append($("<option>", { value: slot, text: slot }));
            });
        } else {
            $timeSelect.append(
                $("<option>", { value: "", text: "No available slots" })
            );
        }
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
