import MovieMap from './MovieMap';
import InfoPage from './InfoPage';


function App() {
 
  return (
    <div style={{display: 'flex'}}>
      <div style={{width: "70%"}}>
        <MovieMap />
      </div>
      <div style={{width: "30%"}}>
        <InfoPage />
      </div>
    </div>
  );
}

export default App;
