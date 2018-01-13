import fetchMovies from './fetchMovies.js';


document.addEventListener('DOMContentLoaded', () => {

    const templateImport =  document.getElementById('movieImport').import;
    const template = templateImport.querySelector('template');
    const templateClone = document.importNode(template.content, true);

    document.getElementById('btnSearch').addEventListener('click', async () => {

        const result = await fetchMovies(document.getElementById('txtSearchForMovie').value)

        console.log('fetch result', result)
        result.forEach(item => {

            //const listItem = document.createElement('li');

            const listItem = templateClone.querySelector('li').cloneNode(true);
            listItem.innerText = item.show.name;
            document.getElementById('lstResults').appendChild(listItem);
        });


    });



})