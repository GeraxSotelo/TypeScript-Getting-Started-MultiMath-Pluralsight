/// <reference path="player.ts" />

function startGame() {
    //start a new game

    let playerName: string | undefined = getInputValue('playername');
    logPlayer(playerName);

    postScore(100, playerName);
    postScore(-5, playerName);

    var messagesElement = document.getElementById('messages');
    messagesElement!.innerText = 'Welcome to MultiMath! Started new game...';
}

//using a default initialized param makes that param optional
function logPlayer(name: string = 'MultiMath Player'): void {
    console.log(`New game starting for player: ${name}`);
}

//the question mark character flags the param as optional
function postScore(score: number, playerName?: string): void {
    //to give a var a fn type, add a colon after the var name, then put expected fn params & their types in parenthesis followed by an arrow & expected fn return type.
    //this 'logger' var may now be assigned any fn that takes a single string param & returns void.
    let logger: (value: string) => void;

    if (score < 0) {
        logger = logError;
    }
    else {
        logger = logMessage;
    }

    const scoreElement: HTMLElement | null = document.getElementById('postedScores');
    scoreElement!.innerText = `${score} - ${playerName}`;

    logger(`Score: ${score}`);
}

//exclamation mark asserts that the object is non null
document.getElementById('startGame')!.addEventListener('click', startGame);

//compiler infers return type is void
const logMessage = (message: string) => console.log(message);

function logError(err: string): void {
    console.error(err);
}

//demonstrate implementing interface with object literal
// let myResult: Result = {
//     playerName: 'Marie',
//     score: 5,
//     problemCount: 5,
//     factor: 7
// }

// let player: Person = {
//     name: 'Daniel',
//     formatName: () => "Dan"
// }


const firstPlayer: Player = new Player();
firstPlayer.name = "Gerax";
console.log(firstPlayer.formatName());