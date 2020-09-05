class Movie {
    constructor(title) {
        this.title = title;
    }

    showIt = () => {
        console.log('This movie title is', this.title);
    }
}

export {Movie};

export default Movie;