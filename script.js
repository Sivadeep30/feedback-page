document.addEventListener("DOMContentLoaded", function() {
    const emojiButtons = document.querySelectorAll(".emoji-button");
    const sendButton = document.getElementById("sendButton");
    const confirmationMessage = document.getElementById("confirmationMessage");
    let selectedEmoji = null;

    // Add click event listeners to emoji buttons
    emojiButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remove 'selected' class from all emoji buttons
            emojiButtons.forEach(btn => btn.classList.remove("selected"));
            // Add 'selected' class to the clicked button
            this.classList.add("selected");
            // Store the selected emoji
            selectedEmoji = this.innerHTML;
        });
    });

    // Add click event listener to the send button
    sendButton.addEventListener("click", function() {
        if (selectedEmoji) {
            // Show confirmation message
            confirmationMessage.textContent = `Thank you for your feedback: ${selectedEmoji}`;
            confirmationMessage.style.display = "block";

            // Change button text and disable it
            sendButton.textContent = "Sent!";
            sendButton.disabled = true;
            sendButton.style.backgroundColor = "#28a745"; // Change to a green color
            sendButton.style.cursor = "not-allowed";

            // Optionally, reset after a few seconds
            setTimeout(function() {
                sendButton.textContent = "Send";
                sendButton.disabled = false;
                sendButton.style.backgroundColor = "#808080"; // Change back to blue color
                sendButton.style.cursor = "pointer";
                confirmationMessage.style.display = "none";
                emojiButtons.forEach(btn => btn.classList.remove("selected")); // Deselect all emojis
                selectedEmoji = null;
            }, 3000); // Reset after 3 seconds
        } else {
            // Show a message if no emoji is selected
            confirmationMessage.textContent = "Please select an emoji!";
            confirmationMessage.style.display = "block";
            confirmationMessage.style.color = "red";

            setTimeout(() => {
                confirmationMessage.style.display = "none";
            }, 2000); // Hide the message after 2 seconds
        }
    });
});
