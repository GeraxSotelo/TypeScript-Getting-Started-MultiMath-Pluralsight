function startGame() {
    //start a new game

    let playerName: string = 'Audrey';
    logPlayer(playerName);

    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Starting new game...';
}

function logPlayer(name: string): void {
    console.log(`New game starting for player: ${name}`);
}

//exclamation mark asserts that the object is non null
document.getElementById('startGame')!.addEventListener('click', startGame);