import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import PlayerContextProvider from './components/PlayerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <PlayerContextProvider>
    <App />
    </PlayerContextProvider>
  </React.StrictMode>
);

