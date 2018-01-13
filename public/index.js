import fetchMovies from './fetchMovies.js';
import importComponent from './component-importer.js';

document.addEventListener('DOMContentLoaded', async () => {

    console.log('content loaded');
    const templateClone = await importComponent('./components/movie-item.component.html');

    document.getElementById('btnSearch').addEventListener('click', async () => {

        const result = await fetchMovies(document.getElementById('txtSearchForMovie').value)

        console.log('fetch result', result)
        result.forEach(item => {

            //const listItem = document.createElement('li');

            const listItem = templateClone.querySelector('movie-item-element').cloneNode(true);
            // listItem.innerText = item.show.name;
            listItem.movie = item.show;
            document.getElementById('lstResults').appendChild(listItem);
        });


    });


})