import {TeamService} from "../services/teams.service.js";

customElements.define('teams-component',     class TeamsComponent extends HTMLElement{
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
       // this.querySelector('#serverName').addEventListener('change', () => console.log('url changed'));
        this.querySelector('button').addEventListener('click', () => {
            this.teamsService.baseUrl = this.querySelector('#serverName').value;
            this.teamsService.getTeams();
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