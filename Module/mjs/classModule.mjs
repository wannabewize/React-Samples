export class Movie {
    constructor(title) {
        this.title = title;
    }

    showIt = () => {
        console.log('This movie title is', this.title);
    }
}

// named export
// export {Movie};

export default Movie;