import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";


class PlayerService {

    addPlayer(score) {
        let player = appState.players.find(player => player.score == score)
        console.log('1 score', player);
        // creature.health -= 1
        Player.addPoint(+1)
    }

    minusPlayer(name) {
        let player = appState.players.find(player => player.score == score)
        console.log('-1 score', player);
        // creature.health -= 1
        Player.losePoint(-1)
    }

    createPlayer(playerData) {
        let newPlayer = new Player(playerData.name, playerData.score)
        appState.Players.push(newPlayer)
    }

}
export const playerService = new PlayerService()