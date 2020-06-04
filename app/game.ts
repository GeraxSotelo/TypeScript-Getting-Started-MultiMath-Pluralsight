/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />

class Game {
    // private scoreboard: Scoreboard = new Scoreboard();
    // player: Player;
    // problemCount: number;
    // factor: number;

    // constructor(newPlayer: Player, numOfProblems: number, multFactor: number) {
    //     this.player = newPlayer;
    //     this.problemCount = numOfProblems;
    //     this.factor = multFactor;
    // }

    /**SAME AS**/

    private scoreboard: Scoreboard = new Scoreboard();

    constructor(public player: Player, public problemCount: number, public factor: number) {
    }

    displayGame(): void {
        //create the html for the current game
        let gameForm: string = '';
        for (let i = 1; i <= this.problemCount; i++) {
            gameForm += '<div class="form-group">';
            gameForm += '<label for="answer' + i + '" class="col-sm-2 control-label">';
            //The built-in String() constructor can be passed any value & it'll attempt to convert it to a string.
            gameForm += String(this.factor) + ' x ' + i + ' = </label>';
            gameForm += '<div class="col-sm-1"><input type="text" class="form-control" id="answer' + i + '" size="5" /></div>';
            gameForm += '</div>';
        }

        //add the new game to the page
        const gameElement: HTMLElement = document.getElementById('game')!;
        gameElement.innerHTML = gameForm;

        //enable the calculate score button
        document.getElementById('calculate')!.removeAttribute('disabled');
    }
}