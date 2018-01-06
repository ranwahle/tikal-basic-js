import fetchMovies from './fetchMovies.js';


document.addEventListener('DOMContentLoaded', () => {
    const moviesList = document.createElement('movies-list');
    document.body.appendChild(moviesList);

    document.getElementById('btnSearch').addEventListener('click', () => {
        fetchMovies(document.getElementById('txtSearchForMovie').value).then(result => {
            console.log('fetch result', result)

        });
    })



})