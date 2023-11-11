document.getElementById('send-button').addEventListener('click', function() {
    var input = document.getElementById('chat-input');
    var message = input.value.trim();

    if (message) {
        var chatWindow = document.getElementById('chat-window');
        var newMessageDiv = document.createElement('div');
        newMessageDiv.classList.add('message', 'user-message');
        newMessageDiv.textContent = message;

        chatWindow.appendChild(newMessageDiv);
        input.value = ''; // Clear the input field
    }
});
