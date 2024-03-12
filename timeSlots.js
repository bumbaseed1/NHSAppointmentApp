// timeSlots.js
export function generateTimeSlots(selectedDate) {
    const slots = [];
    const currentDate = new Date();
    const selectedDateTime = new Date(selectedDate);

    // Set hours and minutes for the current time
    let currentHour = currentDate.getHours();
    let currentMinute = currentDate.getMinutes();

    // Only start generating slots if the selected date is today or in the future
    if (
        selectedDateTime.setHours(0, 0, 0, 0) ===
        currentDate.setHours(0, 0, 0, 0)
    ) {
        // If the selected date is today, adjust the start hour based on the current time
        if (currentMinute >= 45) {
            // Adjust hour if past 45 minutes
            currentHour += 1;
        }
    } else if (selectedDateTime > currentDate) {
        // If the selected date is in the future, reset hour to start from 9 AM
        currentHour = 9;
    } else {
        // If the selected date is in the past, return an empty array or handle as needed
        return [];
    }

    for (let hour = currentHour; hour < 17; hour++) {
        for (let minute = 0; minute < 60; minute += 15) {
            if (
                hour === currentHour &&
                minute < currentMinute &&
                currentMinute < 45
            ) {
                // Skip slots for times already passed in the current hour
                continue;
            }
            const time = `${hour.toString().padStart(2, "0")}:${minute
                .toString()
                .padStart(2, "0")}`;
            slots.push(time);
        }
    }
    return slots;
}
