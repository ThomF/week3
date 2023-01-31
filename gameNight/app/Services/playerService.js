import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";


class PlayerService {

    addPlayer(name) {
        let player = appState.players.find(player => player.name == name)
        console.log('1 score', player);
        // creature.health -= 1
        Player.addPoint()
    }

    minusPlayer(name) {
        let player = appState.players.find(player => player.name == name)
        console.log('-1 score', player);
        // creature.health -= 1
        Player.losePoint()
        
    }

    createPlayer(playerData) {
        let newPlayer = new Player(playerData.name, playerData.score)
        appState.Players.push(newPlayer)
    }

}
export const playerService = new PlayerService