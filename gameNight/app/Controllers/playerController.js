import { appState } from "../AppState.js";
import { playerService } from "../Services/playerService.js";
import { getFormData } from "../Utils/FormHandler.js";

export class PlayerController{

    drawPlayer(){
        let players = appState.players
    }


    createPlayer(){
        window.event.preventDefault()

        const form = window.event.target

        let playerData = getFormData(form)
        playerService.createPlayer(playerData)
        this.drawPlayer()
    }



}