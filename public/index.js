import fetchMovies from './fetchMovies.js';


document.addEventListener('DOMContentLoaded', () => {

    const searchButton = document.querySelector('#btnSearch');
     searchButton.addEventListener('click', () => {
        fetchMovies(document.getElementById('txtSearchForMovie').value).then(result => {
            console.log('fetch result', result)
            result.forEach(item => {
                const listItem = document.createElement('li');
                listItem.innerText = item.show.name;
                document.getElementById('lstResults').appendChild(listItem);
            });

        });
    })


})