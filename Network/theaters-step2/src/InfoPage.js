import { useSelector } from "react-redux";

const InfoPage = () => {
    const theater = useSelector(state => state.theater);
    console.log('theater from store ;', theater);

    return (
        <div>
            <h1>Info Page</h1>
            <h3>이름 : {theater && theater.name}</h3>
            <p> 위치 {theater && JSON.stringify(theater.location)} </p>
        </div>
    )
}

export default InfoPage;
