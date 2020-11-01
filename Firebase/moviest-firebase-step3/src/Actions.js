import firebase from 'firebase/app';

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIE_DETAIL = "FETCH_MOVIE_DETAIL";

function fetchMovies(movies) {
    return {
        type: FETCH_MOVIES,
        movies
    }
}

function fetchMovieDetail(movieId, movie) {
    return {
        type: FETCH_MOVIE_DETAIL,
        movieId,
        movie
    }
}

// 영화 목록 요청 - 완료되면 FETCH_MOVIES 액션 동작
export const requestMovies = (dispatch) => {
    console.log('request movies');

    // TODO : 요청 완료 전 중복 요청을 막기 위한 장치 필요 - FETCH_MOVIES_STARTED 필요
    firebase.firestore().collection('movies').get()
    .then( snapshot => {
        let items = snapshot.docs.map( item => {
            return {...item.data(), id: item.id};
        } );
        console.log('movies list fetched :', items);
        
        // 비동기 동작 완료 후 액션을 이용해서 스토어에 반영. 컴포넌트는 변경된 데이터 반영
        dispatch( fetchMovies(items) );    
    })
    .catch ( error => {
        // TODO: 에러 상황 처리
        console.error('Error :', error);
    });
}

// 영화 상세 정보 요청 - 완료되면 FETCH_MOVIE_DETAIL 액션 동작
export const requestMovieDetail = (dispatch, movieId) => {
    console.log('request movie detail:', movieId);

    // TODO : 요청 완료 전 중복 요청을 막기 위한 장치 필요 - FETCH_MOVIE_DETAIL_STARTED 필요
    firebase.firestore().collection('movies').doc(movieId).get()
    .then( snapshot => {
        let item = snapshot.data();
        console.log('fetched movie detail:', item);

        // 비동기 동작 완료 후 액션을 이용해서 스토어에 반영. 컴포넌트는 변경된 데이터 반영
        dispatch( fetchMovieDetail(movieId, item) );
    })
    .catch ( error => {
        // TODO: 에러 상황 처리
        console.error('Error :', error);
    });    
} 