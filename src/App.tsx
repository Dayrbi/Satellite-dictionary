import React from 'react';
import { Routes, Route } from 'react-router-dom';

import ROUTEPATH from 'constants/routes';
import HomePage from 'pages/HomePage/HomePage';

import './App.css';
import ResultPage from 'pages/ResultPage/ResultPage';

function App() {
  return (
    <Routes>
      <Route path={ROUTEPATH.HOME} element={<HomePage />} />
      <Route path={`${ROUTEPATH.RESULT}:searchWord`} element={<ResultPage />} />
    </Routes>
  );
}

export default App;
