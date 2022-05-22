import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Detail from './pages/Detail';
import Home from './pages/Home';


export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}