customElements.define('movie-item-element', class extends HTMLElement {
   constructor() {
       super();

   }

   get movie() {
       return this._movie;
   }
   set movie(movie) {
       this._movie = movie;
       this.innerHTML = `<li>${movie.name}</li>`;
   }

    attributeChangedCallback (name, oldValue, newValue) {
        console.log(name, oldValue, newValue);
    }

    static get observedAttributes () {
        return ['movie']
    }



});

