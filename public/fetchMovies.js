const baseUrl = `http://api.tvmaze.com/search/shows`;

export default function fetchMovies(searchString) {
    return fetch(`${baseUrl}?q=${searchString}`).then(response =>
        response.json()
)
    ;
}