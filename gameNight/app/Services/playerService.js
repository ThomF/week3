import { appState } from "../AppState.js";
import { Player } from "../Models/Player.js";


class PlayerService {

    createCreature(creatureData) {
        let newPlayer = new Creature(playerData.name, playerData.score)
        appState.Players.push(newPlayer)
    }

}
export const playerService = new PlayerService()