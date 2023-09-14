document.addEventListener("DOMContentLoaded", function () {
    const greetButton = document.getElementById("greetButton");
    const greetingMessage = document.getElementById("greetingMessage");

    greetButton.addEventListener("click", function () {
        const yourName = "Ridwan Adewale";   // Replace with your name
        const herName = "Maryam Omotolani";     // Replace with her name
        const destination = "Virginia"; // Replace with her travel destination

        const message = `Hello, ${herName}!\n\nWishing you a safe and wonderful journey to ${destination}. May your time in Richmond be filled with amazing experiences and beautiful memories. Take care and enjoy every moment.\n\nWith love,\n${yourName}`;
        greetingMessage.textContent = message;
    });
});
