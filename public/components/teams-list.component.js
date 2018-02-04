customElements.define('teams-list', class extends HTMLElement{

    // TODO - get teams and render teams list
    constructor() {
        super();
    }

    get teams() {
        return this._teams;
    }
    set teams(value) {
        this._teams = value;
        this.render();
    }
    connectedCallback() {
        this.render();
    }

    teamsList() {
        let result = '';
        if (this.teams) {
            this.teams.forEach(team => {
                result += `<li class="team">${team.name}</li>`;
            })
        }
        return result;
    }

    render() {
        const template = `<h2>Teams</h2>
        <ul>${this.teamsList()}</ul>`

        this.innerHTML = template;
    }

})