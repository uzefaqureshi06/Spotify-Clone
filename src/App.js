import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import DisplayHome from './components/DispalyHome';
import DisplayAlbum from './components/DisplayAlbum';
import './index.css';

const App = () => {
  return (
    <Router>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex">
          <Sidebar />
          <div className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg-ml-0">
            <Routes>
              <Route path="/" element={<DisplayHome />} />
              <Route path="/album/:id" element={<DisplayAlbum />} />
            </Routes>
            <audio preload='auto'></audio>
          </div>
        </div>
        <Player />
      </div>
    </Router>
  );
};

export default App;
