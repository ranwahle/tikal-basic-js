import fetchMovies from './fetchMovies.js';
import importComponent from './component-importer.js';

document.addEventListener('DOMContentLoaded', async () => {

    console.log('content loaded');
    try {
        const templateClone = await importComponent('./components/teams.component.html');
        const teamsPage = templateClone.querySelector('teams-component').cloneNode(true);

        document.body.appendChild(teamsPage);




        // document.getElementById('btnSearch').addEventListener('click', async () => {
        //
        //     const result = await fetchMovies(document.getElementById('txtSearchForMovie').value)
        //
        //     console.log('fetch result', result)
        //     result.forEach(item => {
        //
        //         //const listItem = document.createElement('li');
        //
        //         const movieElement = templateClone.querySelector('movie-item-element')
        //             .cloneNode(true);
        //         // listItem.innerText = item.show.name;
        //         movieElement.movie = item.show;
        //         document.getElementById('lstResults').appendChild(movieElement);
        //     });
        //
        //
        // });
    }
    catch(err) {
        console.error('error loading component', err);
    }


})