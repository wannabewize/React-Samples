const movieModel = require('../models/movieModel');

exports.showMovieList = (req, res) => {
    const genre = req.query.genre;
    // 요청 메세지 쿼리에서 얻은 장르를 이용해서 모델에서 영화 목록 데이터 얻기
    const movies = movieModel.getMovies(genre);

    res.send(movies);
}

exports.showMovieDetail = (req, res) => {
    const movieId = req.params.movieId;
    // 영화 ID를 이용해서 영화 모델에서 상세 정보 얻기
    const movie = movieModel.getMovieDetail(movieId);

    // 영화가 없으면 404 에러
    if ( movie == null ) {
        res.sendStatus(404);
        return;
    }

    res.send(movie);
}

exports.addComment = (req, res) => {
    // 댓글이 작성되는 영화 ID를 라우트 파라미터에서 얻기
    const movieId = req.params.movieId;

    // 사용자가 입력한 유저 이름, 댓글, 평점
    const name = req.body.name;
    const comment = req.body.comment;

    // 모델을 이용해서 댓글 추가하기
    const movie = movieModel.addComment(movieId, name, comment);

    res.send(movie);
}