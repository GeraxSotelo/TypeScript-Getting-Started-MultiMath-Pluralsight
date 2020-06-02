function startGame() {
    //start a new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(100, playerName);

    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Started new game...';
}

//using a default initialized param makes that param optional
function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
    //this function normally returns a value of the type HTMLElement
    //use type assertion <HTMLInputElement> to treat the element it finds as the more specific HTMLInputElement type.
    const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

    if (inputElement.value === '') {
        return undefined;
    }
    else {
        return inputElement.value;
    }
}

//the question mark character flags the param as optional
function postScore(score: number, playerName?: string): void {
    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;
}

//exclamation mark asserts that the object is non null
document.getElementById('startGame')!.addEventListener('click', startGame);