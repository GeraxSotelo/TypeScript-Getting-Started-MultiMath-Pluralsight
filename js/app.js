"use strict";
function startGame() {
    //start a new game
    var messagesElement = document.getElementById('messages');
    messagesElement.innerText = 'Welcome to MultiMath! Starting new game...';
}
//exclamation mark asserts that the object is non null
document.getElementById('startGame').addEventListener('click', startGame);
//# sourceMappingURL=app.js.map