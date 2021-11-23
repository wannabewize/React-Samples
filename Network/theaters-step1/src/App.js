import { useState } from 'react';
import {RenderAfterNavermapsLoaded, NaverMap} from 'react-naver-maps';

function App() {
  const [mapRef, setMapRef] = useState(null);
  const [location, setLocation] = useState({lat: null, lng: null});

  const onMapIdled = () => {
    const center = mapRef.getCenter();
    console.log('map idled', center._lat, center._lng);
    setLocation({lat: center._lat, lng: center._lng});
  }
  return (
    <div>
      <RenderAfterNavermapsLoaded ncpClientId={process.env.REACT_APP_N_Cloud_Clinet_Id}>
        <NaverMap 
          naverRef={ref => { setMapRef(ref) }}
          style={{
            width: '100%',
            height: '80vh',
          }}
          zoomControl={true}
          onIdle={onMapIdled}
        />      
      </RenderAfterNavermapsLoaded>
      <h5>{JSON.stringify(location)}</h5>
    </div>
  );
}

export default App;
