import { appState } from "../AppState.js";
import { playerService } from "../Services/playerService.js";
import { getFormData } from "../Utils/FormHandler.js";



function somethingElse() {
    console.log('something else happened')
}

export class PlayerController{
    drawPlayer() {
        let players = appState.players
        console.log('drawing player', players);
        let names = ''
        players.forEach(player => names += player.HTMLTemplate)
        document.getElementById('players').innerHTML = names
    }

    createPlayer(){
        window.event.preventDefault()
        const form = window.event.target
        let playerData = getFormData(form)
        playerService.createPlayer(playerData)
        this.drawPlayer()
    }

    losePoint(name) {
        console.log('-1 ', name);
        playerService.losePlayer(name)
        this.drawPlayer()
    }
    addPoint(name) {
        console.log('+1 ', name);
        playerService.addPlayer(name)
        this.drawPlayer()
    }
    

    constructor() {
        console.log('constructor ran');
        this.drawPlayer()
        somethingElse()
    }


}