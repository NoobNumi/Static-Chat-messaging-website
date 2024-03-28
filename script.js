function sendMessage() {
    var message = document.getElementById("typing-box").value.trim(); // Trim whitespace

    // Check if the message is not blank
    if (message !== "") {
        var html = "<div class='sender'><p class='sender-msg'>" + message + "</p></div>";

        // Append the new message to the chat box
        document.getElementById("chat-box").insertAdjacentHTML('beforeend', html);

        // Scroll to the bottom of the chat box
        var chatBox = document.getElementById("chat-box");
        chatBox.scrollTop = chatBox.scrollHeight;

        // Clear the typing box
        document.getElementById("typing-box").value = "";
    }
}

document.getElementById("typing-box").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault(); // Prevents the default action of Enter (form submission)
        sendMessage();
    }
});
