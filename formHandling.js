import { generateTimeSlots } from "./timeSlots.js";

export function initFormHandlers() {
    $(document).ready(function () {
        $("#appointment-date").change(function () {
            updateAppointmentTimes();
        });

        function updateAppointmentTimes() {
            const selectedDate = $("#appointment-date").val(); // Get the selected date
            const slots = generateTimeSlots(selectedDate);
            const $timeSelect = $("#appointment-time");
            $timeSelect.empty();
            slots.forEach((slot) => {
                $timeSelect.append($("<option>", { value: slot, text: slot }));
            });
        }

        $("#appointment-form").on("submit", function (e) {
            e.preventDefault();
            var patientName = $("#patient-name").val();
            var patientEmail = $("#patient-email").val();
            var appointmentDate = $("#appointment-date").val();
            var appointmentTime = $("#appointment-time").val();

            if (
                patientName &&
                patientEmail &&
                appointmentDate &&
                appointmentTime
            ) {
                alert("Your appointment has been booked successfully.");
                $("#appointment-list").append(
                    `<p>Appointment for ${patientName} on ${appointmentDate} at ${appointmentTime}.</p>`
                );
                $("#appointment-form")[0].reset();
                updateAppointmentTimes();
            } else {
                alert("Please fill in all fields.");
            }
        });
    });
}
// This code listens for changes to the date input and updates the time slots accordingly. When the form is submitted, it checks if all fields are filled in and displays an alert message accordingly. The form is then reset and the time slots are updated.
