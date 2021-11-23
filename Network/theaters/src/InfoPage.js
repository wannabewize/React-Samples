import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { resolveMovies } from "./Api";

const InfoPage = () => {
    const [movies, setMovies] = useState([]);
    const theater = useSelector(state => state.theater);

    // theater가 변경될 때마다 동작
    useEffect(async () => {
        console.log('use effect works');
        const movies = await resolveMovies();
        console.log('movies :', movies);
        setMovies(movies);
    }, [theater]);

    return (
        <div>
            <h1>Info Page</h1>
            <h3>이름 : {theater && theater.name}</h3>
            <h3>상영 중인 영화</h3>
            {movies.map( (item) => (
                <ul>
                    <li>제목 : {item.title}</li>
                    <li>출연 : {item.actors}</li>
                </ul>

            ))}
        </div>
    )
}

export default InfoPage;
