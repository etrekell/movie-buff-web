import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DiscoverPage } from '../components/pages/DiscoverPage';
import { NotFoundPage } from '../components/lib';
import { MoviePage } from '../components/pages/MoviePage';

export const AuthenticatedApp = () => {
  const AppRoutes = () => {
    return (
      <Routes>
        <Route path='/discover' element={<DiscoverPage />} />
        <Route path='/movie/:movieId' element={<MoviePage />} />
        {/*This is a catch all*/}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    );
  };

  return (
    <div>
      <AppRoutes />
    </div>
  );
};
