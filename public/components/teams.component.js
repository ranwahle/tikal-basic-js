import {TeamService} from "../services/teams.service.js";
import importComponent from "../component-importer.js";

customElements.define('teams-component',  class TeamsComponent extends HTMLElement {
    constructor() {
        super();
        this.teamsService = new TeamService();
       // this.render();
    }

    connectedCallback() {
        this.render();
        this.addEvents();
    }

    addEvents() {
        this.querySelector('button')
            .addEventListener('click', async () => {
            this.teamsService.baseUrl = this.querySelector('#serverName').value;
            const teams = await this.teamsService.getTeams();
            const teamList = await importComponent(`./teams-list.component.html`,`teams-list`, this);
            teamList.teams = teams;
            this.appendChild(teamList);

        })
    }


    render() {
        this.innerHTML = ` <label>
        Server name:
    <input type="text" id="serverName">
    </label>
    <button>Get Teams</button>`
    }
});