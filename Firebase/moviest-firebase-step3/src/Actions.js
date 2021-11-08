import { getFirestore } from "firebase/firestore"
import { collection, getDocs, getDoc, doc } from "firebase/firestore";

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

    const db = getFirestore();
    // 비동기 동작인 경우 - 바로 데이터 확인이 안된다. promise로 비동기 동작과 action 관계 명확히 하기
    getDocs(collection(db, "movies"))
    .then( (snapshot) => {
        let items = snapshot.docs.map( item => {
            return {...item.data(), id: item.id};
        } );
        // 비동기 동작 완료 후 액션을 이용해서 스토어에 반영. 컴포넌트는 변경된 데이터 반영
        dispatch( fetchMovies(items) );  
    }).catch((err) => {
        // TODO : 에러 상황에 대한 액션 실행
        console.error(err);
    });

}

// 영화 상세 정보 요청 - 완료되면 FETCH_MOVIE_DETAIL 액션 동작
export const requestMovieDetail = (dispatch, movieId) => {
    console.log('request movie detail:', movieId);

    const db = getFirestore();

    const docRef = doc(db, "movies", movieId);
    getDoc(docRef)
    .then( movieDoc => {
        dispatch( fetchMovieDetail(movieDoc.id, movieDoc.data()));         
    }).catch(err => {
        // TODO : 에러 상황에 대한 액션 실행
        console.error(err);
    });
} 