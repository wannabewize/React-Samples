import { useEffect, useState } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Circle, Polyline } from 'react-naver-maps';
import { Marker } from 'react-naver-maps';
import { InitialTheaters } from './Theaters';
import { useDispatch } from 'react-redux';


function MovieMap() {
  const [mapRef, setMapRef] = useState(null);
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [theaters, setTheaters] = useState([]);
  const dispatch = useDispatch();
 
  const onMapIdled = () => {
    const center = mapRef.getCenter();
    console.log('map idled', center._lat, center._lng);
    setLocation({ lat: center._lat, lng: center._lng });
  }

  const onTheaterClicked = (theater) => {
    console.log('theater clicked', theater.name);
    dispatch({type: 'THEATER-SELECTED', data: theater});
  }

  useEffect(() => {
    setTheaters(InitialTheaters);
    console.log('theaters ;', theaters);
  }, []);

  return (
    <div>
      <RenderAfterNavermapsLoaded ncpClientId={process.env.REACT_APP_N_Cloud_Clinet_Id}>
        <NaverMap
          naverRef={ref => { setMapRef(ref) }}
          style={{
            width: '100%',
            height: '80vh',
          }}
          onIdle={onMapIdled}
          defaultZoom={13}
          zoomControl={true}>
            {/* {ExampleMarker} */}
            {theaters.map( (item) => (
              <Marker
                position={{ lat: item.location.latitude, lng: item.location.longitude }}
                onClick={() => {onTheaterClicked(item)}}
                />
            ))}
        </NaverMap>
      </RenderAfterNavermapsLoaded>
      <h5>{JSON.stringify(location)}</h5>
    </div>
  );
}

// 마커, 오버레이 예
const ExampleMarker = (
  <>
    <Marker position={{ lat: 37.559066, lng: 126.92224 }} />
    <Circle
      center={{ lat: 37.53335302601555, lng: 126.9651625979179 }}
      radius={200}
      strokeColor={'red'}
      fillColor={'#00FF00'}
    />
    <Polyline
      path={[
        { lat: 37.56451965542587, lng: 127.03811867981607 },
        { lat: 37.60084158185148, lng: 127.09202034897451 },
        { lat: 37.64245472564448, lng: 127.06908325157755 }
      ]}
      strokeColor={'#FF00FF'}
      strokeWeight={3}
    />
  </>
);

export default MovieMap;
