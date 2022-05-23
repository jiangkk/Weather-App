import React from 'react';
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';


export default function () {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </HashRouter>
  );
}