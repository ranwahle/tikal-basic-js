import {TeamService} from "../services/teams.service.js";
import importComponent from "../component-importer.js";
import {GameService} from "../services/game.service.js";

customElements.define('teams-component',  class TeamsComponent extends HTMLElement {
    constructor() {
        super();
        this.teamsService = new TeamService();
        this.gameService = new GameService();
       // this.render();
    }

    connectedCallback() {
        this.render();
        this.addEvents();
    }

   async getTeamsComponent() {
        const existingTeamList =  await this.querySelector('teams-list');
        if (existingTeamList) {
            return existingTeamList;
        }
       const teamList = await importComponent(`./teams-list.component.html`,`teams-list`, this);
       return teamList;
    }

    addEvents() {
        this.querySelector('#btnGetTeams')
            .addEventListener('click', async () => {
                const serverName =  this.querySelector('#serverName').value;
                localStorage.setItem('server-name', serverName)
            this.teamsService.baseUrl = serverName;
            const teams = await this.teamsService.getTeams();
           const teamList = await this.getTeamsComponent();
            teamList.teams = teams;
            if (teams && teams.length > 0) {
                this.gameId = teams[0].game.id;
            }
            this.appendChild(teamList);

        });
        this.querySelector('#btnRegister').addEventListener('click', () => {
           this.gameService.register(this.gameId);
        });
    }


    render() {
        this.innerHTML = ` <label>
        Server name:
    <input type="text" id="serverName" value="${localStorage.getItem('server-name') || '' }">
    </label>
    <button id="btnGetTeams">Get Teams</button>
  <button id="btnRegister">Register</button>`
    }
});