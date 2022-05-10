import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ROUTEPATH from 'constants/routes';
import { HomePage } from 'pages/HomePage/HomePage';
import { ResultPage } from 'pages/ResultPage/ResultPage';

import './App.css';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';

export function App() {
  return (
    <Routes>
      <Route path={ROUTEPATH.HOME} element={<HomePage />} />
      <Route path={`${ROUTEPATH.RESULT}:searchWord`} element={<ResultPage />} />
      <Route path={ROUTEPATH.NOT_FOUND} element={<NotFoundPage />} />
      <Route path="*" element={<Navigate to={ROUTEPATH.HOME} />} />
    </Routes>
  );
}
