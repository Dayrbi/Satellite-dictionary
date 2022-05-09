import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ROUTEPATH from 'constants/routesConstant';
import HomePage from 'pages/HomePage/HomePage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path={ROUTEPATH.HOME} element={<HomePage />} />
    </Routes>
  );
}

export default App;
