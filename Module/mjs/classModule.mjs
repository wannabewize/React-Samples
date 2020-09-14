export class Movie {
    constructor(title) {
        this.title = title;
    }

    showIt = () => {
        console.log('This movie title is', this.title);
    }
}

export default Movie;