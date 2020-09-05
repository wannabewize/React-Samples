import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeSelector from './ThemeSelector';

const detectMobile = () => {
  return window.innerWidth < 600;
}

function debounce(fn, ms) {
  let timer
  return _ => {
    clearTimeout(timer)
    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  };
}

const AppContainer = () => {
  const [width, setWidth] = React.useState( window.innerWidth );
  const [isMobile, setMobileLayout] = React.useState( detectMobile() );

  const handleResize = () => {
    setWidth( window.innerWidth );
    const ret = detectMobile();
    if ( isMobile !== ret ) {
      window.location.reload();
    }
    setMobileLayout(ret);
  }

  const debouncedHandleResize = debounce(handleResize, 50);

  window.addEventListener('resize', debouncedHandleResize);
  
  return (
    <ThemeSelector isMobile={isMobile}>
      <App width={width} isMobile={isMobile} />
    </ThemeSelector>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
