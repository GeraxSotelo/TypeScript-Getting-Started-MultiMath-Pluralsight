function startGame() {
    //start a new game

    let playerName: string | undefined;
    logPlayer(playerName);

    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name) {
    console.log(`New game starting for player: ${name}`);
}

//exclamation mark asserts that the object is non null
document.getElementById('startGame')!.addEventListener('click', startGame);