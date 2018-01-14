customElements.define('movie-item-element', class extends HTMLElement {
   constructor() {
       super();

   }

   get movie() {
       return this._movie;
   }
   set movie(movie) {
       this._movie = movie;
       if (movie.url) {
           this.innerHTML =  `<div><a href="${movie.url}"> ${movie.name}</a></div>`
       }
       else {
           this.innerHTML = `<div>${movie.name}</div>`;
       }
   }


});

