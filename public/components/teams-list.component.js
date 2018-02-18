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
        console.log('teams list', this.teams);
        let result = '';
        if (this.teams) {
            this.teams.forEach(team => {
                result += `<div class="team">${team.name} Score  ${team.score}, Spieces name: ${team.antSpecies.name}</div>`;
            })
        }
        return result;
    }

    render() {
        const template = `<h2>Teams</h2>
        <div class="list">${this.teamsList()}</div>
      `
        this.innerHTML = template;
    }

})