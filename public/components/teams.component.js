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

   async getTEamsComponent() {
        const existingTeamList = this.querySelector('teams-list');
        if (existingTeamList) {
            return existingTeamList;
        }
       const teamList = await importComponent(`./teams-list.component.html`,`teams-list`, this);
       return teamList;
    }

    addEvents() {
        this.querySelector('button')
            .addEventListener('click', async () => {
                const serverName =  this.querySelector('#serverName').value;
                localStorage.setItem('server-name', serverName)
            this.teamsService.baseUrl = serverName;
            const teams = await this.teamsService.getTeams();
           const teamList = await this.getTEamsComponent();
            teamList.teams = teams;
            this.appendChild(teamList);

        })
    }


    render() {
        this.innerHTML = ` <label>
        Server name:
    <input type="text" id="serverName" value="${localStorage.getItem('server-name') || '' }">
    </label>
    <button>Get Teams</button>`
    }
});