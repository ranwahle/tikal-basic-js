import {GameService} from "./game.service.js";

export class TeamService {

    constructor() {
        this._gameService = new GameService();
    }

    set baseUrl(value) {
        this._gameService.baseUrl = value;
    }


    getTeams() {
        return fetch(`http://${this._gameService.baseUrl}:8080/teams/current`)
            .then(response => response.json());
    }
    
    


}