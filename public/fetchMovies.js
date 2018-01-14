const baseUrl = `http://api.tvmaze.com/search/shows`;

export default async function fetchMovies(searchString) {
    const jsonResult = await fetch(`${baseUrl}?q=${searchString}`);
    return jsonResult.json();

}