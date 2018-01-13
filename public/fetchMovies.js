const baseUrl = `http://api.tvmaze.com/search/shows`;

export default function fetchMovies(searchString) {
    const promise = fetch(`${baseUrl}?q=${searchString}`);
        return promise.then(response => {
            return response.json()
        }
)
    ;
}