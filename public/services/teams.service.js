import {GameService} from "./game.service.js";

export class TeamService {

    constructor() {
        this._gameService = new GameService();
    }

    set baseUrl(value) {
        this._gameService.baseUrl = value;
    }


    async getTeams()  {
        const response = await fetch(`http://${this._gameService.baseUrl}:8080/teams/current`);
         //const response = await fetchPromise;  //  .then(response => response.json());
        return await response.json();
    }




}