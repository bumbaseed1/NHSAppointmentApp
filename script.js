// Function to generate 15-minute time slots
function generateTimeSlots() {
    var slots = [];
    for (var hour = 9; hour < 17; hour++) {
        // Example: from 9 AM to 5 PM
        for (var minute = 0; minute < 60; minute += 15) {
            var time = `${hour.toString().padStart(2, "0")}:${minute
                .toString()
                .padStart(2, "0")}`;
            slots.push(time);
        }
    }
    return slots;
}

$(document).ready(function () {
    // Update time slots when a date is selected
    $("#appointment-date").change(function () {
        var slots = generateTimeSlots(); // Generate slots for any day
        var $timeSelect = $("#appointment-time");
        $timeSelect.empty(); // Clear existing options

        slots.forEach(function (slot) {
            $timeSelect.append($("<option>", { value: slot, text: slot }));
        });
    });
});

// Handling form submission for booking appointments
$("#appointment-form").on("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Extracting form values
    var patientName = $("#patient-name").val();
    var patientEmail = $("#patient-email").val();
    var appointmentDate = $("#appointment-date").val();
    var appointmentTime = $("#appointment-time").val();

    // Simple form validation
    if (patientName && patientEmail && appointmentDate && appointmentTime) {
        // Simulate form submission and booking
        alert("Your appointment has been booked successfully.");

        // Append the booked appointment details under "Your Appointments"
        $("#appointment-list").append(
            // Note the change to #appointment-list
            `<p>Appointment for ${patientName} on ${appointmentDate} at ${appointmentTime}. Contact Email: ${patientEmail}</p>`
        );

        // Reset the form (optional)
        $("#appointment-form")[0].reset();
        // Update the time slots as the form is reset
        $("#appointment-time").empty();
        generateTimeSlots().forEach(function (slot) {
            $("#appointment-time").append(
                $("<option>", { value: slot, text: slot })
            );
        });
    } else {
        alert("Please fill in all fields.");
    }
});
