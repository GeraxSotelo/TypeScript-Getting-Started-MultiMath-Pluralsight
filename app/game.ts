/// <reference path="utility.ts" />
/// <reference path="result.ts" />
/// <reference path="player.ts" />
/// <reference path="scoreboard.ts" />

class Game {
    private scoreboard: Scoreboard = new Scoreboard();
    player: Player;
    problemCount: number;
    factor: number;

    constructor(newPlayer: Player, numOfProblems: number, multFactor: number) {
        this.player = newPlayer;
        this.problemCount = numOfProblems;
        this.factor = multFactor;
    }
}