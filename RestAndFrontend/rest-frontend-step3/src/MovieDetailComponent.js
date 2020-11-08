import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {resolveMovieDetail, writeMovieComment, ServerAddress} from "./MovieService";

export function MovieDetailComponent() {
    const [movie, setMovie] = useState();
    const {movieId} = useParams();

    useEffect(() => {
        resolveMovieDetail(movieId)
        .then( movie => { setMovie(movie.data) });        
    }, []);

    const submitComment = (name, comment) => {
        writeMovieComment(movieId, name, comment)
        .then( movie => { setMovie(movie.data) })
    }

    return (
        <div>
            { movie ?
                <div>
                    <h3>{movie.title}</h3>
                    <ul>
                        <li><img src={ServerAddress + movie.image} height={200} /></li>
                        <li>출연 : {movie.stars}</li>
                        <li>장르 : {movie.genre}</li>
                    </ul>
                </div>
                : <h3>정보가 없습니다.</h3>    
            }
            {
                movie && movie.comments.length > 0
                ? <MovieCommentList comments={movie.comments} /> : null
            }
            <MovieCommentForm submitComment={submitComment}/>
        </div>
    )
}

function MovieCommentList({comments}) {
    return (
        <div>
            <h5>댓글</h5>
            <ul>
            {comments.map( item => (
                <li>{item.name} - {item.comment}</li>
            ))}
            </ul>
        </div>
    )
}

function MovieCommentForm({submitComment}) {
    let [name, setName] = useState();
    let [comment, setComment] = useState();

    return (
        <div>
            <h5>댓글 쓰기</h5>
            <ul>
                <li>
                    <label for="name">이름</label>
                    <input type="text" id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}/>
                </li>
                <li>
                    <label for="name">댓글</label>
                    <input type="text" id="comment"
                        value={comment}
                        onChange={e => setComment(e.target.value)}/>
                </li>
                <li>
                    <button onClick={ () => {
                        submitComment(name, comment);
                        setName('');
                        setComment('');
                    }}>작성</button>
                </li>
            </ul>
        </div>
    )
}