import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LandingPage } from '@/pages';

const Routers = () => {
  return (
    <>
      {' '}
      <React.Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      </React.Suspense>
    </>
  );
};

export default Routers;
