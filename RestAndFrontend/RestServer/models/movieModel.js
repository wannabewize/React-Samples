const fs = require('fs');
const data = fs.readFileSync(__dirname + '/../movies.json');
const movies = JSON.parse(data);

console.log('loading movie.json');

exports.addComment = (movieId, name, comment) => {
    // 영화 ID로 영화 객체 찾기
    const movie = this.getMovieDetail(movieId);
    // 영화 객체 내 comments 속성에 댓글 추가
    movie.comments.push({name, comment})

    return movie;
}

exports.getMovies = (genre) => {
    return movies
        .filter( (item) => {
            return genre ? item.genre.toLowerCase().includes(genre.toLowerCase())
                : true;
        })
        .map( (item) => {
            return {id: item.id, title: item.title, genre: item.genre};
        });        
}

exports.getMovieDetail = (movieId) => {
    const filtered = movies.filter( item => item.id == movieId );
    if (filtered.length > 0 ) {
        return filtered[0];
    }    
    return null;
}

